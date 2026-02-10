import React from 'react';
import { useFilterStore } from '@/store/filterStore';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { getProducts } from '@/lib/api/get-products';

export const useCatalogProducts = (category: string) => {
  const selectedSpecs = useFilterStore((s) => s.selectedSpecs);
  const sort = useFilterStore((s) => s.sort);
  const [page, setPage] = React.useState(1);

  const specsKey = React.useMemo(
    () => JSON.stringify(selectedSpecs),
    [selectedSpecs],
  );

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, sort, category]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['products', category, specsKey, sort, page],
    queryFn: () =>
      getProducts({
        category,
        specs: selectedSpecs,
        sort,
        page,
        limit: 12,
      }),
    placeholderData: keepPreviousData,
    staleTime: 3_000,
  });

  return {
    products: data?.products ?? [],
    totalPages: data?.meta?.totalPages ?? 1,
    page,
    setPage,
    isLoading,
    isFetching,
  };
};
