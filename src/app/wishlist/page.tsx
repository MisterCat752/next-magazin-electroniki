import React from 'react';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/shared';
import { Container } from '@/components/layout/container';

interface Props {
  className?: string;
}

export default async function Page({ className }: Props) {
  return (
    <div className={cn(className, 'bg-[#000] min-h-[100vh] pt-30 pb-30')}>
      <Container className=''>
        <h1 className='text-[24px] text-white font-semibold'>
          Список избранных
        </h1>
        <div className='flex  w-full gap-3   '>
          <ProductCard
            key={1}
            id={1}
            price={13}
            name={'samsung'}
            image={'/samsung-25-fe.webp'}
            className='bg-gray-dark text-white'
          />
          <ProductCard
            key={2}
            id={2}
            price={14}
            name={'samsung'}
            image={'/samsung-25-fe.webp'}
            className='bg-gray-dark text-white'
          />
          <ProductCard
            key={3}
            id={3}
            price={15}
            name={'samsung'}
            image={'/samsung-25-fe.webp'}
            className='bg-gray-dark text-white'
          />
        </div>
      </Container>
    </div>
  );
}
