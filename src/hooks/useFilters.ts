import { useFilterStore } from '@/store/filterStore';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

export const useFilters = (categoryId: string) => {
  const selectedSpecs = useFilterStore((state) => state.selectedSpecs);
  const toggleSpecFilter = useFilterStore((state) => state.toggleSpecFilter);
  const mobileFiltersOpen = useFilterStore((s) => s.mobileFiltersOpen);
  const closeMobileFilters = useFilterStore((s) => s.closeMobileFilters);
  const toggleMobileFilters = useFilterStore((s) => s.toggleMobileFilters);
  const clearFilters = useFilterStore((s) => s.clearFilters);

  // price

  const priceRange = useFilterStore((s) => s.priceRange);
  const setPriceRange = useFilterStore((s) => s.setPriceRange);
  const [priceMin, setPriceMin] = React.useState(priceRange?.min ?? 1);
  const [priceMax, setPriceMax] = React.useState(priceRange?.max ?? 1000);
  const { data, isLoading } = useQuery({
    queryKey: ['filters', categoryId],
    queryFn: async () => {
      const { data } = await axios.get('/api/filters', {
        params: { category: categoryId },
      });
      return data;
    },
    placeholderData: keepPreviousData,
  });

  return {
    filters: data ?? [],
    isLoading,
    selectedSpecs,
    toggleSpecFilter,
    mobileFiltersOpen,
    closeMobileFilters,
    toggleMobileFilters,
    clearFilters,
    priceRange,
    setPriceRange,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
  };
};
