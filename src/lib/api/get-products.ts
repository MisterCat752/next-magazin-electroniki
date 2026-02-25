import { ProductsResponse } from '@/types/products/products.dto';

export async function getProducts(params: {
  category: string;
  specs?: { name: string; value: string }[];
  sort?: string | null;
  page?: number;
  limit?: number;
  priceRange: { min: number; max: number } | null;
}): Promise<ProductsResponse> {
  const query = new URLSearchParams();

  query.set('category', params.category);
  if (params.specs?.length) {
    const encoded = params.specs
      .map(
        (s) => `${encodeURIComponent(s.name)}:${encodeURIComponent(s.value)}`,
      )
      .join(',');

    query.set('specs', encoded);
  }
  if (params.sort) query.set('sort', params.sort);

  query.set('page', String(params.page ?? 1));
  query.set('limit', String(params.limit ?? 10));
  if (params.priceRange) {
    if (params.priceRange.min !== 0) {
      query.set('minPrice', String(params.priceRange.min));
    }

    if (params.priceRange.max !== 999999999) {
      query.set('maxPrice', String(params.priceRange.max));
    }
  }
  const res = await fetch(`/api/products?${query.toString()}`);
  return res.json();
}
