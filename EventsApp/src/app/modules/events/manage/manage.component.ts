import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from '../../../services/services';
import { ApiEventsCreatePost$Params } from '../../../services/fn/events/api-events-create-post';
import { ApiEventsEventIdPut$Params } from '../../../services/fn/events/api-events-event-id-put';
import { Event } from '../../../services/models';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage',
  standalone: false,

  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {
  @Input() idEvent: number | null = null;
  eventForm: FormGroup;
  eventList: Event[] = [];
  loadingList: boolean = true;
  errorService: string | null = null;
  userId: number = 1;
  eventId: number | null = null;
  constructor(
    public modal: NgbActiveModal,
    private readonly eventsService: EventsService
  ) {
    this.eventForm = new FormGroup({
      eventName: new FormControl('', [Validators.required]),
      eventDescription: new FormControl('', [Validators.required]),
      eventDate: new FormControl('', [Validators.required]),
      eventLocation: new FormControl('', [Validators.required]),
      eventCapacity: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') ? parseInt(localStorage.getItem('userId') || '1') : 1;
    this.patchValues(this.userId);
  }
  closeModal() {
    this.modal.close();
  }
  onSubmit() {
    if (this.eventForm.valid) {
      const { eventName, eventDescription, eventDate, eventLocation, eventCapacity } = this.eventForm.value;
      const event: Event = {
          createdAt:new Date().toISOString(),
          createdBy: this.userId,
          description: eventDescription,
          eventDate: eventDate,
          location: eventLocation,
          maxCapacity: eventCapacity,
          name: eventName,
          registeredCount: 0,
          registrations:[],
          updatedAt: new Date().toISOString()
      };
      if (this.idEvent) {
        const params: ApiEventsEventIdPut$Params = {
          eventId: this.idEvent,
          userId: this.userId,
          body: event
        }
        this.eventsService.apiEventsEventIdPut(params).subscribe({
          next: (response: any) => {
            const { message } = JSON.parse(response);
            Swal.fire('Evento actualizado', message, 'success');
            this.modal.close();
          },
          error: (err) => {
            console.error(err);
          }
        });
      } else {
        const params: ApiEventsCreatePost$Params = {
          body: event,
          userId: localStorage.getItem('userId') ? parseInt(localStorage.getItem('userId') as string) : undefined
        };
        this.eventsService.apiEventsCreatePost(params).subscribe({
          next: (response: any) => {
            const { message } = JSON.parse(response);
            Swal.fire('Evento creado', message, 'success');
            console.log(message);
            this.modal.close();
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
    }
  }
  patchValues(userId: number) {
    if (this.idEvent) {
      this.eventsService.apiEventsByUserUserIdGet({ userId }).subscribe({
        next: (response: any) => {
          const { message, data } = JSON.parse(response);
          this.eventList = data || [];
          const selectEvent = this.eventList.find((evento: Event) => evento.id === this.idEvent);
          if (selectEvent) {
            this.eventForm.patchValue({
              eventName: selectEvent.name,
              eventDescription: selectEvent.description,
              eventDate: selectEvent.eventDate,
              eventLocation: selectEvent.location,
              eventCapacity: selectEvent.maxCapacity,
            });
          } else {
            console.warn('No se encontró un evento con el id especificado.');
          }
          this.errorService = message || null;
          this.loadingList = false;
        },
        error: (err) => {
          console.error(err);
          this.errorService = 'Error al cargar los eventos. Intenta nuevamente.';
          this.loadingList = false;
        }
      });
    }
  }

}
