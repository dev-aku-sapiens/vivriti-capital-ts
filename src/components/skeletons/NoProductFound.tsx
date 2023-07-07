import React from 'react';

const NoProductsFoundSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-120px'>
      <img
        src='https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg'
        alt='No products found'
      />
    </div>
  );
};

export default NoProductsFoundSkeleton;
