// ==================================================
// CART SLICE
// Handles shopping cart logic using Redux Toolkit.
// ==================================================

// addToCart()
// Adds a product to cart.
// If product already exists, increases quantity.

// removeFromCart()
// Removes a product from cart by id.

// clearCart()
// Removes all products from cart.

// Redux state:
// items -> products inside shopping cart



import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {

    addToCart: (state:any, action:any) => {
      const existing = state.items.find(
        (i:any) => i.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state:any, action:any) => {
      state.items = state.items.filter(
        (i:any) => i.id !== action.payload
      );
    },

    clearCart: (state:any) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;