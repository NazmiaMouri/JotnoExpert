export class AppointmentConfig {
  organization: Organization;
  schedules: Schedule[];
  config: Config;
  doctor: Doctor;
  leaves: any[];

  constructor() {
    this.organization = new Organization();
    this.schedules = [];
    this.config = new Config();
    this.leaves = [];
    this.doctor = new Doctor();
  }
}

export class Config {
  autoConfirmation: boolean;
  reportFee: number;
  followupFee: number;
  timePerPatient: number;
  fee: number;
  waitingListEnabled: boolean;
  availability: string;
  waitingListSize: number;
  type: CONFIG_TYPE;
}

class Doctor {
  bmdc: string;
  name: string;
}

class Organization {
  code: string;
  address: string;
  name: string;
}

class Schedule {
  from: string;
  id: number;
  day: string;
  to: string;
}


export class Appointment {
  id?: number;
  orgId?: number;
  orgCode?: string;
  bmdc?: string;
  doctorId?: number;
  doctorType?: string;
  date?: string;
  time?: string;
  serial?: number;
  type?: string;
  status?: string;
  phoneNumber?: string;
  name?: string;
  dateOfBirth?: string;
  gender?: string;
  bloodGroup?: string;
  emergency?: boolean;
  patientComments?: string;
  orgComments?: string;
  scheduleId?: number;
  patientProfileId?: string;

  constructor() {
    this.type = 'NEW';
  }
}

export class OpenAppointments {
  id?: number;
  orgCode?: string;
  bmdc?: string;
  doctorId?: string;
  date?: string;
  time?: string;
  serial?: number;
  type: string;
  status?: string;
  phoneNumber?: string;
  name?: string;
  dateOfBirth?: string | null;
  gender?: string;
  bloodGroup?: string;
  emergency?: string;
  patientComments?: string;
  orgComments?: string;
  scheduleId?: number;

  constructor() {
    this.type = 'NEW';
    this.dateOfBirth = null;
  }

}

export type SCHEDULE_STATE = 'NONE' | 'NORMAL' | 'WAITING' | 'FULL';

type CONFIG_TYPE = 'Slot' | 'Serial';

export interface StatusSlot {
  slot: number,
  time: string,
  scheduleId: number,
  status: string
}

export interface WaitingFlagSlot {
  slot: number,
  time: string,
  scheduleId: number,
  waiting: boolean
}