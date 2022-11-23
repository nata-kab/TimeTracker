import { createSlice } from "@reduxjs/toolkit";

const initialState = { time: 0, isActive: false };

export const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    editTime: (state, action) => {
      state.value = action.payload;
    },
    resetTimer: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const {} = timerSlice.actions;

export default timerSlice.reducer;
