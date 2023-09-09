import {createSlice} from '@reduxjs/toolkit';
import {cryptoListItem, initialState} from './types';

export const cryptoListSlice = createSlice({
  name: 'cryptoList',
  initialState: initialState as cryptoListItem,
  reducers: {
    create: (state, action) => {
      state.list = action.payload;
    },
    createBackup: (state, action) => {
      state.listBackup = action.payload;
    },
    update: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    updateBackup: (state, action) => {
      state.listBackup = [...state.listBackup, ...action.payload];
    },
  },
});

export const {create, createBackup, update, updateBackup} =
  cryptoListSlice.actions;

export default cryptoListSlice.reducer;
