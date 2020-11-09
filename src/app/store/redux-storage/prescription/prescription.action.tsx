import http from '../../../core/api/http';
import {createURL} from '../../helper/url.helper';
import {DataTableSearchParam} from '../../../domains/common/datatable.search.param.domain';

export const FETCH_PRESCRIPTION_COUNTS = 'FETCH_PRESCRIPTION_COUNTS';
export const FETCH_PRESCRIPTIONS = 'FETCH_PRESCRIPTIONS';

const FETCH_PRESCRIPTION_COUNTS_URL =
  '/doctor-workspaces/{doctorId}/rx-counts/{orgId}';
const FETCH_PRESCRIPTIONS_URL =
  '/prescription/org/{orgId}/doctor/{doctorId}/page';

export const fetchPrescriptionCounts = (doctorId: number, orgId: number) => {
  return (dispatch) => {
    const url = createURL(FETCH_PRESCRIPTION_COUNTS_URL, {doctorId, orgId});
    http.get(url).then(
      (res) => {
        dispatch({type: FETCH_PRESCRIPTION_COUNTS, count: res.data.data});
      },
      (reject) => {
        throw reject;
      },
    );
  };
};

export const fetchPrescriptions = (
  orgId: number,
  doctorId: number,
  searchParam: DataTableSearchParam,
) => {
  return (dispatch) => {
    const url = createURL(FETCH_PRESCRIPTIONS_URL, {orgId, doctorId});
    http.post(url, searchParam).then(
      (res) => {
        dispatch({type: FETCH_PRESCRIPTIONS, prescriptions: res.data.data});
      },
      (reject) => {
        throw reject;
      },
    );
  };
};
