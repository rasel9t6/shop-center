'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
  const { data: products, isLoading } = useFetch(URL);
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

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const value = {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    isLoading,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
