import http from '../../../core/api/http';
import Toast from 'react-native-root-toast';
import {DoctorPasswordChangeDto} from '../../../domains/profile/profile.domain';

export const CHANGE_DOCTOR_PASSWORD_URL = '/doctor-profile/change-password';

export const changeDoctorPassword = (
  password: DoctorPasswordChangeDto,
  navigation,
) => {
  return (dispatch) => {
    http.post(CHANGE_DOCTOR_PASSWORD_URL, password).then(
      (res) => {
        Toast.show('Passwoard Change Success');
        navigation.goBack();
      },
      (reject) => {
        Toast.show('Passwoard Change Failed');
      },
    );
  };
};
