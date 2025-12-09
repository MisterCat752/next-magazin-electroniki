import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  name: string;
  image: string;
}

export const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <div className='  rounded-2xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition'>
      <img
        src={image}
        alt={name}
        className='w-24 h-24 object-cover rounded-lg'
      />
      <p className='mt-2 font-medium'>{name}</p>
    </div>
  );
};
