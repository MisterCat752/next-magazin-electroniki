'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from '../index';
import { Title } from '@/components/ui';
import { useFilters } from '@/hooks/useFilters';

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
    closeMobileFilters,
    toggleMobileFilters,
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
        'w-[250px] z-40 text-white rounded-md bg-gray-dark p-6',
        'fixed top-20 left-0 min-h-[100vh]',
        'lg:relative lg:top-0',
        mobileFiltersOpen && 'hidden lg:block', // ⭐ ключевая строка
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

      <div className='max-h-[500px] scroll-hidden overflow-y-auto'>
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
      </div>
    </div>
  );
};
