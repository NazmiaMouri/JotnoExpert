import React, {useState} from 'react';
import {View, Text, SafeAreaView, Picker} from 'react-native';
import {AppointmentTabs} from '../../navigation/TabNavigator';
import CalendarStrip from 'react-native-calendar-strip';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
function Appointment() {
  const [date, setDate] = useState(moment());
  const [selected, setSelected] = useState(moment());
  // const today = moment().format('MMMM Do YYYY');
  const minDate = moment().format('YYYY-MM-DD');
  const [selectedValue, setSelectedValue] = useState('Square');

  const onDatePress = (day) => {
    setSelected(day._d);
  };

  const customDatesStylesFunc = (Eachdate) => {
    console.log(date.format('YYYY-MM-DD'));
    console.log(Eachdate.format('YYYY-MM-DD'));
    console.log(selected.format('YYYY-MM-DD'));

    if (
      Eachdate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD') ||
      Eachdate.format('YYYY-MM-DD') === selected.format('YYYY-MM-DD')
    ) {
      console.log('got it');
      // Fridays
      return {
        dateNameStyle: {color: 'blue'},
        dateNumberStyle: {color: 'purple'},
        dateContainerStyle: {color: 'yellow'},
      };
    } else {
      console.log('not matched');
    }
  };

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
            minDate={minDate}
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
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>

        <CalendarStrip
          style={{height: 70}}
          customDatesStyles={customDatesStylesFunc}
          minDate={minDate}
          scrollable={false}
          // selectedDate={date}
          calendarHeaderPosition="hidden"
          onDateSelected={onDatePress}
        />
      </SafeAreaView>
      <AppointmentTabs />
    </>
  );
}

export default Appointment;
