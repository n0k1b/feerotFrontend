import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: [],
  isSignedIn: false,
  willRedirect: false,
  userData: [],
};

export const NavSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },

    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },

    setWillRedirect: (state, action) => {
      state.willRedirect = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const navSliceActions = NavSlice.actions;

export default NavSlice.reducer;
