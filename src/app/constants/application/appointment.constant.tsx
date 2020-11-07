import { SelectItem } from '../../domains/util/utils.interface';

export const AppointmentTypes: SelectItem[] = [
    { label: 'New', value: 'NEW' },
    { label: 'Followup', value: 'FOLLOW_UP' },
    { label: 'Report', value: 'REPORT' }
];