import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { title, description, thumbnail, category, price, discountPercentage } =
    product;
  const discountPrice = (price - (price * discountPercentage) / 100).toFixed(2);
  return (
    <div>
      <Image
        className='relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform'
        width={270}
        height={310}
        alt={description}
        src={thumbnail}
        style={{ height: 'auto' }}
      />
      <h2 className='text-sm lg:text-base mt-2'>
        <Link
          className='text-base font-bold'
          href='./productPage.html'
        >
          {title}
        </Link>
        <span className='text-[#919090]'>
          <Link href='./category.html'>({category})</Link>
        </span>
      </h2>
      <p className='text-[#919090] text-sm '>{description}</p>

      <p className='text-rose-600 text-sm mt-4'>
        <span className='text-[#919090] line-through'>${price}</span> $
        {discountPrice}
      </p>
    </div>
  );
}
