import { configureStore } from '@reduxjs/toolkit';
import { adminMenuState } from 'app/reducers/reducers_admin';

export const store = configureStore({
  reducer: {
    adminMenuState: adminMenuState.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const menuStateActions = adminMenuState.actions;
