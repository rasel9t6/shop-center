'use client';
import ProductDetails from '@/components/ProductDetails';
import ProductImage from '@/components/ProductImage';


export default function ProductPage() {
  return (
    <main className='h-screen'>
      <section className='bg-[#fafaf2] h-full py-20'>
        <div className='w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between'>
          <ProductImage />
          <ProductDetails />
        </div>
      </section>
    </main>
  );
}
