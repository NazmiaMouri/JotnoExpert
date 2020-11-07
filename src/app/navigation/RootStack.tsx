import React from 'react';

import LoginScreen from '../screens/login/login.screen';
import {DashboardStack} from './StackNavigators';

import OrganizationList from '../screens/organization/organization.screen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="Organizations" component={OrganizationList} />
    </Stack.Navigator>
  );
}

export default RootStack;
