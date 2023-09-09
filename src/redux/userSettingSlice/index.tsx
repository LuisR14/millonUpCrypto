import {createSlice} from '@reduxjs/toolkit';
import {initialState, userSettingItem} from './types';

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState: initialState as userSettingItem,
  reducers: {
    updateUserTheme: (state, action) => {
      state.darkMode = action.payload;
    },
    updateUserOffline: (state, action) => {
      state.offline = action.payload;
    },
  },
});

export const {updateUserTheme, updateUserOffline} = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
