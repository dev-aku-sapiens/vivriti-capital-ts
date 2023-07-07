import { ChangeEvent, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from './store/store';
import { fetchProductsByKeyword } from './store/api';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Homepage from './pages/Homepage/Homepage';
import PageUnderConstruction from './pages/commons/PageUnderConstruction';
import Wishlist from './pages/Wishlist';
import CartPage from './pages/Cartpage';

interface HomepageProps {
  searchQuery: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const products =
    useSelector((state: RootState) => state.product.list.products) || [];
  const state = useSelector((state: RootState) => state);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    fetchProductsSearch(value);
  };

  const fetchProductsSearch = (keyword: string) => {
    dispatch(fetchProductsByKeyword(keyword));
  };

  console.log('App sees Redux: ', state);
  return (
    <div className='page-container select-none flex-col justify-center'>
      <Router>
        <Navbar value={searchQuery} onChange={handleSearchChange} />
        <Routes>
          <Route
            path='/'
            element={
              <Homepage
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
              />
            }
          />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/basket' element={<CartPage />} />
          <Route path='*' element={<PageUnderConstruction />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
