// ==================================================
// PRODUCTS SLICE
// This slice handles products and categories state.
// Data is fetched from FakeStore API using Axios.
// ==================================================

// fetchProducts()
// Loads products from API.
// If a category is provided, products are filtered.

// fetchCategories()
// Loads available product categories from API.

// Redux state:
// list -> products list
// categories -> categories list
// loading -> loading state





import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (category: string | null) => {

    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';

    const res = await axios.get(url);
    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  'products/categories',
  async () => {
    const res = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    return res.data;
  }
);

const slice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchProducts.pending, (state:any) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state:any, action:any) => {
      state.loading = false;
      state.list = action.payload;
    });

    builder.addCase(fetchCategories.fulfilled, (state:any, action:any) => {
      state.categories = action.payload;
    });

  },
});

export default slice.reducer;