import React from 'react';
import { cn } from '@/lib/utils';
import { Filters, ProductGroupList } from '@/components/shared';
import { products } from '@/data';

interface Props {
  params: { category: string };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  return (
    <>
      <h2 className='mt-25'>каталог</h2>
      <main className='  bg-white flex gap-4 items-center justify-center'>
        <Filters />

        <div>
          <ProductGroupList title='смартфоны' items={products} />
        </div>

        
      </main>
    </>
  );
}
