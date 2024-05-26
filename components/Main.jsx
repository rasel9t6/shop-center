'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Categories from './Categories';
import Newsletter from './Newsletter';
import ProductCard from './ProductCard';
import useFetch from '@/hooks/useFetch';

export default function Main() {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
  const { data: products } = useFetch(URL);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();
  const { pathname } = router;

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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    router.push(`/categories/${category}`);
  };

  return (
    <main>
      {pathname === '/' && (
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
      )}
      {pathname === '/categories' && (
        <Categories
          categories={categories}
          handleCategoryClick={handleCategoryClick}
          filteredProducts={filteredProducts}
          onSelectCategory={handleSelectCategory}
        />
      )}
      <Newsletter />
    </main>
  );
}
