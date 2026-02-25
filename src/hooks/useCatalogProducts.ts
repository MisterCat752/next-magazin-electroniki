'use client';

import React from 'react';
import { useFilterStore } from '@/store/filterStore';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getProducts } from '@/lib/api/get-products';

export const useCatalogProducts = (category: string) => {
  const filtersByCategory = useFilterStore((s) => s.filtersByCategory);

  const categoryState = filtersByCategory[category] || {
    selectedSpecs: [],
    sort: null,
    priceRange: null,
  };

  const { selectedSpecs, sort, priceRange } = categoryState;

  const [page, setPage] = React.useState(1);

  // Сбрасываем страницу при смене фильтров
  React.useEffect(() => {
    setPage(1);
  }, [category, selectedSpecs, sort, priceRange]);

  // Скролл вверх при смене страницы
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Стабильный ключ для specs
  const specsKey = React.useMemo(
    () => JSON.stringify(selectedSpecs),
    [selectedSpecs],
  );

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      'products',
      category,
      specsKey,
      sort,
      page,
      priceRange?.min,
      priceRange?.max,
    ],
    queryFn: () =>
      getProducts({
        category,
        specs: selectedSpecs,
        sort,
        page,
        limit: 12,
        priceRange: priceRange ?? null,
      }),
    placeholderData: keepPreviousData,
    staleTime: 3000,
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
