import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import AppMainNavigator from './MainNavigator';

const NavigationContainer = (props) => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  const navRef = useRef<any>();

  useEffect(() => {
    if (!isAuthenticated) {
      navRef.current.dispatch(NavigationActions.navigate({routeName: 'Auth'}));
    }
  }, [isAuthenticated]);

  return <AppMainNavigator ref={navRef} />;
};
export default NavigationContainer;

