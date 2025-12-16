'use client';

import { Slider } from '@/components/shared';
import { ProductCard } from './product-card';
import { useProductsSection } from '@/hooks/useProductsSection';
import type { IProduct } from '@/types';

export const SimilarProducts = ({
  categorySlug,
}: {
  categorySlug?: string;
}) => {
  const { data, isLoading } = useProductsSection({
    category: categorySlug ?? 'samsung',
    sort: 'createdAt_desc',
    queryKeySuffix: 'latest',
    limit: 5,
  });

  if (isLoading) {
    return <p className='text-white'>Загрузка...</p>;
  }

  return (
    <>
      <h2 className='text-xl text-white font-bold'>Последние товары</h2>
      <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
        {data?.products.map((p: IProduct) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Slider>
    </>
  );
};
