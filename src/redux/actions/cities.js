import { createAction } from '@reduxjs/toolkit';

const citiesLoad = createAction('citiesLoad', (array) => {
  return {
    payload: { array },
  };
});

const citiesFilter = createAction('citiesFilter', (phase) => {
  return {
    payload: { phase },
  };
});

export default {
  citiesLoad,
  citiesFilter,
};
