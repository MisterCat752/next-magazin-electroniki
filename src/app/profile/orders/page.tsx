import React from 'react';
import { cn } from '@/lib/utils';
import { OrdersClient } from '@/components/shared/profile/order-component';

interface Props {
  className?: string;
}

export default function Page({ className }: Props) {
  return (
    <div
      className={cn(
        className,
        'p-8 bg-gray-dark-medium w-full max-w-[800px] min-h-[500px] rounded-[16px]'
      )}
    >
      <h1 className='text-white font-bold text-[24px] mb-4'>Ваши заказы</h1>

      <OrdersClient />
    </div>
  );
}
