/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/rootNavigation';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import {LogBox, Modal} from 'react-native';
import {getUserTheme} from './src/functions/getUserTheme';
import {updateUserOffline, updateUserTheme} from './src/redux/userSettingSlice';
import {useNetInfo} from '@react-native-community/netinfo';
import {NoInternetComponent} from './src/components/noInternetComponent';
import {ToastProvider, useToast} from 'react-native-toast-notifications';

// Ignore log notification by message
LogBox.ignoreAllLogs(true);

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <ToastProvider
        duration={4000}
        animationType="zoom-in"
        placement="bottom"
        offsetBottom={80}
        swipeEnabled={true}>
        <App />
      </ToastProvider>
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  const Offline = Settings?.offline;
  const netInfo = useNetInfo();
  const toast = useToast();
  const userThemeData = async () => {
    const themeStyle = await getUserTheme();
    if (themeStyle) {
      dispatch(updateUserTheme(themeStyle));
    }
  };
  useEffect(() => {
    userThemeData();
  }, []);

  useEffect(() => {
    if (netInfo.isConnected) {
      if (Offline) {
        toast.show('you are back online', {type: 'success'});
      }
      dispatch(updateUserOffline(false));
    }
  }, [netInfo.isConnected]);

  return (
    <NavigationContainer theme={Theme !== 'dark' ? DefaultTheme : DarkTheme}>
      <RootNavigation />
      <Modal
        animationType="fade"
        transparent={true}
        visible={Offline ? false : netInfo.isConnected === false}>
        <NoInternetComponent />
      </Modal>
    </NavigationContainer>
  );
};

export default AppWrapper;
