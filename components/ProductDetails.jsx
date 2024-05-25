import Image from 'next/image';

export default function ProductDetails() {
  return (
    <div className='w-full lg:w-5/12'>
      <h1 className='italic text-xl lg:text-3xl font-serif font-semibold'>
        iPhone 9
      </h1>
      <span className='text-[#919090] my-3'>Smartphone</span>
      <div className='mt-3 flex items-center justify-start gap-1'>
        <Image
          src='/assets/svg/star.svg'
          width='20px'
          height='20px'
          alt=''
        />
        <Image
          src='/assets/svg/star.svg'
          width='20px'
          height='20px'
          alt=''
        />
        <Image
          src='/assets/svg/star.svg'
          width='20px'
          height='20px'
          alt=''
        />
        <Image
          src='/assets/svg/star.svg'
          width='20px'
          height='20px'
          alt=''
        />
        <Image
          src='/assets/svg/star.svg'
          width='20px'
          height='20px'
          alt=''
        />
      </div>
      <hr className='my-5 bg-black' />

      <div>
        <p className='my-3'>
          <span className='text-rose-600 opacity-60 line-through'>$205.00</span>
          <span className='font-bold text-2xl'>$195.00</span>
        </p>
      </div>
      <div>
        <p className='leading-7'>
          Enhance your dining space with this sleek, contemporary dining table,
          crafted from high-quality solid wood with a warm finish. Its sturdy
          construction and minimalist design make it a perfect addition for any
          home looking for a touch of elegance. Accommodates up to six guests
          comfortably and includes a striking fruit bowl centerpiece. The
          overhead lighting is not included.
        </p>

        <button className='w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full'>
          Add To Cart - $195
        </button>
      </div>
    </div>
  );
}
