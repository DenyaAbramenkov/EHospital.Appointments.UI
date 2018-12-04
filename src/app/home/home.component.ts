import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../Services/appointment.service.service';
import * as _ from 'lodash';
import { NgModel} from '@angular/forms';
import {AppointmentViewRequest} from '../models/appointmentView';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public appointmentData: Array<AppointmentViewRequest>;
  public currentAppointment: AppointmentViewRequest;

  ngOnInit() {
  }

  constructor(private appointmentService: AppointmentService) {
    appointmentService.getAppointments().subscribe((data: any) => this.appointmentData = data);
    this.currentAppointment = this.setInitialValuesForAppointmentData();
  }

  private setInitialValuesForAppointmentData() {
    return {
      appointmentid: undefined,
      patientId: undefined,
      userId: undefined,
      destination: '',
      duration: undefined,
    };
  }

  public addOrUpdateAppointment = function (appointment: any) {
    let appointmentWithId;
    appointmentWithId = _.find(this.appointmentData, (el => el.id === appointment.id));

    if (appointmentWithId) {
      const updateIndex = _.findIndex(this.appointmentData, {appointmentid: appointmentWithId.appointmentid});
      this.AppointmentService.UpdateAppointment()(appointment).subscribe(
        AppointmentRecord => this.appointmentData.splice(updateIndex, 1,  appointment)
      );
    } else {
      this.AppointmentService.CreateAppointment(appointment).subscribe(
        AppointmentRecord => this.appointmentData.push(appointment)
      );
    }

    this.currentAppointment = this.setInitialValuesForAppointmentData();
  };

  public editClicked = function (record) {
    this.currentAppointment = record;
  }

  public newClicked = function () {
    this.currentAppointment = this.setInitialValuesForAppointmentData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.appointmentData, {id: record.id});
    this.appointmentService.DeleteAppointment(record).subscribe(
      result => this.appointmentData.splice(deleteIndex, 1)
    );

  }
}
