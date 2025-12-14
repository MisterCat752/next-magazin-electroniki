// lib/api/get-products.ts

import { ProductsResponse } from '@/types/products/products.dto';

export async function getProducts(params: {
  category: string; // теперь необязательное
  specs?: { name: string; value: string }[]; // необязательное
  sort?: string | null;
  page?: number;
  limit?: number;
}): Promise<ProductsResponse> {
  const query = new URLSearchParams();

  query.set('category', params.category);
  if (params.specs?.length) {
    query.set('specs', params.specs.join(','));
  }
  if (params.sort) query.set('sort', params.sort);

  query.set('page', String(params.page ?? 1));
  query.set('limit', String(params.limit ?? 10));

  const res = await fetch(`/api/products?${query.toString()}`);
  return res.json();
}
