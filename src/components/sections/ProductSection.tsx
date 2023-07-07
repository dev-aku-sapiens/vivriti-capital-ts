import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductCard from '../ProductCard';
import ProductCardSkeleton from '../skeletons/ProductCardSkeleton';
import NoProductsFoundSkeleton from '../skeletons/NoProductFound';
import { Product } from '../../store/types';

interface ProductSectionProps {
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  const loading = useSelector((state: RootState) => state.product.loading);
  const skeleton = Array.from({ length: 12 });

  return (
    <>
      {loading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 justify-center'>
          {skeleton.map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <NoProductsFoundSkeleton />
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 justify-center'>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductSection;
