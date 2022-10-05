import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopData: [],
  cartItem: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShopData: (state, action) => {
      state.shopData = action.payload;
    },

    setCartItem: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.cartItem.find((item) => item.id === newItem.id);

      if (!itemExists) {
        state.cartItem = [...state.cartItem, action.payload];
        state.totalQuantity++;
        state.totalPrice = state.totalPrice + parseInt(action.payload.price);
      }

      if (itemExists) {
        const existingCart = state.cartItem.filter(
          (item) => item.id !== itemExists.id
        );
        itemExists.quantity = itemExists.quantity + newItem.quantity;

        state.cartItem = [...existingCart, itemExists];
        state.totalQuantity++;
        state.totalPrice =
          state.totalPrice + parseInt(itemExists.price * newItem.quantity);
      }
    },

    increaseTotalQuantity: (state) => {
      state.totalQuantity++;
    },

    decreaseTotalQuantity: (state) => {
      state.totalQuantity--;
    },

    increaseTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },

    decreaseTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice - action.payload;
    },

    deleteCartItem: (state, action) => {
      const selectedItem = state.cartItem.find(
        (item) => item.id === action.payload
      );
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== selectedItem.id
      );
      state.totalPrice =
        state.totalPrice - selectedItem.price * selectedItem.quantity;
      state.totalQuantity = state.totalQuantity - selectedItem.quantity;
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
