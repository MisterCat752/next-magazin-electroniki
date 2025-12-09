'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFilterGroup } from './index';
import { Title, Input } from '@/components/ui';
import { useFilterStore } from '@/store/filterStore';

export interface FilterValueType {
  id: number;
  value: string;
}

export interface FilterType {
  id: number;
  name: string; // Например: Цвет, Память, Процессор
  values: FilterValueType[];
}

interface Props {
  className?: string;
  filters: FilterType[];
}

export const Filters: React.FC<Props> = ({ className, filters }) => {
  const { selected, toggleFilter } = useFilterStore();
  const [searchTerms, setSearchTerms] = useState<Record<number, string>>({});

  const handleSearchChange = (filterId: number, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [filterId]: value }));
  };
  console.log(filters, 'filters');
  return (
    <div
      className={cn(
        className,
        'max-w-[250px]  text-white rounded-md bg-[#1c1c1ed2] p-4 w-full'
      )}
    >
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {filters.map((filter) => {
        const filteredItems = filter.values
          .filter((v) =>
            searchTerms[filter.id] || ''
              ? v.value
                  .toLowerCase()
                  .includes(searchTerms[filter.id].toLowerCase())
              : true
          )
          .map((v) => ({
            text: v.value,
            value: String(v.id),
          }));

        return (
          <div key={filter.id} className='mb-6'>
            <CheckboxFilterGroup
              title={filter.name}
              items={filteredItems}
              selectedIds={new Set(selected.map(String))} // <--- здесь приводим числа к строкам
              onClickCheckBox={(id) => toggleFilter(Number(id))} // обратно в number
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
