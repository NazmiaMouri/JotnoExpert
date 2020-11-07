import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from '../screens/appointment/List';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function AppointmentTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={List} />
      <Tab.Screen name="Pending" component={List} />

      <Tab.Screen name="Confirm" component={List} />
    </Tab.Navigator>
  );
}
