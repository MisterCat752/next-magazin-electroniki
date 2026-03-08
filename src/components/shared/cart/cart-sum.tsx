import React from 'react';

type OrderSummaryProps = {
  productCost?: number;
  discount?: number;
  deliveryCost?: number;
  appliedBonus?: number;
  currency?: string;
  className?: string;
};

const formatAmount = (value: number, locale = 'en-US') =>
  new Intl.NumberFormat(locale).format(Math.round(value));

export function CartSum({
  productCost = 11110,
  discount = 125,
  deliveryCost = 124,
  appliedBonus = 1422,
  currency = 'USD',
  className = '',
}: OrderSummaryProps) {
  const total = productCost - discount + deliveryCost - appliedBonus;

  const Row = ({
    label,
    value,
    isNegative,
  }: {
    label: React.ReactNode;
    value: React.ReactNode;
    isNegative?: boolean;
  }) => (
    <div className='flex items-center justify-between text-sm md:text-base'>
      <div className='text-gray-300'>{label}</div>
      <div
        className={`font-medium ${isNegative ? 'text-red-500' : 'text-gray-100'}`}
      >
        {value}
      </div>
    </div>
  );

  return (
    <aside
      className={`bg-[#0f0f0f] text-gray-200 rounded-xl p-6 md:p-8 shadow-md border border-transparent ${className}`}
      aria-label='Order summary'
    >
      <div className='mt-5 space-y-3'>
        <Row
          label='Product Cost'
          value={`${formatAmount(productCost)} ${currency}`}
        />
        <Row
          label='Discount'
          value={`- ${formatAmount(discount)} ${currency}`}
          isNegative
        />
        <Row
          label='Delivery Cost'
          value={`+ ${formatAmount(deliveryCost)} ${currency}`}
        />
        <Row
          label='Applied Bonus'
          value={`- ${formatAmount(appliedBonus)} ${currency}`}
          isNegative
        />
      </div>

      <div className='border-t border-gray-700 my-5' />

      <div className='flex items-center justify-between'>
        <div className='text-sm font-semibold text-gray-200'>Total</div>
        <div className='text-2xl md:text-3xl font-extrabold text-white'>
          {formatAmount(total)} {currency}
        </div>
      </div>
    </aside>
  );
}
