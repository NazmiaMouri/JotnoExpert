import { Gender } from '../../constants/application/gender.constant';

export class PatientBasicInfo {
    id: number;
    name: string;
    fatherName: string;
    motherName: string;
    profileId: string;
    dateOfBirth: string;
    email: string;
    gender: Gender;
    phoneNumber: string;
    bloodGroup: string;
    registered: boolean;
    emergencyAccessEnabled: boolean;
    demography: Demography;
    occupationId: number;
    photoId: number;
    doctorGivenPatientId: string;
    autoIncrementPatientId: number;
}

type Demography = 'URBAN' | 'SEMI_URBAN' | 'RURAL';