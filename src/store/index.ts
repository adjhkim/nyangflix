import { configureStore } from '@reduxjs/toolkit';
import { adminMenuSlice } from 'app/reducers/reducers_admin';

export const store = configureStore({
  reducer: {
    adminMenu: adminMenuSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const adminMenuActions = adminMenuSlice.actions;
