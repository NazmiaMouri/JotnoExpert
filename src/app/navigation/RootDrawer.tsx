import React from 'react';
import DrawerContent from '../screens/DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DashboardStack,
  AppointmentStack,
  PrescriptionStack,
  PatientStack,
} from './StackNavigators';

const Drawer = createDrawerNavigator();
function RootDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Appointment" component={AppointmentStack} />
      <Drawer.Screen name="Prescription" component={PrescriptionStack} />
      <Drawer.Screen name="Patient" component={PatientStack} />
    </Drawer.Navigator>
  );
}

export default RootDrawer;
