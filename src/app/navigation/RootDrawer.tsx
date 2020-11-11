import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from '../screens/DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DashboardStack,
  AppointmentStack,
  PrescriptionStack,
  PatientStack,
  SettingStack,
  ProfileStack
} from './StackNavigators';
import Profile from '../screens/profile/profile.screen';
import OrganizationList from '../screens/organization/organization.screen';

const Drawer = createDrawerNavigator();
function RootDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Appointment" component={AppointmentStack} />
      <Drawer.Screen name="Prescription" component={PrescriptionStack} />
      <Drawer.Screen name="Patient" component={PatientStack} />
      <Drawer.Screen name="Settings" component={SettingStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
    </Drawer.Navigator>
  );
}

export default RootDrawer;
