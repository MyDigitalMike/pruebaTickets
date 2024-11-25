/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { EventRegistration } from '../models/event-registration';
import { User } from '../models/user';
export interface Event {
  createdAt?: string;
  createdBy?: number;
  description?: string | null;
  eventCreator?: User;
  eventDate?: string;
  id?: number;
  location?: string | null;
  maxCapacity?: number;
  name?: string | null;
  registeredCount?: number;
  registrations?: Array<EventRegistration> | null;
  updatedAt?: string;
}
