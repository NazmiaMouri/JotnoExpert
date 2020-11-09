export class PrescriptionListItemDto {
  id: number;
  rxNumber: string;
  patientPhoneNumber: string;
  patientName: string;
  fatherName: null;
  motherName: null;
  address: null;
  doctorName: string;
  prescriptionDate: string;
  patientAge: PatientAge;
  patientGender: string;
  patientProfileId: string;

  constructor() {
    this.patientAge = new PatientAge();
  }
}

class PatientAge {
  year: number;
  month: number;
  day: number;
}
