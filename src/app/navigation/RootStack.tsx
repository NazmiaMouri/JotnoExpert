import React from 'react';

import LoginScreen from '../screens/login/login.screen';

import OrganizationList from '../screens/organization/organization.screen';

import {createStackNavigator} from '@react-navigation/stack';
import RootDrawer from './RootDrawer';

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="Organizations" component={OrganizationList} />
      <Stack.Screen name="Dashboard" component={RootDrawer} />
    </Stack.Navigator>
  );
}

export default RootStack;
