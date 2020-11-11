import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  StatusBar,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as orgAction from '../../store/redux-storage/organization/organization.action';

import colors from '../../constants/common/colors';
import orgStyles from './organization.style';
import OrganizationHeaderComponent from '../../components/organization/organization.header.component';
import {Organization} from '../../domains/organization/organization.domain';

const OrganizationList = (props) => {
  
  const dispatch = useDispatch();
  const {doctorId, doctorTitle, name, photoId} = useSelector(
    (state) => state.auth.userAuthInfo || null,
  );
  const organizations: Organization[] = useSelector(
    (state) => state.org.organizations || [],
  );

  const selectedOrgId: number = useSelector((state) => state.org.selectedOrgId);

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = useCallback(() => {
    if (doctorId) {
      setIsRefreshing(true);
      dispatch(orgAction.fetchOrganizations(doctorId));
      console.log(doctorId)
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [dispatch, setIsRefreshing, setIsLoading]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (doctorId) {
      dispatch(orgAction.fetchOrganizations(doctorId));

      setIsLoading(false);
    }
  }, [dispatch, doctorId]);

  const selectOrgFn = (orgId: number) => {
    dispatch(orgAction.setSelectedOrg(orgId));

    props.navigation.navigate('Dashboard');
  };

  // if (isLoading) {
  //   return (
  //     <View style={orgStyles.centered}>
  //       <ActivityIndicator size="large" color={colors.ACCENT} />
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={orgStyles.orgContainer}>
      <StatusBar barStyle="light-content" backgroundColor={colors.BRAND} />

      <FlatList
        data={organizations}
        refreshing={isRefreshing}
        onRefresh={() => fetchData()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => selectOrgFn(item.orgId)}
            style={orgStyles.orgwrapper}>
            <View style={orgStyles.orgList}>
              <View
                style={[
                  orgStyles.organizationCard,
                  {
                    backgroundColor:
                      selectedOrgId === item.orgId ? colors.BRAND : '#fff',
                  },
                ]}>
                <Text
                  style={[
                    orgStyles.orgName,
                    {color: selectedOrgId === item.orgId ? '#fff' : '#000'},
                  ]}>
                  {item.orgName}
                </Text>
                <Text style={orgStyles.employment}>
                  Employed As: {item.designation}
                </Text>
                <Text style={orgStyles.employment}>
                  Employment Type: {item.type}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.orgId.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <OrganizationHeaderComponent
            hasOrganization={!!organizations.length}
            // doctorInvitations={doctorInvitations}
            doctorTitle={doctorTitle}
            name={name}
            photoId={photoId}
            isLoading={isLoading}
            navigation={props.navigation}
          />
        }
      />
    </SafeAreaView>
  );
};

export default OrganizationList;
