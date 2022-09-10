import { configureStore } from "@reduxjs/toolkit";

import homepageContentReducer from "./homepage-content-slice";

export const store = configureStore({
  reducer: {
    homepageContent: homepageContentReducer,
  },
});
