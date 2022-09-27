import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: [],
  isSignedIn : false,
};

export const NavSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },

    setIsSignedIn : (state, action) => {
      state.isSignedIn = action.payload;
    }
  },
});

export const navSliceActions = NavSlice.actions;

export default NavSlice.reducer;
