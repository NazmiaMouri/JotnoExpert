import React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput, Button} from 'react-native';
import {Switch} from 'react-native-switch';

function Login() {
  return (
    <SafeAreaView>
      <View >
        <Switch
          value={true}
          onValueChange={(val) => console.log(val)}
          disabled={false}
          activeText={'Medical'}
          inActiveText={'Dental'}
          circleSize={30}
          barHeight={1}
          circleBorderWidth={3}
          backgroundActive={'white'}
          backgroundInactive={'gray'}
          circleActiveColor={'#30a566'}
          circleInActiveColor={'#000000'}
          changeValueImmediately={true}
          // custom component to render inside the Switch circle (Text, Image, etc.)
          // if rendering inside circle, change state immediately or wait for animation to complete
          innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
          outerCircleStyle={{}} // style for outer animated circle
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
          switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />

        <TextInput placeholder="BMDC Number"  />
        <TextInput placeholder="Password" />
        <Button title="Login" onPress={() => ()}/>
      </View>
    </SafeAreaView>
  );
}

export default Login;
