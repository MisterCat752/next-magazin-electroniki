import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useProduct(productId: number) {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      return data ?? null;
    },
    staleTime: 5 * 60 * 1000,
  });
}
