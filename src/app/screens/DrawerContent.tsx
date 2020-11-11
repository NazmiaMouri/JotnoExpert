import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import * as authAction from '../store/redux-storage/auth/auth.action';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AxiosError} from 'axios';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {AuthContext} from './context';

function DrawerContent(props: any) {
  const dispatch = useDispatch();
  //   const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   const {signOut} = React.useContext(AuthContext);
  //   const [selectedValue, setSelectedValue] = useState('java');
  //   const toggleTheme = () => {
  //     setIsDarkTheme(!isDarkTheme);
  //   };
  const logoutFn = () => {
    dispatch(authAction.logout()).then((resolve) => {
      dispatch(authAction.clearAuth());
      props.navigation.push('login');
    });
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../../assets/images/user-blank.jpg')}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title style={styles.title}>Dr. Robert</Title>
                <Caption style={styles.caption}>Neurologist</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="calendar-account" color={color} size={size} />
              )}
              label="Appointments"
              onPress={() => {
                props.navigation.navigate('Appointment');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="card-account-details" color={color} size={size} />
              )}
              label="Patient"
              onPress={() => {
                props.navigation.navigate('Patient');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-circle" color={color} size={size} />
              )}
              label="Prescription"
              onPress={() => {
                props.navigation.navigate('Prescription');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-circle" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>
          
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <View style={{flexDirection: 'row', paddingLeft: 20, paddingTop: 20}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              props.navigation.navigate('Profile');
            }}>
            <Icon name="account-circle" size={25} color="grey" />
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}} onPress={logoutFn}>
            <Icon name="exit-to-app" size={20} color="grey" />
            <Text>Log out</Text>
          </TouchableOpacity>
        </View>
      </Drawer.Section>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,

    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
