// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import assetsReducer from './assetsSlice';
import requestsReducer from './requestsSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetsReducer,
    requests: requestsReducer,
    users: usersReducer
  },
});

export default store;