import { TestBed, inject } from '@angular/core/testing';

import { Appointment.ServiceService } from './appointment.service.service';

describe('Appointment.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Appointment.ServiceService]
    });
  });

  it('should be created', inject([Appointment.ServiceService], (service: Appointment.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
