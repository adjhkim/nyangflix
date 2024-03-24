import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

//관리자 페이지 메뉴 상태 관리
const adminMenuState: string[] = ['off', 'off', 'off', 'off'];
export const adminMenuSlice = createSlice({
  name: 'adminMenuSlice',
  initialState: adminMenuState,
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
//-----------------------------------------------------------------
