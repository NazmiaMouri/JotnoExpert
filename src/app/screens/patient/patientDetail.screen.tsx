/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function PatientDetail(props) {
  const [patient, setPatient] = useState(props.route.params.patient);
  return (
    <View>
      <Text>{patient.name}</Text>
      <Text>{patient.age}</Text>
      <Text>{patient.gender}</Text>
    </View>
  );
}

export default PatientDetail;
