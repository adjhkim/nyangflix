import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  class_0: 'off',
  class_1: 'off',
  class_2: 'off',
  class_3: 'off',
};

const slice = createSlice({
  name: 'navBarClass',
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.class_0 = 'on';
    },
  },
});

export const adminAction = slice.actions;
export default slice.reducer;
