// lib/api/get-products.ts
import type { IProduct } from '@/types/products.types';

export async function getProducts(params: {
  category?: string; // теперь необязательное
  specs?: { name: string; value: string }[]; // необязательное
  sort?: string | null;
  limit?: number;
}): Promise<IProduct[]> {
  const searchParams = new URLSearchParams();

  if (params.category) searchParams.set('category', params.category);

  if (params.specs && params.specs.length > 0) {
    searchParams.set(
      'specs',
      params.specs
        .map(
          (s) => `${encodeURIComponent(s.name)}:${encodeURIComponent(s.value)}`
        )
        .join(',')
    );
  }

  if (params.sort) searchParams.set('sort', params.sort);

  if (params.limit) searchParams.set('limit', params.limit.toString());

  const res = await fetch(`/api/products?${searchParams.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch products');

  const data = await res.json();
  return data.products;
}
