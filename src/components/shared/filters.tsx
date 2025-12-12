'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from './index';
import { Title, Input } from '@/components/ui';
import { useFilterStore } from '@/store/filterStore';

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

export const Filters: React.FC<Props> = ({ className, filters }) => {
  const selectedSpecs = useFilterStore((state) => state.selectedSpecs);
  const toggleSpecFilter = useFilterStore((state) => state.toggleSpecFilter);

  const [searchTerms, setSearchTerms] = useState<Record<number, string>>({});

  const handleSearchChange = (filterId: number, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [filterId]: value }));
  };

  return (
    <div
      className={cn(
        className,
        'max-w-[250px] text-white rounded-md  bg-[#1c1c1ed2] p-6 w-full'
      )}
    >
      <Title text='Фильтрация' size='sm' className='mb-7 font-bold' />

      {filters.map((filter) => {
        const filteredItems = filter.values
          .filter((v) =>
            searchTerms[filter.id]
              ? v.value
                  .toLowerCase()
                  .includes(searchTerms[filter.id].toLowerCase())
              : true
          )
          .map((v) => ({
            text: v.value, // то, что будет на чекбоксе
            value: v.value, // значение для selectedIds + toggle
          }));

        const selectedIds = new Set(
          selectedSpecs
            .filter((s) => s.name === filter.name)
            .map((s) => s.value)
        );

        return (
          <div key={filter.id} className='mb-6 mt-3 '>
            <CheckboxFilterGroup
              title={filter.name}
              items={filteredItems}
              selectedIds={selectedIds}
              onClickCheckBox={(item) => {
                toggleSpecFilter({ name: filter.name, value: item.value });
              }}
              className='mt-2'
            />

            {filter.values.length > 5 && (
              <div className='mt-2'>
                <Input
                  type='text'
                  placeholder='Поиск...'
                  value={searchTerms[filter.id] || ''}
                  onChange={(e) =>
                    handleSearchChange(filter.id, e.target.value)
                  }
                  className='border-none bg-gray-50'
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
