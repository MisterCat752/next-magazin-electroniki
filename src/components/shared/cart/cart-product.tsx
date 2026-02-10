'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui';
import { useCartStore } from '@/store/cartStore';

interface Props {
  className?: string;
  name: string;
  imageUrl?: string;
  price?: number;
  id: number;
  count: number;
}

export const CartProduct: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  price,
  id,
  count,
}) => {
  const remove = useCartStore((state) => state.removeFromCart);
  const increase = useCartStore((s) => s.increaseCount);
  const decrease = useCartStore((s) => s.decreaseCount);
  return (
    <div className='w-full flex gap-2 relative bg-gray-dark p-13  rounded-2xl'>
      <div
        onClick={() => remove(id)}
        className='absolute cursor-pointer hover:bg-[#198754] top-4 right-4 bg-gray-medium p-2 rounded-[13px]'
      >
        <Trash className='text-gray' />
      </div>
      <div className='max-h-[209px] max-w-[209px]'>
        <img src={imageUrl} alt='' />
      </div>
      <div className=''>
        <p className='text-[16px] text-white font-semibold'>{name}</p>
        <p className='text-[14px] mt-2 text-white font-semibold'>
          6.7 | 200 МП | 12 ГБ | Dual SIM
        </p>
        <p className='text-[24px] mt-2 text-white font-semibold'>{price}</p>
        <div className='flex gap-3 mt-7 items-center'>
          <Button
            onClick={() => decrease(id)}
            className='p-3 text-[24px] text-gray-dark pb-4 bg-gray-medium'
          >
            -
          </Button>
          <p className='text-[24px]   text-white font-semibold'>{count}</p>
          <Button
            onClick={() => increase(id)}
            className='p-3 text-[24px] text-gray-dark pb-3 bg-gray-medium'
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
