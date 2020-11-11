import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as authAction from '../../store/redux-storage/auth/auth.action';
import * as orgAction from '../../store/redux-storage/organization/organization.action';
// import * as appointmentAction from '../../store/redux-storage/appointment/appointment.action';
import * as asyncStorage from '../../store/async-storage/async.storage';
import Colors from '../../constants/common/colors';

const StartupScreen = (props) => {
  const dispatch = useDispatch();
  const doctorId: number = useSelector(
    (state) => state.auth.userAuthInfo.doctorId || null,
  );

  useEffect(() => {
    const tryLogin = async () => {
      const appData = await asyncStorage.get();

      dispatch(authAction.fetchAuthInfo()).then(
        (res) => {
          if (!appData || !appData.orgId) {
            props.navigation.navigate('OrganizationList');
            return;
          }
          dispatch(orgAction.setSelectedOrg(appData.orgId));

          // dispatch(appointmentAction.fetchAppointmentConfig(appData.orgId, doctorId));

          props.navigation.navigate('Dashboard');
        },
        (errr) => {
          dispatch(authAction.clearAuth());
          props.navigation.navigate('Auth');
        },
      );
    };
    tryLogin();
  }, [dispatch, doctorId]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/jotno-blank-h.png')}
        />
      </View>
      <View>
        <Text style={styles.subtitle}>Powered by Square Health</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BRAND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 70,
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
  },
});

export default StartupScreen;
