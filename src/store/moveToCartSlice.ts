import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListState, Product } from '../store/types';

const initialState: ListState = {
  items: [],
};

const moveToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    moveToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.items = [...state.items, product];
    },
  },
});

export const { moveToCart } = moveToCartSlice.actions;
export default moveToCartSlice.reducer;
