import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChecboxProps, FilterCheckbox } from './checkbox-filter';
import { Title } from '@/components/ui';
import { Input, Skeleton } from '@/components/ui';

export type Items = FilterChecboxProps;

interface Props {
  title: string;
  items: Items[];
  defaultItem?: Items[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceHolder?: string;
  // onClick теперь получает весь item, чтобы можно было взять text и value
  onClickCheckBox?: (item: Items) => void;
  defaultValue?: string[];
  className?: string;
  selectedIds?: Set<string>;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItem,
  limit = 5,
  searchInputPlaceHolder = 'Поиск...',
  onClickCheckBox,
  defaultValue,
  loading,
  selectedIds,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mt-3'>{title}</p>
        {Array(limit)
          .fill(0)
          .map((_, idx) => (
            <Skeleton key={idx} className='mt-3   h-6' />
          ))}
        <Skeleton className='mt-6 w-25 h-5' />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItem || items).slice(0, limit);

  return (
    <div className={cn(className)}>
      <Title text={title} size='sm' className='font-bold mb-1' />

      {showAll && (
        <div className='mb-2'>
          <Input
            onChange={onChangeSearchInput}
            value={searchValue}
            type='text'
            placeholder={searchInputPlaceHolder}
            className='border-none bg-gray-50'
          />
        </div>
      )}

      <div className='flex flex-col overflow-auto gap-3 max-h-96 py-5 scrollbar'>
        {list.map((item, idx) => {
          return (
            <FilterCheckbox
              key={idx}
              text={item.text}
              name={item.text}
              value={item.value}
              checked={selectedIds?.has(item.value)}
              // передаём весь item в обработчик
              onCheckedChange={() => onClickCheckBox?.(item)}
            />
          );
        })}
      </div>
      {items.length > limit && (
        <div className={showAll ? ' border-t border-t-neutral-100  mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className='text-primary mt-3'
          >
            {showAll ? 'скрыть' : 'показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
