import { combineReducers, createSlice } from '@reduxjs/toolkit';

import { Vehicle } from '../types';

const initialState: Vehicle[] = [];

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    create: (state, { payload }) => {
        if (payload) {
          state = [...state, payload];
        }
        return state;
    },
    list: state => state,
  },
});

export const { create, list } = vehicleSlice.actions;

const rootReducer = combineReducers({
  vehicle: vehicleSlice.reducer,
});

export default rootReducer;
