'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from '@/components/ui';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { CartNavBarItem } from './CartNavBarItem';

interface Props {
  className?: string;
}

export const CartDropDown: React.FC<Props> = ({ className }) => {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((s) => s.totalPrice());

  return (
    <div className={cn(className)}>
      <Popover>
        <PopoverTrigger>
          <div className='relative'>
            <ShoppingCart className='text-white hover:text-green cursor-pointer' />
            {items.length > 0 && (
              <div className='absolute -top-2 -right-3 bg-green w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold text-black'>
                {items.length}
              </div>
            )}
          </div>
        </PopoverTrigger>

        <PopoverContent className='mt-7 w-full bg-gray-dark max-w-[520px]'>
          <div className='text-white text-[18px] mb-5 font-medium'>
            <p>Корзина</p>
          </div>
          {items.length === 0 && (
            <div className='flex items-center justify-center w-[320px] h-[100px] text-gray-400 text-sm'>
              🛒 Корзина пуста
            </div>
          )}

          <div className='h-[360px] overflow-y-auto flex flex-col gap-2 pr-1 scrollbar-thin scrollbar-thumb-gray-700'>
            {items.map((item) => (
              <div
                key={item.id}
                className='bg-gray-medium rounded-[14px] gap-3 relative p-3 mb-2'
              >
                <CartNavBarItem {...item} />
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className='mt-10 flex flex-col items-center justify-center gap-3'>
              <div className='text-white text-[18px] font-medium'>
                <p>Итого: {total} MDL</p>
              </div>
              <Link href='/cart'>
                <Button
                  variant='outline'
                  className='cursor-pointer hover:bg-gray-500 transition-all delay-75'
                >
                  В корзину
                </Button>
              </Link>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};
