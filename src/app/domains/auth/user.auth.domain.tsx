export class UserAuthInfo {
    name: string;
    username: string;
    userType: string;
    userId: number;
    roles: string[];
    orgCode: string;
    doctorId: number;
    bmdcNumber: string;
    phoneNumber: string;
    photoId: number;
    verificationPending: boolean;
    doctorTitle: string;
    orgInfoList: UserOrgInfo[];
}

export class UserOrgInfo {
    type: string;
    designation: string;
    orgId: number;
    orgName: string;
    orgCode: string;
}
