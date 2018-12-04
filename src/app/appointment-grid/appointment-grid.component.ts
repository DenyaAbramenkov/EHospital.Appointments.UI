import { Component, Output, Input, OnInit  , EventEmitter} from '@angular/core';
import { AppointmentService } from '../Services/appointment.service.service';
import { AppointmentViewRequest } from '../models/appointmentView';

@Component({
  selector: 'app-appointment-grid',
  templateUrl: './appointment-grid.component.html',
  styleUrls: ['./appointment-grid.component.css']
})
export class AppointmentGridComponent {
  public appointmentView: AppointmentViewRequest;
  @Output() editClicked = new EventEmitter<AppointmentViewRequest>();
  @Output() recordDeleted = new EventEmitter<AppointmentViewRequest>();
  @Output() newClicked = new EventEmitter<AppointmentViewRequest>();
  @Input() appointmentData: Array<AppointmentViewRequest>;

 constructor(private appointmentService: AppointmentService) {
    appointmentService.getAppointments().subscribe(
      res => {
        this.appointmentData = res;
        console.log(res);
      },
      err => console.log('Error retrieving diseases')
    );
}

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.newClicked.emit();
  }

}

