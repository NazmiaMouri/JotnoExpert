import { SelectItem } from '../../domains/util/utils.interface';

export const Genders: SelectItem[] = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
    { label: 'Unknown', value: 'U' }
];

export type Gender = 'M' | 'F' | 'O' | 'U';