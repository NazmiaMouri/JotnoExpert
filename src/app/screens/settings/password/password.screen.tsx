import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-root-toast';
import s from './password.style';
import * as profileAction from '../../../store/redux-storage/profile/profile.action';
import {DoctorPasswordChangeDto} from '../../../domains/profile/profile.domain';
import ButtonComponent from '../../../components/ui/button/button.component';

const PasswordScreen = (props) => {
  const dispatch = useDispatch();

  const username: string = useSelector(
    (state) => state.auth.userAuthInfo.username,
  );
  const [oldPassword, setOldPassword] = useState<string>(null);
  const [plainPassword, setPlainPassword] = useState<string>(null);
  const [confirmPassword, setConfirmPassword] = useState<string>(null);

  const [oldPasswordTouched, setOldPasswordTouched] = useState<boolean>(false);
  const [plainPasswordTouched, setPlainPasswordTouched] = useState<boolean>(
    false,
  );
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState<boolean>(
    false,
  );

  const updatePasswordFn = () => {
    if (
      !oldPassword ||
      !plainPassword ||
      !confirmPassword ||
      plainPassword !== confirmPassword
    ) {
      setOldPasswordTouched(true);
      setPlainPasswordTouched(true);
      setConfirmPasswordTouched(true);
      Toast.show('Form invalid');
      return;
    }

    let password = new DoctorPasswordChangeDto();
    password.oldPassword = oldPassword;
    password.plainPassword = plainPassword;
    password.confirmPassword = confirmPassword;
    password.username = username;

    dispatch(profileAction.changeDoctorPassword(password, props.navigation));
  };

  return (
    <SafeAreaView>
      <ScrollView style={s.container} keyboardShouldPersistTaps="handled">
        <View style={s.formControl}>
          <Text style={s.inputTitle}>
            Old Password<Text style={s.required}>*</Text>
          </Text>
          <TextInput
            placeholder="Old Password"
            keyboardType="default"
            style={s.input}
            secureTextEntry={true}
            autoCapitalize="none"
            value={oldPassword}
            onChangeText={(text) => setOldPassword(text)}
            onBlur={() => setOldPasswordTouched(true)}
          />
          {oldPasswordTouched && !oldPassword && (
            <Text style={s.errorMessage}>Old password required</Text>
          )}
        </View>

        <View style={s.formControl}>
          <Text style={s.inputTitle}>
            New Password<Text style={s.required}>*</Text>
          </Text>
          <TextInput
            placeholder="Password"
            keyboardType="default"
            style={s.input}
            secureTextEntry={true}
            autoCapitalize="none"
            value={plainPassword}
            onChangeText={(text) => setPlainPassword(text)}
            onBlur={() => setPlainPasswordTouched(true)}
          />
          {plainPasswordTouched && !plainPassword && (
            <Text style={s.errorMessage}>Password required</Text>
          )}
        </View>

        <View style={s.formControl}>
          <Text style={s.inputTitle}>
            Confirm Password<Text style={s.required}>*</Text>
          </Text>
          <TextInput
            placeholder="Confirm Password"
            keyboardType="default"
            style={s.input}
            secureTextEntry={true}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            onBlur={() => setConfirmPasswordTouched(true)}
          />
          {confirmPasswordTouched && !confirmPassword && (
            <Text style={s.errorMessage}>Confirm password required</Text>
          )}
          {confirmPassword && confirmPassword !== plainPassword ? (
            <Text style={s.errorMessage}>Password mismatch</Text>
          ) : null}
        </View>

        <ButtonComponent label="Update Password" onPress={updatePasswordFn} />
      </ScrollView>
    </SafeAreaView>
  );
};

PasswordScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Change Password',
  };
};

export default PasswordScreen;
