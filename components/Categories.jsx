'use client';
import useFetch from '@/hooks/useFetch';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

export default function Categories() {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
  const { data: products } = useFetch(URL);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <section className='w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start'>
      <Sidebar
        handleCategoryClick={handleCategoryClick}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <div className='sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10'>
        {/* <!-- Product 1 Start --> */}
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
