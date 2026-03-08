'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui';
import { CartProduct } from './cart-product';
import { CartSum } from './cart-sum';
import { useCartStore } from '@/store/cartStore';
import { useHydrated } from '@/hooks/use-hydrated';
import Link from 'next/link';
import { CartForm } from './CartForm';

interface Props {
  className?: string;
}

export const CartView: React.FC<Props> = ({ className }) => {
  const hydrated = useHydrated();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((s) => s.totalPrice());

  if (!hydrated) return null;

  return (
    <div className={cn(className, 'min-h-[100vh] py-20 pb-100 bg-[#000]')}>
      <Container>
        <h1 className='text-2xl font-bold text-white'>Cart</h1>

        {items.length === 0 ? (
          <div className='flex flex-col items-center justify-center mt-20 gap-6 text-white'>
            <p className='text-lg'>Your cart is empty</p>
            <Link href='/category/gaming-laptops'>
              <Button className='bg-[#C8FB57] text-black px-6 py-4'>
                Go shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 mt-10'>
            {/* Left side */}
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-7'>
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

              <div className='bg-gray-dark p-6 lg:p-13 w-full rounded-2xl'>
                <CartSum
                  productCost={total}
                  discount={150}
                  deliveryCost={125}
                  appliedBonus={20}
                  currency='MDL'
                />
              </div>
            </div>

            {/* Right side (form) */}
            <CartForm />
          </div>
        )}
      </Container>
    </div>
  );
};
