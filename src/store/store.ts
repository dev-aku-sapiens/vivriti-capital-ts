import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import addToCartReducer from './addToCartSlice';
import addToWishlistReducer from './addToWishlistSlice';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: addToCartReducer,
  wishlist: addToWishlistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
