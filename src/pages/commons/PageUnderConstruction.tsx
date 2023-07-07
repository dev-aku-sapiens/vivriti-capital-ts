import React from 'react';

const PageUnderConstruction: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Page Under Construction</h1>
        <p className='text-gray-600'>
          This page is currently under construction. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
