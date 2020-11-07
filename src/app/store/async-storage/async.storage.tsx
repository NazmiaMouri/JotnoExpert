import AsyncStorage from '@react-native-community/async-storage';
import {UserAuthInfo} from '../../domains/auth/user.auth.domain';

const STORE_NAME = 'DOC_APP_DATA';

export const clear = () => {
  AsyncStorage.removeItem(STORE_NAME);
};

export const get = async () => {
  const docAppData = await AsyncStorage.getItem(STORE_NAME);
  return JSON.parse(docAppData);
};

// export const saveTokenToStorage = (token: string) => {
//     AsyncStorage.setItem(STORE_NAME, JSON.stringify({ token: token }));
// };

// export const saveUserAuthInfoToStogare = async (userAuthInfo: UserAuthInfo) => {
//     await get().then(res => AsyncStorage.setItem(STORE_NAME, JSON.stringify({ ...res, userAuthInfo: userAuthInfo })));
// };

export const saveSelectedOrg = (orgId: number) => {
  AsyncStorage.setItem(STORE_NAME, JSON.stringify({orgId: orgId}));
};
