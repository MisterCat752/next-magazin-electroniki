import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  image: string;
  slug: string;
}

export const CategoryCard = ({ name, image, slug }: CategoryCardProps) => {
  return (
    <Link href={`/category/${slug}`} className='group'>
      <div className='min-h-[185px] bg-gray-dark-medium cursor-pointer hover:text-[#a8dc37] duration-150 rounded-2xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition'>
        <div className='w-[100px] h-[100px] overflow-hidden p-2 flex items-center justify-center'>
          <img
            src={image}
            alt={name}
            className='w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300'
          />
        </div>
        <p className='mt-2 font-bold group-hover:text-[#77a317] transition-colors duration-150 text-center'>
          {name}
        </p>
      </div>
    </Link>
  );
};
