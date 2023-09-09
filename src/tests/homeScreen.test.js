import React from 'react';
import {HomeScreen} from '../screens/home/index';
import {renderWithProviders} from './utils_for_tests';
import {NavigationContainer} from '@react-navigation/native';
import {cleanup, screen} from '@testing-library/react-native';
import axios from 'axios';

jest.mock('react-native-toast-notifications', () => {
  return {
    useToast: () => ({
      show: jest.fn(),
    }),
  };
});
const mockedNavigate = jest.fn();
const mockedgoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedgoBack,
    }),
  };
});

describe('HomeScreen', () => {
  let component;
  afterEach(cleanup);
  beforeEach(() => {
    component = renderWithProviders(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
  });

  it('snapshot of screen to JSON', () => {
    const {toJSON} = renderWithProviders(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly home screen', () => {
    expect(component).toBeTruthy();
  });

  it('renders correctly the textInput view', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            id: '90',
            symbol: 'BTC',
            name: 'Bitcoin',
            nameid: 'bitcoin',
            rank: 1,
            price_usd: '25898.77',
            percent_change_24h: '-1.43',
            percent_change_1h: '-0.03',
            percent_change_7d: '-0.78',
            price_btc: '1.00',
            market_cap_usd: '504273572482.94',
            volume24: 7452436883.073213,
            volume24a: 8300378920.653947,
            csupply: '19470946.00',
            tsupply: '19470946',
            msupply: '21000000',
          },
        ],
      },
    });
    const item = screen.getByTestId('viewTextInputTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the textInput', () => {
    const item = screen.getByTestId('textInputTest');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the button filter gainers', () => {
    const item = screen.getByTestId('buttonFilterGainers');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the button filter losers', () => {
    const item = screen.getByTestId('buttonFilterLosers');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the button filter volume24', () => {
    const item = screen.getByTestId('buttonFilterVolume24');
    expect(item).toBeOnTheScreen();
  });

  it('renders correctly the flatList component', () => {
    const item = screen.getByTestId('flatListTest');
    expect(item).toBeOnTheScreen();
  });
  it('renders correctly the modal component', () => {
    const item = screen.getByTestId('modalTest');
    expect(item).toBeOnTheScreen();
  });
});
