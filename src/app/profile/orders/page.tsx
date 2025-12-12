import React from 'react';
import { cn } from '@/lib/utils';
import { OrderTable } from '@/components/shared/profile/orderTable';

interface Props {
  className?: string;
}
const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];
export default async function Page({ className }: Props) {
  return (
    <div
      className={cn(
        className,
        'p-8  bg-gray-dark-medium w-full max-w-[800px] min-h-[500px] rounded-[16px] '
      )}
    >
      <h1 className='text-white font-bold text-[24px]'>Ваши заказы</h1>
      <div className='   '>
        <p className='text-white p-4'>У вас пока нет заказов.</p>

        <div className='w-full'>
          <div className='  '>
            <OrderTable items={invoices} />
          </div>
        </div>
      </div>
    </div>
  );
}
