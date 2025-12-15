import React from 'react';

interface OrderTableProps {
  id: string; // UUID
  totalPrice: number;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
  items: { id: number }[];
}

export const OrderTable = ({
  id,
  totalPrice,
  createdAt,
  items,
}: OrderTableProps) => {
  return (
    <div className='mt-4 space-y-3'>
      <div className='bg-gray-dark-light rounded-xl p-4 text-white'>
        <div className='flex justify-between'>
          <div>
            <p className='font-semibold'>Заказ</p>
            <p className='text-sm text-gray-400'>UUID: {id}</p>
          </div>

          <div className='text-right'>
            <p className='font-bold'>{totalPrice} ₽</p>
            <p className='text-sm text-gray-400'>
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <p className='text-sm text-gray-400 mt-2'>Товаров: {items.length}</p>
      </div>
    </div>
  );
};
