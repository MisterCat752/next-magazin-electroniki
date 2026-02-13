import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/api/get-products';
import { ProductsResponse } from '@/types/products/products.dto';

interface UseProductsSectionParams {
  category: string;
  sort?: string;
  limit?: number;
  page?: number;
  queryKeySuffix: string;
}

export function useProductsSection({
  category,
  sort,
  limit = 8,
  page = 1,
  queryKeySuffix,
}: UseProductsSectionParams) {
  return useQuery<ProductsResponse>({
    queryKey: ['products', queryKeySuffix, category, sort, page, limit],
    queryFn: () =>
      getProducts({
        category,
        sort,
        limit,
        page,
        priceRange: {
          min: 0,
          max: Number.MAX_SAFE_INTEGER,
        },
      }),
    staleTime: 5 * 60 * 1000,
  });
}
