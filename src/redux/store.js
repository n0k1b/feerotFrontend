import { configureStore } from "@reduxjs/toolkit";

import homepageContentReducer from "./homepage-content-slice";
import navReducer from "./nav-slice";
import shopReducer from "./shop-slice";

export const store = configureStore({
  reducer: {
    homepageContent: homepageContentReducer,
    nav: navReducer,
    shop: shopReducer,
  },
});
