import { createSlice, configureStore } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

//관리자 페이지 메뉴 상태 관리
const initialState: string[] = ['off', 'off', 'off', 'off'];

const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<number>) => {
      state[action.payload] = 'on';
    },
    resetMenu: state => {
      for (let i = 0; i < state.length; i++) {
        state[i] = 'off';
      }
    },
  },
});

export const adminActions = adminSlice.actions;
//-----------------------------------------------------------------

export const store = configureStore({
  reducer: {
    adminMenu: adminSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
