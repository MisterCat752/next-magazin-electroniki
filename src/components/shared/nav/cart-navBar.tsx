import React from 'react';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';

interface Props {
  className?: string;
  name: string;
  imageUrl?: string;
}

export const CartNavBAr: React.FC<Props> = ({ className, name, imageUrl }) => {
  return (
    <div
      className={cn(
        className,
        'flex items-center gap-3 w-full border-b border-gray-500 p-2 '
      )}
    >
      <div className='border border-gray p-2 max-w-[115px] rounded-'>
        <img src='/samsung-25-fe.webp' alt='' />
      </div>
      <div>
        <h2 className='text-[16px] text-black'>samsung 25 fe</h2>
        <p className='text-[15px] text-gray-600'>12 GB / 256 GB / Graygreen</p>
        <p className='text-[18px] font-medium text-black'>33 199 лей</p>
      </div>
      <div>
        <Trash />
      </div>
    </div>
  );
};
