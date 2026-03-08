'use client';
import React from 'react';
import { useOrdersByEmail } from '@/hooks/useOrders';
import { OrderTable, OrderTableProps } from './orderTable';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui';
import Link from 'next/link';

export const OrdersClient = () => {
  const { data: session } = useSession();
  const email = session?.user?.email || '';

  const { data: orders, isLoading } = useOrdersByEmail(email, { enabled: !!email });

  if (!email) {
    return (
      <p className='text-white p-4'>You must be logged in to see orders</p>
    );
  }

  if (isLoading) {
    return <p className='text-white p-4'>Loading orders...</p>;
  }

  if (!orders || orders.length === 0) {
    return (
      <div className='text-white p-6 flex flex-col items-center gap-4'>
        <p>You have no orders yet.</p>
        <Link href='/shop'>
          <Button className='bg-green text-black px-6 py-3'>Go shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-6'>
      {orders.map((order:OrderTableProps) => (
        <OrderTable key={order.id} {...order} />
      ))}
    </div>
  );
};
