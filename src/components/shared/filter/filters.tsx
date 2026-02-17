'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from '../index';
import { Title } from '@/components/ui';
import { useFilters } from '@/hooks/useFilters';
import { useFilterStore } from '@/store/filterStore';

export interface FilterValueType {
  id: number;
  value: string;
  count?: number;
}

export interface FilterType {
  id: string | number;
  name: string;
  values: FilterValueType[];
  isSpec?: boolean;
}

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
    setPriceRange,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    clearFilters,
  } = useFilters(categoryId);
  const getFilterItems = (filter: FilterType) =>
    filter.values.map((v) => ({
      text: v.value,
      value: v.value,
      disabled: v.count === 0,
    }));

  const getSelectedIds = (name: string) =>
    new Set(selectedSpecs.filter((s) => s.name === name).map((s) => s.value));

  return (
    <div
      className={cn(
        className,
        'w-[250px] z-240 text-white rounded-md bg-gray-dark p-6',
        'fixed top-20 left-0 h-[100dvh] lg:relative lg:h-auto',
        mobileFiltersOpen ? 'block' : 'hidden lg:block',
      )}
    >
      <Title text='Filters' size='sm' className='mb-7 font-bold' />

      {/* Кнопка закрытия только на мобиле */}
      <div
        onClick={toggleMobileFilters}
        className='absolute lg:hidden top-5 right-5 cursor-pointer'
      >
        X
      </div>

      <div className='  scroll-hidden h-[calc(100vh-120px)] overflow-y-auto pr-2'>
        {filters.map((filter: FilterType) => (
          <CheckboxFilterGroup
            key={filter.id}
            title={filter.name}
            items={getFilterItems(filter)}
            selectedIds={getSelectedIds(filter.name)}
            loading={isLoading}
            onClickCheckBox={(item) =>
              toggleSpecFilter({ name: filter.name, value: item.value })
            }
          />
        ))}
        <div className='my-4'>
          <p className='text-white font-bold mb-2'>Цена (MDL)</p>
          <div className='flex gap-2'>
            <input
              type='number'
              placeholder='от'
              className='w-1/2 p-2 rounded bg-gray-700 text-white'
              value={priceMin ?? 1}
              onChange={(e) => setPriceMin(Number(e.target.value))}
            />
            <input
              type='number'
              placeholder='до'
              className='w-1/2 p-2 rounded bg-gray-700 text-white'
              value={priceMax ?? 1000}
              onChange={(e) => setPriceMax(Number(e.target.value))}
            />
          </div>
          <button
            onClick={() => setPriceRange({ min: priceMin, max: priceMax })}
            className='mt-2 px-3 py-1 bg-green text-black font-bold rounded'
          >
            Применить
          </button>
        </div>
        <button
          onClick={clearFilters}
          className='mt-4 px-3 py-1 bg-green text-black font-bold rounded'
        >
          Очистка фильтров
        </button>
      </div>
    </div>
  );
};
