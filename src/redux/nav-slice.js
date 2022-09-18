import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: [],
};

export const NavSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
  },
});

export const navSliceActions = NavSlice.actions;

export default NavSlice.reducer;
