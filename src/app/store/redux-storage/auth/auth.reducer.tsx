import {LOGOUT, FETCH_AUTH_INFO, SET_AUTH_INFO} from './auth.action';
import {UserAuthInfo} from '../../../domains/auth/user.auth.domain';

const initialState = {
  userAuthInfo: new UserAuthInfo(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_INFO:
      return {
        ...state,
        userAuthInfo: action.userAuthInfo,
      };

    case SET_AUTH_INFO:
      return {
        ...state,
        userAuthInfo: action.userAuthInfo,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
