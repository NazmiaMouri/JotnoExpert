import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile({navigation}) {
  return (
    <View>
      <Header
        leftComponent={
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="bars"
              color="#fff"
              size={26}
              style={[styles.calenderBtnWrapper, styles.shadow]}
              onPress={() => navigation.openDrawer()}></Icon>
          </View>
        }
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}>
              <Image
                style={{width: 50, height: 50, margin: 10}}
                source={require('../../../assets/images/logo-solid.jpg')}
              />
            </TouchableOpacity>
          </View>
        }
      />
      <Text>I am Profile</Text>
    </View>
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

export default Profile;
