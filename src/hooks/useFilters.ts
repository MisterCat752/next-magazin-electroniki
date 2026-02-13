import { useFilterStore } from '@/store/filterStore';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFilters = (categoryId: string) => {
  const selectedSpecs = useFilterStore((state) => state.selectedSpecs);
  const toggleSpecFilter = useFilterStore((state) => state.toggleSpecFilter);
  const mobileFiltersOpen = useFilterStore((s) => s.mobileFiltersOpen);
  const closeMobileFilters = useFilterStore((s) => s.closeMobileFilters);
  const toggleMobileFilters = useFilterStore((s) => s.toggleMobileFilters);

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
  };
};
