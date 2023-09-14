import { createAction } from '@reduxjs/toolkit';

const userLoad = createAction('userLoad', (object) => {
  return {
    payload: { object },
  };
});

const userRemove = createAction('userRemove', (object) => {
  return {
    payload: null,
  };
});

export default {
  userLoad,
  userRemove,
};
