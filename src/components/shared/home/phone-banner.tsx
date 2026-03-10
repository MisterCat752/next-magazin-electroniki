import Link from 'next/link';
import Image from 'next/image';

export const PhoneBanner = () => (
  <Link
    href='/category/smartphones'
    className='
      relative w-full lg:w-[420px] h-[220px] sm:h-[260px] lg:h-auto
      overflow-hidden rounded-2xl bg-gray-dark-medium group
    '
  >
    <Image
      src='/mobile.jpg'
      alt='smartphones'
      fill
      className='object-cover transition-transform duration-500 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-black/10' />
    <div className='absolute left-6 bottom-6 text-white'>
      <h3 className='text-xl sm:text-2xl font-semibold'>New smartphones</h3>
      <span className='inline-block mt-2 text-sm underline'>Watch →</span>
    </div>
  </Link>
);
