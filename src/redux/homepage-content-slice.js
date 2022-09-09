import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const homepageContentActions = counterSlice.actions;

export default counterSlice.reducer;
