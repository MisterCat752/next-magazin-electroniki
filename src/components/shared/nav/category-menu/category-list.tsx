import { Category } from '@/hooks/useCatalogMenu';
import React from 'react';

export function CategoryList({
  categories,
  hovered,
  setHovered,
}: {
  categories: Category[];
  hovered: string | null;
  setHovered: (id: string) => void;
}) {
  return (
    <div className='max-w-[320px] border-r bg-gray-dark border-gray-300 h-full overflow-y-auto'>
      {categories.map((cat) => (
        <div
          key={cat.id}
          onMouseEnter={() => setHovered(cat.id)}
          className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition
            ${
              hovered === cat.id
                ? 'bg-gray border-l-4 border-[#043652] font-bold'
                : 'hover:bg-gray'
            }`}
        >
          <span className='text-white font-bold text-[14px]'>{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
