import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AppointmentViewRequest} from '../models/appointmentView';
import {AppointmentRequest} from '../models/appointment';

@Injectable()
	export class AppointmentService {
  private headers: HttpHeaders;
  private accessPointUrl = 'https://localhost:44323/api/appointments';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAppointments(): Observable<AppointmentViewRequest[]> {
    return this.http.get<AppointmentViewRequest[]>(this.accessPointUrl, {headers: this.headers}).pipe(map(response => {
      return response;
    }));
  }

  public getAppointmentById(payload) {
    return this.http.get<AppointmentViewRequest[]>(this.accessPointUrl + '/' + payload.id, {headers: this.headers}).pipe(map(response => {
      return response;
    }));
  }

  public CreateAppointment(appointmet: AppointmentViewRequest) {
    return this.http.post<AppointmentViewRequest>(this.accessPointUrl, appointmet, {headers: this.headers});
  }

  public DeleteAppointment(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public UpdateAppointment(appointment: AppointmentViewRequest) {
    return this.http.put<AppointmentViewRequest>(this.accessPointUrl  + '/' + appointment.appointmentid, appointment,  {headers: this.headers});
  }
}


