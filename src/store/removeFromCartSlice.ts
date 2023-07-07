import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListState } from '../store/types';

const initialState: ListState = {
  items: [],
};

const removeFromCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { removeFromCart } = removeFromCartSlice.actions;
export default removeFromCartSlice.reducer;
