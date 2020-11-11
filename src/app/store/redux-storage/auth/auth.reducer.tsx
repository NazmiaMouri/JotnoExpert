import {
  // RESTORE_TOKEN,
  // LOGIN,
  LOGOUT,
  FETCH_AUTH_INFO,
  SET_AUTH_INFO,
} from './auth.action';
import {UserAuthInfo} from '../../../domains/auth/user.auth.domain';
import * as asyncStorage from '../../async-storage/async.storage';
const initialState = {
  userAuthInfo: new UserAuthInfo(),
  // isSignout: false,
  // userToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case RESTORE_TOKEN:
    //   return {
    //     ...state,
    //     userToken: action.token,
    //   };
    // case LOGIN:
    //   return {
    //     ...state,
    //     isSignout: false,
    //     userToken: action.token,
    //   };
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
