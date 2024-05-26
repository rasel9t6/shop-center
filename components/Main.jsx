'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Home from './Home';
import Categories from './Categories';
import Newsletter from './Newsletter';
import { ProductsProvider } from '@/Provider/ProductsProvider';

const Main = () => {
  const router = useRouter();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  return (
    <ProductsProvider>
      <main>
        {pathname === '/' && <Home />}
        {pathname.startsWith('/categories') && <Categories />}
        <Newsletter />
      </main>
    </ProductsProvider>
  );
};

export default Main;
