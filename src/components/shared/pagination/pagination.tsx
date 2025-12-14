'use client';

import { cn } from '@/lib/utils';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className='flex gap-2 justify-center mt-6 text-white'>
      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={cn(
              'px-3 py-1 border rounded',
              p === page && 'bg-white text-black'
            )}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};
