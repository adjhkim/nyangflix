import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

//관리자 페이지 NavBar 상태 관리
interface MenuType {
  selected: { name: string; korean: string };
  menu: [
    { onOff: string; name: string; korean: string },
    { onOff: string; name: string; korean: string },
    { onOff: string; name: string; korean: string },
    { onOff: string; name: string; korean: string },
  ];
}

const menuState: MenuType = {
  selected: { name: '', korean: '' },
  menu: [
    { onOff: 'off', name: 'TAG', korean: '태그' },
    { onOff: 'off', name: 'SERIES', korean: '시리즈' },
    { onOff: 'off', name: 'LIST', korean: '리스트' },
    { onOff: 'off', name: 'CATEGORY', korean: '카테고리' },
  ],
};

export const adminMenuState = createSlice({
  name: 'adminMenuState',
  initialState: menuState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<number>) => {
      state.menu[action.payload].onOff = 'on';
      state.selected.name = state.menu[action.payload].name;
      state.selected.korean = state.menu[action.payload].korean;
    },
    resetMenu: state => {
      for (let i = 0; i < state.menu.length; i++) {
        state.menu[i].onOff = 'off';
        state.selected.name = '';
        state.selected.korean = '';
      }
    },
  },
});
//-----------------------------------------------------------------
