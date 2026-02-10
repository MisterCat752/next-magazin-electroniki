'use client';

import React from 'react';
import { useFilterStore } from '@/store/filterStore';
import { cn } from '@/lib/utils';

interface Option {
  value: 'price_asc' | 'price_desc';
  label: string;
}

const OPTIONS: Option[] = [
  { value: 'price_asc', label: 'Цена: по возрастанию' },
  { value: 'price_desc', label: 'Цена: по убыванию' },
];

export function SortSelect() {
  const sort = useFilterStore((s) => s.sort);
  const setSort = useFilterStore((s) => s.setSort);
  const [open, setOpen] = React.useState(false);

  const selectedLabel =
    OPTIONS.find((o) => o.value === sort)?.label ?? 'Сортировка';

  return (
    <div className='relative w-[220px]'>
      <button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'w-full flex items-center justify-between px-4 py-2 rounded-md bg-gray-dark-medium text-white border border-gray-700 hover:border-green transition',
        )}
      >
        <span>{selectedLabel}</span>
        <span className='text-sm opacity-70'>▼</span>
      </button>

      {open && (
        <div
          className={cn(
            'absolute z-50 mt-2 w-full rounded-md bg-gray-dark-medium border border-gray-700 shadow-lg',
          )}
        >
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSort(option.value);
                setOpen(false);
              }}
              className={cn(
                'w-full text-left px-4 py-2 text-sm hover:bg-green hover:text-black transition',
                sort === option.value && 'bg-green text-black',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
