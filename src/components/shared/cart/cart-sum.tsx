import React from 'react';

type OrderSummaryProps = {
  bonusReceived: number;
  productCost: number;
  discount: number;
  deliveryCost: number;
  appliedBonus: number;
  currency?: string;
  className?: string;
};

const formatAmount = (value: number, locale = 'ru-RU') =>
  new Intl.NumberFormat(locale).format(Math.round(value));

export function CartSum({
  bonusReceived,
  productCost,
  discount,
  deliveryCost,
  appliedBonus,
  currency = 'лей',
  className = '',
}: OrderSummaryProps) {
  const total = productCost - discount + deliveryCost - appliedBonus;

  const Row = ({
    label,
    value,
  }: {
    label: React.ReactNode;
    value: React.ReactNode;
  }) => (
    <div className='flex items-center justify-between text-sm md:text-base'>
      <div className='text-gray-300'>{label}</div>
      <div className='font-medium text-gray-100'>{value}</div>
    </div>
  );

  return (
    <aside
      className={`bg-[#0f0f0f] text-gray-200 rounded-xl p-6 md:p-8 shadow-md border border-transparent ${className}`}
      aria-label='Order summary'
    >
      <div className='flex items-start justify-between'>
        <div className='text-sm text-gray-300'>Бонусов получено</div>
        <div className='text-2xl md:text-3xl font-extrabold text-white'>
          {formatAmount(bonusReceived)} {currency}
        </div>
      </div>

      <div className='mt-5 space-y-3'>
        <Row
          label='Стоимость продукции'
          value={`${formatAmount(productCost)} ${currency}`}
        />
        <Row label='Скидка' value={`${formatAmount(discount)} ${currency}`} />
        <Row
          label='Стоимость доставки'
          value={`${formatAmount(deliveryCost)} ${currency}`}
        />
        <Row
          label='Примененный бонус'
          value={`${formatAmount(appliedBonus)} ${currency}`}
        />
      </div>

      <div className='border-t border-gray-700 my-5' />

      <div className='flex items-center justify-between'>
        <div className='text-sm font-semibold text-gray-200'>Итого</div>
        <div className='text-2xl md:text-3xl font-extrabold text-white'>
          {formatAmount(total)} {currency}
        </div>
      </div>
    </aside>
  );
}
