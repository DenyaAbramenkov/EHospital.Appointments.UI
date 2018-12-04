export class AppointmentViewRequest {
    appointmentid: number;
    patientId?: number;
    userId?: number;
    duration?: number;
    purpose?: string;
    datetime?: DateTimeFormat;
}
