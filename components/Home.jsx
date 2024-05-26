import { useProducts } from '@/Provider/ProductsProvider';
import ProductCard from './ProductCard';

const Home = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
