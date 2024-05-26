import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      <Hero />
      <Main>
        <section className='w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10'>
            <ProductCard />
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
