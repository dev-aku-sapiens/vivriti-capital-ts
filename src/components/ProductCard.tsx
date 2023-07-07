import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Favorite, AddShoppingCart } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';

import { Product } from '../store/types';
import { RootState } from '../store/store';
import { addToCart } from '../store/addToCartSlice';
import { addToWishlist } from '../store/addToWishlistSlice';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const truncatedDescription =
    product.description.length > 80
      ? product.description.slice(0, 80) + '...'
      : product.description;

  const isProductInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const handleLike = () => {
    setLiked(!liked);
    dispatch(addToWishlist(product));
  };

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
    dispatch(addToCart(product));
  };

  return (
    <div className='bg-white lg:w-72 md:w-60 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 m-2'>
      <div className='relative lg:h-96 md:h-60 sm:h-40'>
        <img
          src={product.images[0]}
          alt={product.title}
          className='w-full h-full object-cover transform hover:scale-110 transition-all duration-300 cursor-pointer'
        />
        <div className='absolute top-2 right-2'>
          <div
            className={`w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center cursor-pointer`}
            onClick={handleLike}
          >
            <Favorite
              className={isProductInWishlist ? 'text-red-500' : 'text-gray-500'}
            />
          </div>
        </div>
        <div className='absolute top-2 left-2'>
          <div
            className={`w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center cursor-pointer`}
            onClick={handleAddToCart}
          >
            <AddShoppingCart
              className={isProductInCart ? 'text-green-500' : 'text-gray-500'}
            />
          </div>
        </div>
      </div>
      <div className='p-4 h-48 flex flex-col justify-between'>
        <div>
          <h2
            className='text-xl font-bold mb-2'
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {product.title}
          </h2>
          <p className='text-justify text-sm mb-2 overflow-hidden h-16 leading-4'>
            {truncatedDescription}
          </p>
        </div>
        <div>
          <p className='text-lg font-semibold'>₹: {product.price}</p>
          <Rating
            name='product-rating'
            value={product.rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
