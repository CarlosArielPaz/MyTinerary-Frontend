import { createReducer } from '@reduxjs/toolkit';
import userActions from '../actions/user';

const initialState = {
  user: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userActions.userLoad, (state, action) => {
      return { ...state, user: action.payload.object };
    })
    .addCase(userActions.userRemove, (state, action) => {
      return { ...state, user: action.payload };
    });

  return builder;
});

export default userReducer;
