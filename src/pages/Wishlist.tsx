import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { sliceText } from '../settings/tools';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromWishlist } from '../store/removeFromWishlistSlice';
import { addToCart } from '../store/addToCartSlice';
import { Product } from '../store/types';

interface WishlistProps {
  onRemoveFromWishlist?: (itemId: number) => void;
  onMoveToCart?: (itemId: number) => void;
}

const Wishlist: React.FC<WishlistProps> = ({
  onRemoveFromWishlist,
  onMoveToCart,
}) => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.items || []
  );
  const dispatch = useDispatch();

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleRemoveFromWishlist = (itemId: number) => {
    if (onRemoveFromWishlist) {
      onRemoveFromWishlist(itemId);
    } else {
      dispatch(removeFromWishlist(itemId));
    }
  };

const handleMoveToCart = (itemId: number) => {
  if (onMoveToCart) {
    onMoveToCart(itemId);
  } else {
    const product = wishlistItems.find((item) => item.id === itemId);
    if (product) {
      dispatch(addToCart(product));
      dispatch(removeFromWishlist(itemId));
    }
  }
};


  const toggleDescription = (itemId: number) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(itemId)) {
        return prevExpandedItems.filter((item) => item !== itemId);
      } else {
        return [...prevExpandedItems, itemId];
      }
    });
  };

  const isItemExpanded = (itemId: number) => {
    return expandedItems.includes(itemId);
  };

  return (
    <div className='mt-4'>
      <h2 className='font-bold mb-4'>Wishlist Items</h2>
      {wishlistItems.length === 0 ? (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
          <div className='bg-white p-8 rounded-md shadow-md'>
            <h1 className='text-2xl font-bold'>Your wishlist is empty.</h1>
          </div>
        </div>
      ) : (
        <ul className='divide-y divide-gray-200'>
          {wishlistItems.map((item: Product) => (
            <li key={item.id} className='p-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='w-12 h-12 rounded-lg mr-4'
                  />
                  <div>
                    <h3 className='font-bold text-lg'>{item.title}</h3>
                    <p className='font-bold'>${item.price}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <IconButton
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className='text-gray-600 hover:text-red-500'
                  >
                    <Delete />
                  </IconButton>
                  <IconButton
                    onClick={() => handleMoveToCart(item.id)}
                    className='text-gray-600 hover:text-green-500'
                  >
                    <ShoppingCart />
                  </IconButton>
                </div>
              </div>
              <div className='mt-4 text-gray-600'>
                <span
                  className='text-md hover:text-gray-400 cursor-pointer'
                  onClick={() => toggleDescription(item.id)}
                >
                  {sliceText(item.description, isItemExpanded(item.id), 60)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
