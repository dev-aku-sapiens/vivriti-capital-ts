import Skeleton from '@mui/material/Skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className='bg-white lg:w-72 md:w-60 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 m-2'>
      <div className='relative lg:h-96 md:h-60 sm:h-40'>
        <Skeleton variant='rectangular' width='100%' height='100%' />
      </div>
      <div className='p-4 h-48 flex flex-col justify-between'>
        <div>
          <Skeleton variant='text' width='80%' height={20} />
          <Skeleton variant='text' width='100%' height={60} />
        </div>
        <div>
          <Skeleton variant='text' width='60%' height={20} />
          <Skeleton variant='text' width='40%' height={20} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
