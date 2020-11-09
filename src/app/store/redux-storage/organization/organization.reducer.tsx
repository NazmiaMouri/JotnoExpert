import {
  FETCH_ORGANIZATIONS,
  SET_SELECTED_ORGANIZATION,
  RESET_ORG_STATE,
} from './organization.action';

const initialState = {
  selectedOrgId: null,
  organizations: [],
  doctorInvitations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.organizations,
      };

    case SET_SELECTED_ORGANIZATION:
      return {
        ...state,
        selectedOrgId: action.orgId,
      };

    case RESET_ORG_STATE:
      return initialState;

    default:
      return state;
  }
};
