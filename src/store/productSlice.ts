import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, ProductProps } from './types';

const initialState: ProductState = {
  list: { products: [], total: 0, skip: 0, limit: 0 },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<ProductProps>) {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
