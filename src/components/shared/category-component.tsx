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
  const selectedFilters = useFilterStore((state) => state.selected);

  useEffect(() => {
    async function fetchFilteredProducts() {
      const params = new URLSearchParams();
      params.set('category', category);
      params.set('filters', selectedFilters.join(',')); // <-- ВАЖНО

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();

      setProducts(data.products);
    }

    if (selectedFilters.length > 0) fetchFilteredProducts();
    else setProducts(initialProducts);
  }, [selectedFilters, category, initialProducts]);
  console.log(products, 'products');
  return (
    <main className='bg-white flex gap-4 items-start justify-center'>
      <Filters filters={filters} />
      <div>
        <ProductGroupList title='Товары' items={products} />
      </div>
    </main>
  );
};
