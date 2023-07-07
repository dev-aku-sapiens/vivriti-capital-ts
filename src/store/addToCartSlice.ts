import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../store/types';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (!existingProduct) {
        state.items.push(product);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
