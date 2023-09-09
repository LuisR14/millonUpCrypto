/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../themes/colors';
import {ConvertScreen} from '../screens/convert';
import {SettingsScreen} from '../screens/settings';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: Theme !== 'dark' ? colors.white : colors.darkMode,
      }}
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const icons: any = {
            Home: 'home-circle',
            Convert: 'account-convert',
            Settings: 'cog',
          };

          return <Icons name={icons[route.name]} color={color} size={35} />;
        },
        headerShown: false,
        tabBarItemStyle: {
          alignItems: 'center',
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 15,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{unmountOnBlur: true}}
        name="Convert"
        component={ConvertScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
