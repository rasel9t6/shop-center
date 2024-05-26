'use client';
import { useProducts } from '@/Provider/ProductsProvider';
import ProductCard from './ProductCard';
const Categories = () => {
  const {
    categories,

    setSelectedCategory,
    filteredProducts,
  } = useProducts();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className='w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10'>
      <div className='mb-4'>
        <button
          onClick={() => setSelectedCategory(null)}
          className='p-2 bg-gray-300 rounded'
        >
          Show All Products
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='p-4 border rounded-lg text-center cursor-pointer'
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
