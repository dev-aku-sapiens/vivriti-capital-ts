import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';

import Dropdown from '../../components/commons/Dropdown';
import Pagination from '../../components/commons/Pagination';
import Banner from '../../components/sections/Banner';
import ProductSection from '../../components/sections/ProductSection';

import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from '../../store/api';
import Input from '../../components/commons/Input';

interface HomepageProps {
  searchQuery: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Homepage: React.FC<HomepageProps> = ({
  searchQuery,
  handleSearchChange,
}) => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.product.list.products) || [];
  const pageCount = useSelector((state: RootState) => state.product.list.total) || 10;
  const categories = useSelector((state: RootState) => state.category.categories) || [];

  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    !category && dispatch(fetchProducts(12, currentPage * 10));
    dispatch(fetchCategories());
  }, [dispatch, currentPage, category]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value);
    fetchProductsCategories(value);
  };

  const fetchProductsCategories = (category: string) => {
    dispatch(fetchProductsByCategory(category));
  };

  return (
    <>
      <div className='lg:hidden flex justify-center sm:justify-start my-4'>
        <Input
          placeholder='Search'
          value={searchQuery}
          onChange={handleSearchChange}
          clearable
        />
      </div>
      <Banner />
      <div className='flex justify-center sm:justify-start my-4'>
        <Dropdown
          options={categories}
          value={category}
          onChange={handleOptionChange}
          clearable
        />
      </div>
      <ProductSection products={products} />
      {Math.ceil(pageCount / 10) > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(pageCount / 10)}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Homepage;
