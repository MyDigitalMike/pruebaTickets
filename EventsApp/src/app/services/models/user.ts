/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { EventRegistration } from '../models/event-registration';
export interface User {
  createdAt?: string;
  email?: string | null;
  id?: number;
  registrations?: Array<EventRegistration> | null;
  updatedAt?: string;
  userName?: string | null;
}