import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import citiesReducer from './reducers/cities';
import cityReducer from './reducers/city';

const store = configureStore({
  reducer: {
    user: userReducer,
    cities: citiesReducer,
    city: cityReducer,
  },
});

export default store;
