import Link from 'next/link';

export default function ProductCard() {
  return (
    <div>
      <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
      <h2 className='text-sm lg:text-base mt-2'>
        <Link
          className='text-base font-bold'
          href='./productPage.html'
        >
          iPhone 9
        </Link>
        <span className='text-[#919090]'>
          <Link href='./category.html'>(Smartphones)</Link>
        </span>
      </h2>
      <p className='text-[#919090] text-sm '>
        An apple mobile which is nothing like apple
      </p>

      <p className='text-rose-600 text-sm mt-4'>
        <span className='text-[#919090] line-through'>$205.00</span> $195.00
      </p>
    </div>
  );
}
