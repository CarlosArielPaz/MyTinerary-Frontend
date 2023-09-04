import { createAction } from '@reduxjs/toolkit';

const cityLoad = createAction('cityLoad', (object) => {
  return {
    payload: { object },
  };
});

export default {
  cityLoad,
};
