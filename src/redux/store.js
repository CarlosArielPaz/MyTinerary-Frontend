import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/cities';
import cityReducer from './reducers/city';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    city: cityReducer,
  },
});

export default store;
