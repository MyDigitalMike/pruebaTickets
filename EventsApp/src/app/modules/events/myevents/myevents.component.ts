import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ManageComponent } from '../manage/manage.component';
import { EventsService } from '../../../services/services';
import { Event } from '../../../services/models';
import { ApiEventsEventIdDelete$Params } from '../../../services/fn/events/api-events-event-id-delete';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-myevents',
  standalone: false,

  templateUrl: './myevents.component.html',
  styleUrl: './myevents.component.css'
})
export class MyeventsComponent implements OnInit {
  modalRefCreateEvent: NgbModalRef | null = null;
  eventList: Event[] = [];
  loadingList: boolean = true;
  errorService: string | null = null;
  userId: number = 1;
  eventId: number | null = null;
  constructor(
    private readonly modalCreateEvent: NgbModal,
    private readonly eventsService: EventsService
  ) { }
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') ? parseInt(localStorage.getItem('userId') || '1') : 1;
    this.getEventsByUser(this.userId);
  }
  getEventsByUser(userId: number): void {
    this.eventsService.apiEventsByUserUserIdGet({ userId }).subscribe({
      next: (response: any) => {
        const { message, data } = JSON.parse(response);
        this.eventList = data || [];
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
  deleteEvent(eventId: number): void {
    if (eventId) {
      const params: ApiEventsEventIdDelete$Params = {
        eventId: eventId,
        userId: this.userId
      }
      this.eventsService.apiEventsEventIdDelete(params).subscribe({
        next: (response: any) => {
          const { message } = JSON.parse(response);
          Swal.fire('Evento eliminado', message, 'success');
          this.modalRefCreateEvent?.close();
          this.getEventsByUser(this.userId);
        },
        error: (err) => {
          console.error(err);
          let errorMessage = 'Error inesperado. Por favor, intenta nuevamente.';
          if (err.error) {
            try {
              const errorResponse = JSON.parse(err.error);
              errorMessage = errorResponse.error || errorMessage;
            } catch (e) {
              errorMessage = err.error;
            }
          }
          Swal.fire('Error', errorMessage, 'error');
        }
      });
    }
  }
  openModalCrearEvento() {
    this.modalRefCreateEvent = this.modalCreateEvent.open(ManageComponent, { size: 'lg', centered: true, backdrop: 'static', keyboard: false });
  }
  openModalEditarEvento(id: number) {
    this.modalRefCreateEvent = this.modalCreateEvent.open(ManageComponent, { size: 'lg', centered: true, backdrop: 'static', keyboard: false });
    this.modalRefCreateEvent.componentInstance.idEvent = id;
  }
}
