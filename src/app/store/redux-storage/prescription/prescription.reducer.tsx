import {
  FETCH_PRESCRIPTION_COUNTS,
  FETCH_PRESCRIPTIONS,
} from './prescription.action';
import {PrescriptionListItemDto} from '../../../domains/prescription/prescription.list.item.domain';

const prescriptions: PrescriptionListItemDto[] = [];

const initialState = {
  count: {},
  prescriptions: prescriptions,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRESCRIPTION_COUNTS:
      return {
        ...state,
        count: action.count,
      };

    case FETCH_PRESCRIPTIONS:
      return {
        ...state,
        prescriptions: action.prescriptions,
      };

    default:
      return state;
  }
};
