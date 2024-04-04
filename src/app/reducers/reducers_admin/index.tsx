import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

//관리자 페이지 NavBar 상태 관리
interface MenuType {
  selected: { name: string; korean: string };
  menu: {
    tag: { onOff: string; name: string; korean: string };
    series: { onOff: string; name: string; korean: string };
    list: { onOff: string; name: string; korean: string };
    category: { onOff: string; name: string; korean: string };
  };
}

const menuState: MenuType = {
  selected: { name: '', korean: '' },
  menu: {
    tag: { onOff: 'off', name: 'TAG', korean: '태그' },
    series: { onOff: 'off', name: 'SERIES', korean: '시리즈' },
    list: { onOff: 'off', name: 'LIST', korean: '리스트' },
    category: { onOff: 'off', name: 'CATEGORY', korean: '카테고리' },
  },
};

export const adminMenuState = createSlice({
  name: 'adminMenuState',
  initialState: menuState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<string>) => {
      state.menu[action.payload].onOff = 'on';
      state.selected.name = state.menu[action.payload].name;
      state.selected.korean = state.menu[action.payload].korean;
    },
    resetMenu: state => {
      for (let i in state.menu) {
        state.menu[i].onOff = 'off';
      }
      state.selected.name = '';
      state.selected.korean = '';
    },
  },
});
//-----------------------------------------------------------------
