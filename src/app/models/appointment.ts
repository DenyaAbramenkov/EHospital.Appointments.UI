export class AppointmentRequest {
  constructor(
    appointmentid?: number,
    patientid?: number,
    userid?: number,
    appointmentDataTime?: DateTimeFormat,
    duration?: number,
    purpose?: string,
    isdeleted?: boolean,
  ) { }
}
