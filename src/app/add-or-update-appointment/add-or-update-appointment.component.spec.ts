import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel} from '@angular/forms';
import { AddOrUpdateAppointmentComponent } from './add-or-update-appointment.component';

describe('AddOrUpdateAppointmentComponent', () => {
  let component: AddOrUpdateAppointmentComponent;
  let fixture: ComponentFixture<AddOrUpdateAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
