import { createReducer } from '@reduxjs/toolkit';
import cityActions from '../actions/city';

const initialState = {
  city: {},
};

const cityReducer = createReducer(initialState, (builder) => {
  builder.addCase(cityActions.cityLoad, (state, action) => {
    return { ...state, city: action.payload.object };
  });

  return builder;
});

export default cityReducer;
