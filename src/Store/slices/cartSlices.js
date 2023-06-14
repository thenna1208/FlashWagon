

import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cartItems";
const WISHLIST_KEY = "wishlistItems";


const getCartItemsFromLocalStorage = () => {
  const cartItems = localStorage.getItem(CART_KEY);
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};


const getWishlistItemsFromLocalStorage = () => {
    const wishlistItems = localStorage.getItem(WISHLIST_KEY);
    if (wishlistItems) {
      return JSON.parse(wishlistItems);
    }
    return [];
  };



const saveCartItemsToLocalStorage = (cartItems) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};



const saveWishlistItemsToLocalStorage = (wishlistItems) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistItems));
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



const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState: {
      wishlistItems: getWishlistItemsFromLocalStorage(),
      isInWishlist: false,
    },
    reducers: {
        addWishlistItem: (state, action) => {
        console.log("addwishItem triggered");
        const newItem = { ...action.payload.item, isInWishlist: true };
        state.wishlistItems.push(newItem);
        console.log(state.wishlistItems);
        saveWishlistItemsToLocalStorage(state.wishlistItems);
      },
      removeWishlistItem: (state, action) => {
        console.log("removeItem triggered");
        const updatedWishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
        console.log(updatedWishlistItems);
        saveWishlistItemsToLocalStorage(updatedWishlistItems);
        return { ...state, wishlistItems: updatedWishlistItems };
      },
      toggleIsInWishlist: (state) =>   {
        state.isInWishlist = !state.isInWishlist;
      }
    },
  });

  

  export default {
    cart: counterSlice.reducer,
    wishlist: wishlistSlice.reducer
  };
export const { addItem, removeItem, toggleIsInCart } = counterSlice.actions;
export const { addWishlistItem, removeWishlistItem, toggleIsInWishlist } =
  wishlistSlice.actions;
export const cartSelector = (state) => state.cart.cartItems.length;