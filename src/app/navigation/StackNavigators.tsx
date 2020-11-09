import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../screens/dashboard/dashboard.screen';
import Appointment from '../screens/appointment/appointment.screen';
import Prescription from '../screens/prescription/prescription.screen';
import Patient from '../screens/patient/patient.screen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export function DashboardStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(53,156,164)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 70, height: 20, margin: 10}}
                  source={require('../../assets/images/jotno-blank-h.png')}
                />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="bars"
                  color="#fff"
                  size={26}
                  style={[styles.calenderBtnWrapper, styles.shadow]}
                  onPress={() => props.navigation.openDrawer()}></Icon>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function AppointmentStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(53,156,164)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Dashboard');
                  }}>
                  <Image
                    style={{width: 70, height: 20, margin: 10}}
                    source={require('../../assets/images/jotno-blank-h.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="bars"
                  color="#fff"
                  size={26}
                  style={[styles.calenderBtnWrapper, styles.shadow]}
                  onPress={() => navigation.openDrawer()}></Icon>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
export function PrescriptionStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(53,156,164)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Prescription"
        component={Prescription}
        options={{
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Dashboard');
                  }}>
                  <Image
                    style={{width: 70, height: 20, margin: 10}}
                    source={require('../../assets/images/jotno-blank-h.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="bars"
                  color="#fff"
                  size={26}
                  style={[styles.calenderBtnWrapper, styles.shadow]}
                  onPress={() => navigation.openDrawer()}></Icon>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
export function PatientStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(53,156,164)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Patient"
        component={Patient}
        options={{
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Dashboard');
                  }}>
                  <Image
                    style={{width: 70, height: 20, margin: 10}}
                    source={require('../../assets/images/jotno-blank-h.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="bars"
                  color="#fff"
                  size={26}
                  style={[styles.calenderBtnWrapper, styles.shadow]}
                  onPress={() => navigation.openDrawer()}></Icon>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginVertical: 50,
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 0.1,
  },
  calenderBtnWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  calenderBtnText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
});
