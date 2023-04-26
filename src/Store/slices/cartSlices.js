

import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cartItems";

const getCartItemsFromLocalStorage = () => {
  const cartItems = localStorage.getItem(CART_KEY);
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};

const saveCartItemsToLocalStorage = (cartItems) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    cartItems: getCartItemsFromLocalStorage(),
    isInCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      console.log("addItem triggered");
      const newItem = { ...action.payload.item, isInCart: true };
      state.cartItems.push(newItem);
      console.log(state.cartItems);
      saveCartItemsToLocalStorage(state.cartItems);
    },
    removeItem: (state, action) => {
      console.log("removeItem triggered");
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
      console.log(updatedCartItems);
      saveCartItemsToLocalStorage(updatedCartItems);
      return { ...state, cartItems: updatedCartItems };
    },
    toggleIsInCart: (state) => {
      state.isInCart = !state.isInCart;
    }
  },
});

export default counterSlice.reducer;
export const { addItem, removeItem, toggleIsInCart } = counterSlice.actions;
export const cartSelector = (state) => state.cartItems.length;