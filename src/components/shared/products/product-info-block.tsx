import React from 'react';
import { cn } from '@/lib/utils';

interface InfoItem {
  label: string;
  value: string;
}
interface Props {
  className?: string;
  title: string;
  items: InfoItem[];
}

export const ProductInfoBlock: React.FC<Props> = ({
  title,
  items,
  className,
}) => {
  return (
    <div className={cn('bg-white rounded-2xl p-4 shadow-md', className)}>
      {/* Заголовок блока */}
      <h2 className='text-lg font-semibold mb-3'>{title}</h2>

      {/* Список характеристик */}
      <dl className='divide-y divide-gray-200'>
        {items.map((item, idx) => (
          <div key={idx} className='flex justify-between py-2'>
            <dt className='text-gray-600'>{item.label}</dt>
            <dd className='font-medium text-gray-900 text-right'>
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
