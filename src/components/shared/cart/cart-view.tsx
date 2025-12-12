'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/container';
import { Button, Input } from '@/components/ui';
import { Trash } from 'lucide-react';
import { CartProduct } from './cart-product';
import { CartSum } from './cart-sum';
import { useCartStore } from '@/store/cartStore';
import { useHydrated } from '@/hooks/use-hydrated';

interface Props {
  className?: string;
}

export const CartView: React.FC<Props> = ({ className }) => {
  const hydrated = useHydrated();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((s) => s.totalPrice());
  if (!hydrated) {
    return null; // или skeleton, или пустой div
  }
  return (
    <div className={cn(className, 'min-h-[100vh]  py-20 pb-100 bg-[#000] ')}>
      <Container className=''>
        <h1 className='text-2xl font-bold text-white'>Корзина</h1>
        <div className='flex mt-10 gap-10 justify-between'>
          <div className='flex flex-col gap-7 w-full'>
            {items.map((item) => (
              <CartProduct
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                id={item.id}
                count={item.count}
              />
            ))}
          </div>
          <div className='bg-gray-dark  p-13 w-full rounded-2xl'>
            <div className='flex  gap-3'>
              <div className='w-full'>
                <Input
                  className='text-[12px] bg-gray-medium text-white py-4 px-5'
                  type='text'
                  placeholder='Имя*'
                />
                <Input
                  className='text-[12px] mt-3 bg-gray-medium text-white py-4 px-5'
                  type='text'
                  placeholder='Фамилия*'
                />
              </div>
              <div className='w-full'>
                <Input
                  className='text-[12px] bg-gray-medium text-white py-4 px-5'
                  type='text'
                  placeholder='Номер телефона'
                />
                <Input
                  className='text-[12px] mt-3 bg-gray-medium text-white py-4 px-5'
                  type='email'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='mt-20  '>
              <Button className='bg-[#C8FB57] py-[26px] px-[18px] w-full max-w-[220px] '>
                Разместить заказ
              </Button>
            </div>
          </div>
        </div>
        <div className='mt-10 max-w-[623px] bg-gray-dark  p-13 w-full rounded-2xl'>
          <CartSum
            bonusReceived={942}
            productCost={total}
            discount={1000}
            deliveryCost={0}
            appliedBonus={0}
            currency='лей'
          />
        </div>
      </Container>
    </div>
  );
};
