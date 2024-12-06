import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface IUsersTypes {
  queryParams: {
    page: number;
  };
}

const initialState: IUsersTypes = {
  queryParams: {
    page: 1,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsersPage: (state, action) => {
      state.queryParams.page = action.payload;
    },
  },
});

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['queryParams'],
};

const persistedUsersReducer = persistReducer(persistConfig, usersSlice.reducer);

export const { updateUsersPage } = usersSlice.actions;

export default persistedUsersReducer;
