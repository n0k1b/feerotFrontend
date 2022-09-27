import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banner: [],
  isLoading: "",
  sections: [],
  sectionTitles: [],
  selectedShop: [],
};

export const homepageContentSlice = createSlice({
  name: "homepageContent",
  initialState,
  reducers: {
    setBanner: (state, action) => {
      state.banner = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setSections: (state, action) => {
      state.sections = action.payload;
    },

    setSectionTitles: (state, action) => {
      state.sectionTitles = [...state.sectionTitles, action.payload];
    },

    setSelectedShop: (state, action) => {
      state.selectedShop = action.payload;
    },
  },
});

export const homepageContentActions = homepageContentSlice.actions;

export default homepageContentSlice.reducer;
