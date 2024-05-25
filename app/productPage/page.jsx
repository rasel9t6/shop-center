import ProductDetails from '@/components/ProductDetails';
import ProductImage from '@/components/ProductImage';

export default function ProductPage() {
  return (
    <main className='h-screen'>
      <section className='bg-[#fafaf2] h-full py-20'>
        <ProductImage />
        <ProductDetails />
      </section>
    </main>
  );
}
