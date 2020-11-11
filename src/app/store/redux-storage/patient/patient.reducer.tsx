import {
  FETCH_PATIENTS,
  SEARCH_PATIENT_PROFILES,
  RESET_PATIENTS,
} from './patient.action';
import {PatientBasicInfo} from '../../../domains/patient/patient.basic.info.domain';

const patients: PatientBasicInfo[] = [];

const initialState = {
  patients: [...patients],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PATIENT_PROFILES:
      return {
        ...state,
        patients: [...action.patients],
      };

    case FETCH_PATIENTS:
      return {
        ...state,
        patients: action.patients,
      };
    case RESET_PATIENTS:
      return initialState;

    default:
      return state;
  }
};
