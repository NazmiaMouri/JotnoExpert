import React,{useEffect} from 'react'
import { UserAuthInfo } from '../../../domains/auth/user.auth.domain';
import http from '../../../core/api/http';
import * as asyncStorage from '../../async-storage/async.storage';
import {AxiosError, AxiosResponse} from 'axios';
import {UserCredential} from '../../../domains/auth/user.credential';
import {RESET_ORG_STATE} from '../organization/organization.action';
// import {RESET_APPOINTMENT_STATE} from '../appointment/appointment.action';

export const LOGIN = 'LOGIN';
export const RESTORE_TOKEN='RESTORE_TOKEN'
export const LOGOUT = 'LOGOUT';
export const FETCH_AUTH_INFO = 'FETCH_AUTH_INFO';
export const SET_AUTH_INFO = 'SET_AUTH_INFO';

const LOGIN_URL = '/auth/login';
const LOGOUT_URL = '/auth/logout';
const USER_AUTH_INFO_URL = '/users/authInfo';

// useEffect(() => {
//   // Fetch the token from storage then navigate to our appropriate place
//   const bootstrapAsync = async () => {
//     let userToken;

//     try {
//       userToken =  asyncStorage.get();
//     } catch (e) {
//       // Restoring token failed
//     }

//     // After restoring token, we may need to validate it in production apps

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     dispatch({type: RESTORE_TOKEN, token: userToken});
//   };

//   bootstrapAsync();
// }, []);
export const login = (userCredential: UserCredential) => {
  return async (dispatch) => {
    await http.post(LOGIN_URL, userCredential).then(
      async (res: AxiosResponse) => {
        // let usertoken;
        // try {
        //   usertoken = await asyncStorage.get();
        // } catch (e) {
        //   // Restoring token failed
        // }
        // dispatch({type: LOGIN, userToken: usertoken});
      },
      (reject: AxiosError) => {
        throw reject;
      },
    );
  };
};

export const logout = () => {
  return async (dispatch) => {
    await http.post(LOGOUT_URL).then(
      (res) => {
        asyncStorage.clear();
        console.log('clear');
      },
      (reject) => {
        asyncStorage.clear();
        console.log('not clear');
        throw reject;
      },
    );
    dispatch({type: LOGOUT});
    dispatch({type: RESET_ORG_STATE});
    // dispatch({type: RESET_APPOINTMENT_STATE});
  };
};

export const clearAuth = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT});
    asyncStorage.clear();
  };
};

export const fetchAuthInfo = () => {
  return async (dispatch) => {
    await http.get(USER_AUTH_INFO_URL).then(
      (res) => {
        const userAuthInfo: UserAuthInfo = res.data.data;
        dispatch({type: FETCH_AUTH_INFO, userAuthInfo: userAuthInfo});
        console.log(res.data.data);
      },
      (reject) => {
        throw reject;
      },
    );
  };
};

export const setUserAuthInfo = (userAuthInfo: UserAuthInfo) => {
  return (dispatch) => {
    dispatch({type: SET_AUTH_INFO, userAuthInfo: userAuthInfo});
  };
};
