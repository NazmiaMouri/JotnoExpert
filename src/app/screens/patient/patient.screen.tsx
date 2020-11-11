import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as patientAction from '../../store/redux-storage/patient/patient.action';
import s from './patient.style';
import colors from '../../constants/common/colors';
import common from '../../constants/common/common';
import {DataTableSearchParam} from '../../domains/common/datatable.search.param.domain';
import {PatientBasicInfo} from '../../domains/patient/patient.basic.info.domain';
import {validatePhoneFn} from '../../constants/common/validator';

const PatientLookupScreen = (props) => {
  const dispatch = useDispatch();

  const patients: PatientBasicInfo[] = useSelector(
    (state) => state.patient.patients,
  );

  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const lookupPatient = useCallback(() => {
    let searchParam = new DataTableSearchParam(0, 20, [], []);
    searchParam.search.value = query;
    dispatch(patientAction.searchPatientProfiles(searchParam));
  }, [dispatch, query]);

  useEffect(() => {
    if (query.length && query.length > 3) {
      lookupPatient();
    } else {
      lookupPatient();
    }
    lookupPatient();
  }, [dispatch, query, lookupPatient]);

  const onPhoneNumberChangeFn = (phone: string) => {
    setPhone(phone);
    setQuery(phone);

    if (validatePhoneFn(phone)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const onPatientSelectFn = (patient: PatientBasicInfo) => {
    props.navigation.navigate('Patient Attending', {patient: patient});
  };

  // const newPhoneNumberFn = () => {
  //   props.navigation.navigate('AppointmentForm', {phone: phone});
  // };

  return (
    <View style={s.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={s.container}>
          <TextInput
            placeholder="01..."
            keyboardType="number-pad"
            style={s.input}
            autoFocus
            maxLength={11}
            clearButtonMode="always"
            value={phone}
            onChangeText={(text) => onPhoneNumberChangeFn(text)}
          />

          {error && <Text style={s.errorMessage}>Invalid phone number</Text>}
        </View>

        {!error && (
          <TouchableOpacity
            style={{padding: common.PADDING, backgroundColor: colors.PRIMARY}}
            // onPress={() => newPhoneNumberFn()}
          >
            <Ionicons
              name={
                Platform.OS === 'android'
                  ? 'md-checkmark-circle-outline'
                  : 'ios-checkmark-circle-outline'
              }
              color="#fff"
              size={common.ICON_SIZE}
            />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={patients}
        renderItem={({item}) => (
          <TouchableOpacity
            style={s.infoContainer}
            activeOpacity={common.ACTIVE_OPACITY}
            onPress={() => {
              onPatientSelectFn(item);
            }}>
            <View style={s.infoSubContainer}>
              <Text style={s.patientName}>
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-person' : 'ios-contact'}
                  size={common.ICON_SIZE}
                  color={colors.PRIMARY}
                />{' '}
                {item.name}
              </Text>
              <Text>
                {item.gender == 'M'
                  ? 'Male'
                  : item.gender == 'F'
                  ? 'Female'
                  : 'Other'}
              </Text>
            </View>

            <View style={s.infoSubContainer}>
              <Text style={s.patientDob}>{item.dateOfBirth}</Text>
              <Text>{item.profileId}</Text>
            </View>

            <View style={s.infoSubContainer}>
              <Text>Father Name: {item.fatherName || 'N/A'}</Text>
            </View>

            <View style={s.infoSubContainer}>
              <Text>Mother Name: {item.motherName || 'N/A'}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

PatientLookupScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Search Patient',
  };
};

export default PatientLookupScreen;
