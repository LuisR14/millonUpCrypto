/* eslint-disable no-undef */
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

global.console = {
  ...console,
  error: jest.fn(),
};

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
