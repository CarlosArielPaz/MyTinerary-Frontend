import { createReducer } from '@reduxjs/toolkit';
import citiesActions from '../actions/cities';

const initialState = {
  citiesAll: [],
  citiesFilter: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(citiesActions.citiesLoad, (state, action) => {
      return { ...state, citiesAll: action.payload.array, citiesFilter: action.payload.array };
    })
    .addCase(citiesActions.citiesFilter, (state, action) => {
      const re = new RegExp(`^(${action.payload.phase})`, 'i');

      const filter = state.citiesAll.filter((city) => re.test(city.name));

      //const filter = state.citiesAll.filter((city) => city.name.toLowerCase().includes(action.payload.phase.toLowerCase()));

      return { ...state, citiesFilter: filter };
    });

  return builder;
});

export default citiesReducer;
