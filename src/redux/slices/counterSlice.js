import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    interval: 1,
  },
  reducers: {
    increment: (state, action) => {
      state.count += state.interval;
    },
    decrement: (state, action) => {
      state.count -= state.interval;
    },
    updateInterval: (state, { payload }) => {
      state.interval = Number(payload) || 0;
    },
  },
});

export const { increment, decrement, updateInterval } = counterSlice.actions;

export default counterSlice.reducer;
