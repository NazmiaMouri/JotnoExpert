/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar,Text} from 'react-native';

import Login from './src/app/screens/login/login.screen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Login />
       {/* <Text>kchofhdxo</Text> */}
      </SafeAreaView>
    </>
  );
};

export default App;
