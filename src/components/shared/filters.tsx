'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from './index';
import { Title, Input } from '@/components/ui';
import { useFilterStore } from '@/store/filterStore';
import { useFilters } from '@/hooks/useFilters';
export interface FilterValueType {
  id: number;
  value: string; // значение спецификации
}

export interface FilterType {
  id: number;
  name: string; // Цвет, Память, Видеочип, и т.д.
  values: FilterValueType[];
  isSpec?: boolean; // должно быть всегда true
}

interface Props {
  className?: string;
  filters: FilterType[];
}

export const Filters: React.FC<{ className?: string; categoryId: string }> = ({
  className,
  categoryId,
}) => {
  const { data: filters = [], isLoading } = useFilters(categoryId);
  const selectedSpecs = useFilterStore((state) => state.selectedSpecs);
  const toggleSpecFilter = useFilterStore((state) => state.toggleSpecFilter);
  const mobileFiltersOpen = useFilterStore((s) => s.mobileFiltersOpen);
  const closeMobileFilters = useFilterStore((s) => s.closeMobileFilters);
  const [searchTerms, setSearchTerms] = useState<Record<number, string>>({});

  const handleSearchChange = (filterId: number, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [filterId]: value }));
  };

  return (
    <div>
      {mobileFiltersOpen && (
        <div
          className={cn(
            className,
            ' w-[250px]    fixed top-25 left-0 z-40 lg:relative lg:top-0 text-white rounded-md min-h-[100vh]  bg-gray-dark  p-6 ',
          )}
        >
          <Title text='Фильтрация' size='sm' className='mb-7 font-bold' />
          <div
            onClick={closeMobileFilters}
            className='absolute lg:hidden top-5 right-5 '
          >
            X
          </div>
          <div className='max-h-[500px] scroll-hidden overflow-y-auto  '>
            {filters.map((filter: any) => {
              const filteredItems = filter.values.map((v: any) => ({
                text: `${v.value}  `,
                value: v.value,
                disabled: v.count === 0,
              }));

              const selectedIds = new Set(
                selectedSpecs
                  .filter((s) => s.name === filter.name)
                  .map((s) => s.value),
              );

              return (
                <CheckboxFilterGroup
                  key={filter.id}
                  title={filter.name}
                  items={filteredItems}
                  selectedIds={selectedIds}
                  loading={isLoading}
                  onClickCheckBox={(item) =>
                    toggleSpecFilter({ name: filter.name, value: item.value })
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
