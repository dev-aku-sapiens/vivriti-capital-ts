import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListState } from '../store/types';

const initialState: ListState = {
  items: [],
};

const removeFromWishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { removeFromWishlist } = removeFromWishlistSlice.actions;
export default removeFromWishlistSlice.reducer;
