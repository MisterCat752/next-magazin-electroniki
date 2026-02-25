'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from '../index';
import { Title } from '@/components/ui';
import { useFilters } from '@/hooks/useFilters';

interface Props {
  className?: string;
  categoryId: string;
}

export const Filters: React.FC<Props> = ({ className, categoryId }) => {
  const {
    filters,
    isLoading,
    selectedSpecs,
    toggleSpecFilter,
    mobileFiltersOpen,
    toggleMobileFilters,
    priceRange,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    clearFilters,
  } = useFilters(categoryId);

  const getSelectedIds = (name: string) =>
    new Set(selectedSpecs.filter((s) => s.name === name).map((s) => s.value));

  return (
    <div
      className={cn(
        className,
        'z-50 bg-gray-dark text-white',
        // mobile
        'fixed inset-0 lg:relative lg:inset-auto',
        mobileFiltersOpen ? 'flex' : 'hidden lg:flex',
        'flex-col lg:w-[250px] lg:rounded-md',
      )}
    >
      {/* HEADER */}
      <div className='flex mt-20  md:mt-0 items-center justify-between p-4 border-b border-gray-700'>
        <Title text='Filters' size='sm' className='font-bold' />
        <button onClick={toggleMobileFilters} className='lg:hidden text-xl'>
          ✕
        </button>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className='flex-1 overflow-y-auto p-4  space-y-6'>
        {filters.map((filter: any) => (
          <CheckboxFilterGroup
            key={filter.id}
            title={filter.name}
            items={filter.values.map((v: any) => ({
              text: v.value,
              value: v.value,
              disabled: v.count === 0,
            }))}
            selectedIds={getSelectedIds(filter.name)}
            loading={isLoading}
            onClickCheckBox={(item) =>
              toggleSpecFilter({ name: filter.name, value: item.value })
            }
          />
        ))}

        {/* PRICE */}
        <div>
          <p className='font-bold mb-2'>Цена (MDL)</p>
          <div className='flex gap-2'>
            <input
              type='number'
              placeholder='от'
              className='w-1/2 p-2 rounded bg-gray-700 text-white outline-none'
              value={priceMin ?? ''}
              onChange={(e) =>
                setPriceMin(e.target.value ? Number(e.target.value) : null)
              }
            />
            <input
              type='number'
              placeholder='до'
              className='w-1/2 p-2 rounded bg-gray-700 text-white outline-none'
              value={priceMax ?? ''}
              onChange={(e) =>
                setPriceMax(e.target.value ? Number(e.target.value) : null)
              }
            />
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className='p-4 border-t border-gray-700 bg-gray-dark sticky bottom-0'>
        <button
          onClick={clearFilters}
          className='w-full py-2 bg-green text-black font-bold rounded'
        >
          Очистить фильтры
        </button>
      </div>
    </div>
  );
};
