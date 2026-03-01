// ==================================================
// REDUX STORE
// Central state manager of the application.
// Combines products and cart reducers.
// ==================================================





import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});