import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/services';
import { Event } from '../../../services/models';
import { ApiEventsEventIdRegisterPost$Params } from '../../../services/fn/events/api-events-event-id-register-post';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  eventList: Event[] = [];
  loadingList: boolean = true;
  errorService: string | null = null;
  userId: number = 1;
  constructor(
    private readonly eventsService: EventsService
  ) { }
  ngOnInit(): void {
    this.getEventsWhitRegistration();
    this.userId = localStorage.getItem('userId') ? parseInt(localStorage.getItem('userId') || '1') : 1;
  }
  getEvents(): void{
    this.eventsService.apiEventsListGet().subscribe({
      next: (response: any) => {
        const { message, data } = JSON.parse(response);
        this.eventList = data || [];
        this.errorService = message || null;
        this.loadingList = false;
      },
      error: (err) => {
        this.errorService = 'Error al cargar los eventos. Intenta nuevamente.';
        console.error(err);
        this.loadingList = false;
      }
    });
  }
  getEventsWhitRegistration(): void{
    this.eventsService.apiEventsListWithRegistrationsGet().subscribe({
      next: (response: any) => {
        const { message, data } = JSON.parse(response);
        this.eventList = data || [];
        this.errorService = message || null;
        this.loadingList = false;
      },
      error: (err) => {
        this.errorService = 'Error al cargar los eventos. Intenta nuevamente.';
        console.error(err);
        this.loadingList = false;
      }
    });
  }
  suscribeToEvents(eventId: number): void {
    console.log(eventId);
    const params: ApiEventsEventIdRegisterPost$Params = {
      eventId: eventId,
      userId: this.userId
    };

    this.eventsService.apiEventsEventIdRegisterPost(params).subscribe({
      next: (response: any) => {
        const { message } = JSON.parse(response);
        Swal.fire('Inscripción exitosa', message, 'success');
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
