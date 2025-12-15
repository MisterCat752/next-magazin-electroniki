'use client';
import { useOrders } from '@/hooks/useOrders';
import { OrderTable } from './orderTable';
import React from 'react';

export const OrdersClient = () => {
  const [orderId, setOrderId] = React.useState<string>('');
  const [value, setValue] = React.useState<string>(orderId);
  const {
    data: order,
    isLoading,
    isFetching,
  } = useOrders(orderId, {
    enabled: !!orderId, // ⬅ запрос ТОЛЬКО если есть orderId
  });
  const handleOrderChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) return;

    setOrderId(value.trim());
  };
  if (isLoading) {
    return <p className='text-white p-4'>Загрузка заказа...</p>;
  }

  if (!order) {
    return (
      <form onSubmit={handleOrderChange} className='mb-4 flex gap-2'>
        <input
          type='text'
          value={value}
          name='order'
          onChange={(e) => setValue(e.target.value)}
          placeholder='Введите UUID заказа'
          className='w-full rounded-md px-3 py-2 text-white bg-gray-dark-light border border-gray-600 focus:outline-none focus:border-blue-500'
        />
        <button
          type='submit'
          className='rounded-md border border-green text-white cursor-pointer  px-4 py-2 hover:bg-green hover:text-black transition duration-150'
        >
          Найти
        </button>
      </form>
    );
  }

  return (
    <div>
      <OrderTable {...order} />
    </div>
  );
};
