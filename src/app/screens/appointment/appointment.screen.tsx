import React, {useState} from 'react';
import {View, Text, SafeAreaView, Picker} from 'react-native';
import {AppointmentTabs} from '../../navigation/TabNavigator';
import CalendarStrip from 'react-native-calendar-strip';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
function Appointment() {
  const today = moment().format('YYYY-MM-DD');
  const [selectedValue, setSelectedValue] = useState('Square');
  return (
    <>
      <SafeAreaView>
        <View style={{flexDirection:'row'}}>
          <Picker
            style={{height: 20, width: 150,flex:1}}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Labaid" value="lab" />
            <Picker.Item label="Square" value="sq" />
          </Picker>
          <DatePicker
            style={{width: 150,flex:1}}
            date={today}
            mode="date"
            placeholder="select date"
            format="MMMM, YYYY"
            minDate={today}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            // customStyles={{
            //   dateIcon: {
            //     position: 'absolute',
            //     left: 0,
            //     top: 4,
            //     marginLeft: 0,
            //   },
            //   dateInput: {
            //     marginLeft: 36,
            //   },
            //   // ... You can check the source to find the other keys.
            // }}
            //   onDateChange={(date) => {
            //     this.setState({date: date});
            //   }}
          />
        </View>

        <CalendarStrip
          style={{height: 70}}
          minDate={today}
          //   onHeaderSelected={('2020-11-10', '2020-11-17')}
            calendarHeaderPosition="hidden"
        />
      </SafeAreaView>
      <AppointmentTabs />
    </>
  );
}

export default Appointment;
