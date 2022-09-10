import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banner: [],
  isLoading: "",
  sections: [],
  sectionTitles: [],
};

export const counterSlice = createSlice({
  name: "counter",
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
  },
});

export const homepageContentActions = counterSlice.actions;

export default counterSlice.reducer;
