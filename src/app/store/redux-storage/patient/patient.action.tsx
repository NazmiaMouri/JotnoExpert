import http from '../../../core/api/http';
import {DataTableSearchParam} from '../../../domains/common/datatable.search.param.domain';
import {createURL} from '../../helper/url.helper';
export const SEARCH_PATIENT_PROFILES = 'SEARCH_PATIENT_PROFILES';
export const RESET_PATIENTS = 'RESET_PATIENTS';
export const FETCH_PATIENTS = 'FETCH_PATIENTS';
const FETCH_PATIENT_LIST_URL = '/doctor/patients/list';

export const searchPatientProfiles = (searchParam: DataTableSearchParam) => {
  return (dispatch) => {
    http.post(FETCH_PATIENT_LIST_URL, searchParam).then(
      (res) => {
        dispatch({type: SEARCH_PATIENT_PROFILES, patients: res.data.data});
      },
      (reject) => {
        throw new Error(reject);
      },
    );
  };
};

export const resetPatients = () => {
  return (dispatch) => {
    dispatch({type: RESET_PATIENTS});
  };
};
// export const fetchPatients = () => {
//   return (dispatch) => {
//     // const url = createURL(FETCH_PRESCRIPTIONS_URL, {orgId, doctorId});
//     http.post(FETCH_PATIENT_LIST_URL).then(
//       (res) => {
//         dispatch({type: FETCH_PATIENTS, patients: res.data.data});
//       },
//       (reject) => {
//         throw reject;
//       },
//     );
//   };
// };
export const fetchPatients = () =>
  // doctorId: number
  {
    return async (dispatch) => {
      // const url = createURL(FETCH_PATIENT_LIST_URL, {doctorId});
      await http.get(FETCH_PATIENT_LIST_URL).then(
        (res) => {
          console.log('---------------patientdata------------' + res.data);
          dispatch({
            type: FETCH_PATIENTS,
            patients: res.data.extra.list,
          });
        },
        (reject) => {
          console.log('rejected');
          throw reject;
        },
      );
    };
  };
