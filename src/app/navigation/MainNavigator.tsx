import React from 'react';
import {useSelector} from 'react-redux';
import RootStack from './RootStack';
import RootDrawer from './RootDrawer';

function MainNavigator() {
  // const {token} = useSelector((state) => state.auth.userToken || null);
  // console.log(token);
  // return token == null ? <RootDrawer /> : <RootStack />;

  return <RootStack />;
}

export default MainNavigator;
