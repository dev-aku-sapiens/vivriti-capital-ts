import axios from 'axios';
import { AppThunk } from './store';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productSlice';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categorySlice';
import { ProductProps } from './types';

export const fetchProducts =
  (limit = 10, skip = 0): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      const response = await axios.get<ProductProps>(url);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      dispatch(fetchProductsFailure(errorMessage));
    }
  };

export const fetchProductsByKeyword =
  (keyword: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());

      const url = `https://dummyjson.com/products/search?q=${keyword}`;
      const response = await axios.get<ProductProps>(url);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      dispatch(fetchProductsFailure(errorMessage));
    }
  };

export const fetchProductsByCategory =
  (category: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const url = `https://dummyjson.com/products/category/${encodeURIComponent(
        category
      )}`;
      const response = await axios.get<ProductProps>(url);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      dispatch(fetchProductsFailure(errorMessage));
    }
  };

export const fetchCategories = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    const response = await axios.get<string[]>(
      'https://dummyjson.com/products/categories'
    );
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred';
    dispatch(fetchCategoriesFailure(errorMessage));
  }
};
