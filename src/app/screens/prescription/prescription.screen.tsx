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

import * as prescAction from '../../store/redux-storage/prescription/prescription.action';
// import * as appointmentAction from '../../store/redux-storage/appointment/appointment.action';
import colors from '../../constants/common/colors';
import prescStyle from './prescription.style';

import {PrescriptionListItemDto} from '../../domains/prescription/prescription.list.item.domain';
import {DataTableSearchParam} from '../../domains/common/datatable.search.param.domain';

const Prescription = (props) => {
  const dispatch = useDispatch();
  const prescriptions: PrescriptionListItemDto[] = useSelector(
    (state) => state.prescription.prescriptions || [],
  );
  const orgId: number = useSelector((state) => state.org.selectedOrgId);
  const doctorId: number = useSelector(
    (state) => state.auth.userAuthInfo.doctorId,
  );
  // const organizations: Organization[] = useSelector(state => state.org.organizations || []);
  // const doctorInvitations: DoctorAssignmentInvitation[] = useSelector(state => state.org.doctorInvitations || []);
  // const selectedOrgId: number = useSelector(state => state.org.selectedOrgId);

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = useCallback(() => {
    console.log('id:' + doctorId);
    if (doctorId && orgId) {
      let searchParam = new DataTableSearchParam(
        1,
        15,
        [
          {data: 'id', search: {value: '', regex: false}},
          {data: 'fromDate', search: {value: '', regex: false}},
          {data: 'rxNumber', search: {value: '', regex: false}},
          {data: 'patientPhoneNumber', search: {value: '', regex: false}},
          {data: 'patientName', search: {value: '', regex: false}},
          {data: 'fatherName', search: {value: '', regex: false}},
          {data: 'motherName', search: {value: '', regex: false}},
          {data: 'address', search: {value: '', regex: false}},
          {data: 'toDate', search: {value: '', regex: false}},
        ],
        [],
      );
      console.log('id:' + doctorId);
      setIsRefreshing(true);
      dispatch(prescAction.fetchPrescriptions(orgId, doctorId, searchParam));
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [dispatch, setIsRefreshing, setIsLoading]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return (
      <View style={prescStyle.centered}>
        <ActivityIndicator size="large" color={colors.ACCENT} />
      </View>
    );
  }

  return (
    <SafeAreaView style={prescStyle.orgContainer}>
      <StatusBar barStyle="light-content" backgroundColor={colors.BRAND} />
      <FlatList
        data={prescriptions}
        refreshing={isRefreshing}
        onRefresh={() => fetchData()}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={prescStyle.orgList}>
              <View style={[prescStyle.organizationCard]}>
                <Text style={[prescStyle.patientName]}>{item.patientName}</Text>
                <Text style={prescStyle.employment}>
                  Rx Number: {item.rxNumber}
                </Text>
                <Text style={prescStyle.employment}>
                  Phone Number: {item.patientPhoneNumber}
                </Text>
                {/* <Text style={prescStyle.employment}>Age: {item.patientAge}</Text> */}
                <Text style={prescStyle.employment}>
                  Father: {item.fatherName}
                </Text>
                <Text style={prescStyle.employment}>
                  Mother: {item.motherName}
                </Text>
                <Text style={prescStyle.employment}>
                  Gender: {item.patientGender}
                </Text>
                <Text style={prescStyle.employment}>
                  Adreess: {item.address}
                </Text>
                <Text style={prescStyle.employment}>
                  Age:{' '}
                  {item.patientAge.year +
                    'y' +
                    item.patientAge.month +
                    'm' +
                    item.patientAge.day +
                    'd'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Prescription;
