'use client';

import { Slider, ProductCard } from '@/components/shared';
import type { IProduct } from '@/types/products.types';
import { useProductsSection } from '@/hooks/useProductsSection';

interface Props {
  title: string;
  category: string;
  sort?: string;
  queryKeySuffix: string;
}

export const ProductsSection: React.FC<Props> = ({
  title,
  category,
  sort,
  queryKeySuffix,
}) => {
  const { data, isLoading } = useProductsSection({
    category,
    sort,
    queryKeySuffix,
  });

  if (isLoading) {
    return <p className='text-white'>Загрузка...</p>;
  }

  return (
    <>
      <h2 className='text-xl text-white font-bold'>{title}</h2>
      <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
        {data?.products.map((p: IProduct) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Slider>
    </>
  );
};
