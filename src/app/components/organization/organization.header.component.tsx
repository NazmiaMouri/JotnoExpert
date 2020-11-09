import React from 'react';
import {
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import orgStyles from '../../screens/organization/organization.style';
// import {DoctorAssignmentInvitation} from '../../domains/organization/doctor.assignment.invitation';
import colors from '../../constants/common/colors';
import fontSize from '../../constants/common/font.size';
import common from '../../constants/common/common';
// import InvitationHeaderComponent from './invitation.header.component';
import * as authAction from '../../store/redux-storage/auth/auth.action';
import * as orgAction from '../../store/redux-storage/organization/organization.action';
import env from '../../../environments/environment';
import ButtonComponent from '../ui/button/button.component';

interface Props {
  navigation: any;
  // doctorInvitations: DoctorAssignmentInvitation[];
  hasOrganization: boolean;
  doctorTitle: string;
  name: string;
  photoId: number;
  isLoading: boolean;
}

const OrganizationHeaderComponent = (props: Props) => {
  const dispatch = useDispatch();

  const {doctorId} = useSelector((state) => state.auth.userAuthInfo || null);

  const logoutFn = () => {
    dispatch(authAction.logout()).then(props.navigation.push('login'));
  };

  // const acceptInvitationFn = (invitationId: number) => {
  //   dispatch(orgAction.acceptInvitation(doctorId, invitationId)).then(() =>
  //     dispatch(orgAction.fetchOrganizations(doctorId)),
  //   );
  // };

  // const denyInvitationFn = (invitationId: number) => {
  //   dispatch(orgAction.denyInvitation(doctorId, invitationId));
  // };

  return (
    <View style={{width: '100%', height: 'auto', justifyContent: 'center'}}>
      <View style={orgStyles.logoutButton}>
        <TouchableOpacity
          onPress={() => logoutFn()}
          style={{position: 'absolute', right: 0, padding: common.PADDING}}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
            size={35}
            color={colors.PRIMARY}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 300,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingVertical: common.PADDING,
        }}>
        <Image
          style={orgStyles.profilePicture}
          source={require('../../../assets/images/doctor.png')}
        />
        {/* {props.photoId ? (
          <Image
            style={orgStyles.profilePicture}
            defaultSource={require('../../../assets/images/doctor.png')}
            source={{uri: env.URL + '/attachment/download?id=' + props.photoId}}
          />
        ) : (
          <Image
            style={orgStyles.profilePicture}
            source={require('../../../assets/images/doctor.png')}
          />
        )} */}
        <View style={orgStyles.doctorTitleWrapper}>
          <Text style={{fontSize: fontSize.XL}}>Welcome </Text>
          <Text style={orgStyles.doctorTitle}>
            {' '}
            {props.doctorTitle} {props.name}
          </Text>
        </View>
      </View>

      {/* <FlatList
        data={props.doctorInvitations}
        renderItem={({item}) => (
          <View style={[orgStyles.item, {flex: 1, padding: common.PADDING}]}>
            <View>
              <Text style={orgStyles.title}>{item.orgName}</Text>
              <Text style={orgStyles.subTitle}>{item.note}</Text>
              <Text style={orgStyles.subTitle}>{item.created}</Text>
            </View>
            <View style={{paddingTop: common.HORIZONTAL, flexDirection: 'row'}}>
              <ButtonComponent
                key="accept"
                label="Accept"
                onPress={() => acceptInvitationFn(item.id)}
                styles={{backgroundColor: colors.ASH}}
                labelColor="#000"
              />

              <ButtonComponent
                key="reject"
                label="Reject"
                onPress={() => denyInvitationFn(item.id)}
                styles={{
                  backgroundColor: colors.ASH,
                  marginLeft: common.VERTICAL,
                }}
                labelColor="#000"
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <InvitationHeaderComponent
            hasDoctorInvitation={!!props.doctorInvitations.length}
          />
        }
      /> */}

      <View>
        <View style={orgStyles.myOrgWrapper}>
          <Text style={{fontSize: fontSize.L, color: '#fff'}}>
            <Ionicons
              name={Platform.OS === 'android' ? 'md-business' : 'ios-business'}
              size={common.ICON_SIZE}
              color="#fff"
            />{' '}
            My Organization
          </Text>

          <Text style={{fontSize: fontSize.T, marginLeft: 25, color: '#fff'}}>
            Tap to select your workspace
          </Text>
        </View>

        {!props.isLoading && !props.hasOrganization ? (
          <View style={orgStyles.orgList}>
            <Text
              style={[orgStyles.organizationCard, orgStyles.emptyOrganization]}>
              No organization found
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default OrganizationHeaderComponent;
