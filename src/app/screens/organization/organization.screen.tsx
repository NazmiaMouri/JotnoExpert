import React from 'react';
import {Text, Button, SafeAreaView, StyleSheet} from 'react-native';
import RootDrawer from '../../navigation/RootDrawer';
import RootStack from '../../navigation/RootStack';
function OrganizationList(props: any) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="done choosing" onPress={() => <RootStack />} /> */}
      <Button
        title="done choosing"
        onPress={() => props.navigation.navigate('DashboardPage')}
      />
    </SafeAreaView>
  );
}

export default OrganizationList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginVertical: 50,
    justifyContent: 'center',
  },
});
