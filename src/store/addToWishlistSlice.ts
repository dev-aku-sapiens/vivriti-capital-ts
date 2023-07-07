import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../store/types';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const addToWishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (!existingProduct) {
        state.items.push(product);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = addToWishlistSlice.actions;
export default addToWishlistSlice.reducer;
