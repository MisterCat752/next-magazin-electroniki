'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface OrderItemProps {
  id: number;
  variantId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface OrderTableProps {
  id: string;
  totalPrice: number;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
  items: OrderItemProps[];
}

export const useOrdersByEmail = (
  email: string,
  options?: { enabled?: boolean },
) => {
  return useQuery<OrderTableProps[]>({
    queryKey: ['orders', email],
    enabled: options?.enabled,
    queryFn: async () => {
      const { data } = await axios.get<OrderTableProps[]>(
        `/api/order?email=${email}`,
      );
      return data;
    },
  });
};
