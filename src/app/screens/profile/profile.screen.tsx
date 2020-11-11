import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import env from '../../../environments/environment';
function Profile({navigation}) {
  const doctor = useSelector((state) => state.auth.userAuthInfo || null);
  function RenderDoctor(props) {
    const doctor = props.doctor;

    if (doctor != null) {
      return (
        <ScrollView>
          <Card>
            <Card.Title>
              {doctor.doctorTitle}
              {doctor.name}
            </Card.Title>
            <Card.Divider />

            <Card.Image
              style={{justifyContent: 'center', backgroundColor: '#fff'}}>
              {/* {doctor.photoId ? ( */}
              <Image
                style={{ width: 100, height: 100, alignSelf: 'center' }}
                resizeMode="contain"
                
                source={require('../../../assets/images/doctor.png')}
              />
              {/* ) : (
                <Image
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                  resizeMode="contain"
                  source={require('../../../assets/images/doctor.png')}
                />
              )} */}
            </Card.Image>

            <View>
              <View>
                <View style={styles.verticalMargin}>
                  <Text style={[styles.marginRight, {fontWeight: 'bold'}]}>
                    BMCD No:
                  </Text>
                  <Text>{doctor.bmdcNumber}</Text>
                </View>
                <View style={styles.verticalMargin}>
                  <Text style={[styles.marginRight, {fontWeight: 'bold'}]}>
                    Name :
                  </Text>
                  <Text>{doctor.name}</Text>
                </View>
                <View style={styles.verticalMargin}>
                  <Text style={[styles.marginRight, {fontWeight: 'bold'}]}>
                    Phone:
                  </Text>
                  <Text>{doctor.phoneNumber}</Text>
                </View>
              </View>
            </View>
          </Card>
        </ScrollView>
      );
    } else {
      return <View></View>;
    }
  }
  return (
    <View>
      {/* <Header
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
      /> */}
      <RenderDoctor doctor={doctor} />
    </View>
  );
}
const styles = StyleSheet.create({
  verticalMargin: {
    marginBottom: 5,
    flexDirection: 'row',
  },
  marginRight: {
    marginRight: 5,
  },
});

export default Profile;
