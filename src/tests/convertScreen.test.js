import React from 'react';
import {renderWithProviders} from './utils_for_tests';
import {NavigationContainer} from '@react-navigation/native';
import {ConvertScreen} from '../screens/convert';
import {screen} from '@testing-library/react-native';

const mockedNavigate = jest.fn();
const mockedgoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedgoBack,
    }),
    useRoute: () => ({
      params: {
        cryptoValue: '0',
      },
    }),
  };
});

describe('ConvertScreen', () => {
  let component;
  beforeEach(() => {
    component = renderWithProviders(
      <NavigationContainer>
        <ConvertScreen />
      </NavigationContainer>,
    );
  });

  it('snapshot of screen to JSON', () => {
    const {toJSON} = renderWithProviders(
      <NavigationContainer>
        <ConvertScreen />
      </NavigationContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly convert screen', () => {
    expect(component).toBeTruthy();
  });

  it('renders correctly the safe Area view', () => {
    const item = screen.getByTestId('safeAreaViewTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the text title convert screen', () => {
    const item = screen.getByTestId('titleConvertScreenTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the view text input', () => {
    const item = screen.getByTestId('viewTextInputTest');
    expect(item).toBeOnTheScreen();
  });
  it('renders correctly the second view text input', () => {
    const item = screen.getByTestId('viewTextInput2Test');
    expect(item).toBeOnTheScreen();
  });
  it('renders correctly the select picker up', () => {
    const item = screen.getByTestId('selectPickerUp');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the select picker down', () => {
    const item = screen.getByTestId('selectPickerDown');
    expect(item).toBeOnTheScreen();
  });
});
