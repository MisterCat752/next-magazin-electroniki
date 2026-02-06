import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFilters = (categoryId: string) => {
  return useQuery({
    queryKey: ['filters', categoryId],
    queryFn: async () => {
      const { data } = await axios.get('/api/filters', {
        params: { category: categoryId }, // GET-параметр
      });
      return data;
    },
    placeholderData: keepPreviousData,
  });
};
