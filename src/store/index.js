import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../admin';

const store = configureStore({
  reducer: { admin: adminReducer },
});

export default store;
