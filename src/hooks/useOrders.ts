'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface OrderTableProps {
  id: string; // UUID
  totalPrice: number;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
  items: { id: number }[];
}

export const useOrders = (orderId: string, options?: { enabled?: boolean }) => {
  return useQuery<OrderTableProps>({
    queryKey: ['order', orderId], // важно добавить id в key
    enabled: options?.enabled,
    queryFn: async () => {
      const { data } = await axios.get<OrderTableProps>(
        `/api/order/${orderId}`
      );
      return data;
    },
  });
};
