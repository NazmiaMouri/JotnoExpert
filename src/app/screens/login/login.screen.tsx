import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  StatusBar,
  Alert,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authAction from '../../store/redux-storage/auth/auth.action';
import styles from './login.style';

import fontSize from '../../constants/common/font.size';
import colors from '../../constants/common/colors';
import common from '../../constants/common/common';
import SwitchSelectorComponent from '../../components/ui/switch-selector/switch.selector.component';
import {SelectItem} from '../../domains/util/utils.interface';
import ButtonComponent from '../../components/ui/button/button.component';
import {AxiosError} from 'axios';
import {UserCredential} from '../../domains/auth/user.credential';

const LoginScreen = (props: any) => {
  const dispatch = useDispatch();
  const [doctorType, setDoctorType] = useState('MEDICAL');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const options: SelectItem[] = [
    {label: 'Medical', value: 'MEDICAL'},
    {label: 'Dental', value: 'DENTAL'},
  ];

  const loginFn = () => {
    setIsLoading(true);

    let userCredential: UserCredential = new UserCredential();
    userCredential.doctorType = doctorType;
    userCredential.password = password;
    userCredential.userType = 'DOCTOR';
    userCredential.username = username;

    dispatch(authAction.login(userCredential)).then(
      resolve => {
        setIsLoading(false);
        dispatch(authAction.fetchAuthInfo());
        props.navigation.navigate('Organizations');
      },
      (reject: AxiosError) => {
        setIsLoading(false);

        let message: string = 'Network Error';
        let request: string =
          'Please check your internet connection and try again.';
        if (reject && reject.response && reject.response.status) {
          message = 'Incorrect BMDC number or password';
          request = 'Please correct them and try again.';
        }

        Alert.alert(message, request, [{text: 'Okay'}]);
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.BRAND}
        translucent={true}
      />
      <ScrollView
        contentContainerStyle={styles.scollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={{alignItems: 'center'}}>
          <View style={styles.loginPageLogoContainer}>
            <Image
              style={styles.jotnoLogo}
              source={require('../../../assets/images/logo-solid.jpg')}
            />
            <Text style={styles.title}>MAKING HEALTHCARE DIGITAL</Text>
          </View>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.switchButton}>
            <View style={{width: '45%'}}>
              <SwitchSelectorComponent
                options={options}
                selectedItem={doctorType}
                onItemSelectFn={(type) => setDoctorType(type.toString())}
              />
            </View>

            <TextInput
              style={styles.doctorBMDC}
              placeholder="BMDC number"
              placeholderTextColor={colors.PRIMARY}
              value={username}
              onChangeText={(text) => setUserName(text)}
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>

          <View style={{width: '100%', marginBottom: common.MARGIN}}>
            <TextInput
              style={styles.doctorPassword}
              placeholder="Password"
              placeholderTextColor={colors.PRIMARY}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
            />
          </View>

          <ButtonComponent
            label="Doctor's Login"
            disabled={isLoading}
            // onPress={() => {
            //   props.navigation.navigate('Organizations');
            //   console.log('Done');
            // }}
            onPress={loginFn}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
