'use client';
import React, { useEffect, useState } from 'react';
import { Filters, ProductGroupList } from '@/components/shared';
import { useFilterStore } from '@/store/filterStore';
import type { IProduct } from '@/types/products.types';

interface Props {
  category: string;
  initialProducts: IProduct[];
  filters: any[];
}

export const CategoryContent: React.FC<Props> = ({
  category,
  initialProducts,
  filters,
}) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const selectedSpecs = useFilterStore((state) => state.selectedSpecs);

  useEffect(() => {
    async function fetchFilteredProducts() {
      const params = new URLSearchParams();
      params.set('category', category);

      if (selectedSpecs.length > 0) {
        // Формируем "Цвет:Синий,Память:16GB"
        const specsStr = selectedSpecs
          .map(
            (s) =>
              `${encodeURIComponent(s.name)}:${encodeURIComponent(s.value)}`
          )
          .join(',');

        params.set('specs', specsStr);
      }

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();
      setProducts(data.products);
    }

    fetchFilteredProducts();
  }, [category, selectedSpecs]);

  return (
    <main className='bg-[#000] py-30 flex gap-4 items-start justify-center'>
      <Filters filters={filters} />
      <div>
        <ProductGroupList title='Товары' items={products} />
      </div>
    </main>
  );
};
