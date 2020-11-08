import React, {useState} from 'react';
import {View, Text, SafeAreaView, Picker} from 'react-native';
import {AppointmentTabs} from '../../navigation/TabNavigator';
import CalendarStrip from 'react-native-calendar-strip';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
function Appointment() {
  const [date, setDate] = useState(moment().format('MMMM Do YYYY'));
  // const today = moment().format('MMMM Do YYYY');
  const minDate = moment().format('YYYY-MM-DD');
  const [selectedValue, setSelectedValue] = useState('Square');
  return (
    <>
      <SafeAreaView>
        <View style={{flexDirection: 'row'}}>
          <Picker
            style={{height: 20, width: 150, flex: 1}}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Labaid" value="lab" />
            <Picker.Item label="Square" value="sq" />
          </Picker>
          <DatePicker
            style={{width: 150, flex: 1}}
            date={date}
            mode="date"
            placeholder="select date"
            format="MMMM Do, YYYY"
            // format="YYYY-MM-DD"
            minDate={minDate}
            // showIcon={false}

            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
          {/* <DateTimePicker
            testID="dateTimePicker"
            value={today}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          /> */}
        </View>

        <CalendarStrip
          style={{height: 70}}
          minDate={minDate}
          //   onHeaderSelected={('2020-11-10', '2020-11-17')}
          calendarHeaderPosition="hidden"
          // startingDate={}
          // onDateSelected
        />
      </SafeAreaView>
      <AppointmentTabs />
    </>
  );
}

export default Appointment;
