import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AppointmentViewRequest } from '../models/appointmentView';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-add-or-update-appointment',
  templateUrl: './add-or-update-appointment.component.html',
  styleUrls: ['./add-or-update-appointment.component.css']
})

export class AddOrUpdateAppointmentComponent implements OnInit {
  @Output() appointmentCreated = new EventEmitter<AppointmentViewRequest>();
  @Input() appointmentInfo: AppointmentViewRequest;
  public buttonText = 'Save';

  constructor() {
    this.clearAppointmentInfo();
  }
  ngOnInit() {
  }

  private clearAppointmentInfo = function() {
    this.appointmentInfo = {
      id: undefined,
      patientId: undefined,
      userId: undefined,
      destination: '',
      duration: undefined
    };
  };

  public addOrUpdateAppointmentRecord = function(event) {
    this.appointmentCreated.emit(this.appointmentInfo);
    this.clearAppointmentInfo();
  };
}
