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

  const mapProducts = (productsData: any[]): IProduct[] =>
    productsData.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: Math.min(...(p.variants.map((v: any) => v.price) || [0])),
      variants: p.variants,
      image: p.image ?? undefined,
    }));

  useEffect(() => {
    async function fetchFilteredProducts() {
      const params = new URLSearchParams();
      params.append('category', category);
      selectedFilters.forEach((id) => params.append('filters', String(id)));

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();
      setProducts(mapProducts(data.products));
    }

    if (selectedFilters.length > 0) fetchFilteredProducts();
    else setProducts(initialProducts);
  }, [selectedFilters, category, initialProducts]);

  return (
    <main className='bg-white flex gap-4 items-start justify-center'>
      <Filters filters={filters} />
      <div>
        <ProductGroupList title='Товары' items={products} />
      </div>
    </main>
  );
};
