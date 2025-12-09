'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from './index';
import { Input, RangeSlider, Title } from '@/components/ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, 'max-w-[250px]   p-4 w-full')}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* Тип пицц */}
      <CheckboxFilterGroup
        title='Тип теста'
        className='mt-2'
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      {/* Размеры */}
      <CheckboxFilterGroup
        title='Размеры'
        className='mt-3'
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className='mt-6 py-6 pb-7 border-y border-y-neutral-100 '>
        {/* Цена слидер от до */}
        <p className='font-bold mb-3'>Цена от и до</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' min={0} max={1000} placeholder='0 ' />
          <Input type='number' min={0} max={1000} placeholder='1000' />
        </div>
        <div className='mt-10'>
          <RangeSlider min={0} max={1000} step={1} />
        </div>

        {/*Ингридиенты */}
        <div>
          <CheckboxFilterGroup
            title='Ингридиенты'
            className='mt-12'
            limit={6}
            items={[
              { text: '20 см', value: '20' },
              { text: '30 см', value: '30' },
              { text: '40 см', value: '40' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
