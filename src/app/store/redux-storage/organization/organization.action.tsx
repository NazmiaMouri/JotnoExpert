import http from '../../../core/api/http';
import * as asyncStorage from '../../async-storage/async.storage';
import {createURL} from '../../helper/url.helper';
import Toast from 'react-native-root-toast';

export const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS';

export const SET_SELECTED_ORGANIZATION = 'SET_SELECTED_ORGANIZATION';
export const RESET_ORG_STATE = 'RESET_ORG_STATE';

const FETCH_ORGANIZATIONS_URL = '/doctor-workspaces/{doctorId}';

export const fetchOrganizations = (doctorId: number) => {
  return async (dispatch) => {
    const url = createURL(FETCH_ORGANIZATIONS_URL, {doctorId});
    await http.get(url).then(
      (res) => {
        dispatch({
          type: FETCH_ORGANIZATIONS,
          organizations: res.data.extra.list,
        });
      },
      (reject) => {
        throw reject;
      },
    );
  };
};

export const setSelectedOrg = (orgId: number) => {
  return (dispatch) => {
    dispatch({type: SET_SELECTED_ORGANIZATION, orgId: orgId});
    asyncStorage.saveSelectedOrg(orgId);
  };
};
