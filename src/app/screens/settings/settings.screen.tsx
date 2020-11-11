import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {
//   stackHeaderLeftFn,
//   stackHeaderRightFn,
// } from '../../constants/common/navigator';
import s from './settings.style';
import colors from '../../constants/common/colors';
import common from '../../constants/common/common';

const Settings = (props) => {
  return (
    <SafeAreaView>
      <View style={s.container}>
        <TouchableOpacity
          style={s.subContainer}
          activeOpacity={common.ACTIVE_OPACITY}
          onPress={() => props.navigation.navigate('Password')}>
          <Ionicons
            name={
              Platform.OS === 'android' ? 'md-finger-print' : 'ios-finger-print'
            }
            size={80}
            color={colors.PRIMARY}
          />
          <Text style={s.title}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// SettingsScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: 'Settings',
//     headerLeft: stackHeaderLeftFn(navData.navigation),
//     headerRight: stackHeaderRightFn,
//   };
// };

export default Settings;
