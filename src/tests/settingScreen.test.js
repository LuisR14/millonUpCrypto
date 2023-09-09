import React from 'react';
import {renderWithProviders} from './utils_for_tests';
import {NavigationContainer} from '@react-navigation/native';
import {SettingsScreen} from '../screens/settings';
import {screen} from '@testing-library/react-native';

describe('SettingScreen', () => {
  let component;
  beforeEach(() => {
    component = renderWithProviders(
      <NavigationContainer>
        <SettingsScreen />
      </NavigationContainer>,
    );
  });

  it('snapshot of screen to JSON', () => {
    const {toJSON} = renderWithProviders(
      <NavigationContainer>
        <SettingsScreen />
      </NavigationContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly setting screen', () => {
    expect(component).toBeTruthy();
  });

  it('renders correctly the safe area view', () => {
    const item = screen.getByTestId('safeAreaViewTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the title text setting', () => {
    const item = screen.getByTestId('textTitleTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the text setting dark mode', () => {
    const item = screen.getByTestId('darkModeTextSettingTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the first switch view', () => {
    const item = screen.getByTestId('viewSwitch1Test');
    expect(item).toBeOnTheScreen();
  });
  it('renders correctly the first switch component', () => {
    const item = screen.getByTestId('switch1Test');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the text setting offline mode', () => {
    const item = screen.getByTestId('offlineModeTextSettingTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the second switch view', () => {
    const item = screen.getByTestId('viewSwitch2Test');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the second switch component', () => {
    const item = screen.getByTestId('switch2Test');
    expect(item).toBeOnTheScreen();
  });
});
