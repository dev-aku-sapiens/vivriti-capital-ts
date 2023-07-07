import React from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart } from '../store/removeFromCartSlice';
import { Product } from '../store/types';

interface CartPageProps {
  onRemoveFromCart?: (itemId: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ onRemoveFromCart }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId: number) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(itemId);
    } else {
      dispatch(removeFromCart(itemId));
    }
  };

  return (
    <div className='mt-4'>
      <h2 className='font-bold mb-4'>Cart Items</h2>

      {cartItems.length === 0 ? (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
          <div className='bg-white p-8 rounded-md shadow-md'>
            <h1 className='text-2xl font-bold'>Your cart is empty.</h1>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {cartItems.map((item: Product) => (
            <div key={item.id} className='bg-white shadow rounded-lg'>
              <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                <div>
                  <h3 className='text-xl font-semibold'>{item.title}</h3>
                  <p className='text-gray-500'>Price: ${item.price}</p>
                </div>
                <IconButton
                  onClick={() => handleRemoveFromCart(item.id)}
                  className='text-gray-500'
                >
                  <Delete />
                </IconButton>
              </div>
              <div className='p-4'>
                <img src={item.thumbnail} alt={item.title} className='w-full' />
              </div>
              <div className='p-4'>
                <p className='text-gray-500'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
