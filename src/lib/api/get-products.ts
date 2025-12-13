// lib/api/get-products.ts
import type { IProduct } from '@/types/products.types';

export async function getProducts(params: {
  category: string;
  specs: { name: string; value: string }[];
  sort?: string | null;
}): Promise<IProduct[]> {
  const searchParams = new URLSearchParams();
  searchParams.set('category', params.category);

  if (params.specs.length > 0) {
    searchParams.set(
      'specs',
      params.specs
        .map(
          (s) => `${encodeURIComponent(s.name)}:${encodeURIComponent(s.value)}`
        )
        .join(',')
    );
  }

  if (params.sort) {
    searchParams.set('sort', params.sort);
  }

  const res = await fetch(`/api/products?${searchParams.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch products');

  const data = await res.json();
  return data.products;
}
