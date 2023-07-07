export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: string[];
}

export interface ProductProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductState {
  list: ProductProps;
  loading: boolean;
  error: string | null;
}

export interface CategoryState {
  categories: string[];
  loading: boolean;
  error: string | null;
}

export interface ListState {
  items: Product[];
}