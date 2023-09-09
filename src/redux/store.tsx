import {configureStore} from '@reduxjs/toolkit';
import cryptoListSlice from './cryptoListSlice';
import userSettingsSlice from './userSettingSlice';

export const store = configureStore({
  reducer: {
    cryptoList: cryptoListSlice,
    userSettings: userSettingsSlice,
  },
});
