import Image from 'next/image';

export default function ProductImage() {
  return (
    <div className='w-full lg:w-7/12 border border-slate-500/20 p-4'>
      <Image
        src='/assets/products/iphone.jpg'
        className='w-[400px] h-[500px] mx-auto object-cover'
        alt=''
        width={400}
        height={500}
      />

      <div className='flex gap-4 mt-4'>
        <Image
          src='/assets/products/iphone.jpg'
          className='w-[100px] h-[100px] mx-auto border object-cover'
          alt=''
          width={100}
          height={100}
        />
        <Image
          src='/assets/products/iphone-2.jpg'
          className='w-[100px] h-[100px] mx-auto border object-cover'
          alt=''
          width={100}
          height={100}
        />
        <Image
          src='/assets/products/iphone-3.jpg'
          className='w-[100px] h-[100px] mx-auto border object-cover'
          alt=''
          width={100}
          height={100}
        />
        <Image
          src='/assets/products/iphone-4.jpg'
          className='w-[100px] h-[100px] mx-auto border object-cover'
          alt=''
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
