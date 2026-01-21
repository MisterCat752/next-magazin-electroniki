'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Category = {
  id: string;
  name: string;
  slug?: string;
  parentId?: string | null;
  children?: Category[];
};
type ClassNamePosition = {
  placeClassName?: string;
};

const promoImages = ['/images/promo1.png', '/images/promo2.png'];

function IconBySlug(slug?: string) {
  if (!slug)
    return (
      <svg width={24} height={24} viewBox='0 0 24 24'>
        <rect width='20' height='14' x='2' y='5' rx='2' fill='#222' />
      </svg>
    );

  const s = slug.toLowerCase();
  if (
    s.includes('phone') ||
    s.includes('smart') ||
    s.includes('android') ||
    s.includes('ios')
  )
    return (
      <svg width={24} height={24} viewBox='0 0 24 24'>
        <rect x='8' y='2' width='8' height='18' rx='2' fill='#222' />
        <circle cx='12' cy='20' r='0.9' fill='#fff' />
      </svg>
    );

  if (s.includes('laptop') || s.includes('notebook'))
    return (
      <svg width={24} height={24} viewBox='0 0 24 24'>
        <rect x='3' y='6' width='18' height='12' rx='2' fill='#222' />
      </svg>
    );

  return (
    <svg width={24} height={24} viewBox='0 0 24 24'>
      <rect x='3' y='6' width='18' height='12' rx='2' fill='#222' />
    </svg>
  );
}

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch('/api/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function CatalogMenu(placeClassName: ClassNamePosition) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // 10 минут
    enabled: open, // загружаем только когда меню открыто
  });

  // Сбрасываем hovered при открытии меню
  React.useEffect(() => {
    if (open && categories.length > 0 && !hovered) {
      setHovered(categories[0].id);
    }
  }, [open, categories, hovered]);

  const current = categories.find((c) => c.id === hovered) ?? null;

  const NestedList: React.FC<{ node: Category }> = ({ node }) => {
    return (
      <li>
        <Link
          href={`http://localhost:3000/category/${node.slug}`}
          className='cursor-pointer text-white hover:text-green transition duration-200 '
        >
          {node.name}
        </Link>
        {node.children && node.children.length > 0 && (
          <ul className='ml-4 mt-1 space-y-1'>
            {node.children.map((ch) => (
              <NestedList key={ch.id} node={ch} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <button
        className='flex items-center gap-2 px-4 py-2 bg-gray-medium text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <span className='font-bold'>Каталог</span>
      </button>

      {open && (
        <div
          className={cn(
            'absolute inset-x-0 mx-auto bg-gray-dark   max-w-[1200px] w-full h-[480px]   shadow-2xl z-30 flex',
            placeClassName.placeClassName || 'top-[60px]'
          )}
          onMouseLeave={() => setHovered(null)}
        >
          <div className='max-w-[320px] border-r bg-gray-dark border-gray-300 h-full   overflow-y-auto'>
            {isLoading && (
              <div className='px-5 py-3 text-sm text-gray-500'>Загрузка...</div>
            )}

            {categories.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => setHovered(cat.id)}
                className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition
                  ${
                    hovered === cat.id
                      ? 'bg-white border-l-4 border-[#043652] font-bold'
                      : 'hover:bg-gray-100'
                  }`}
              >
                <span>{IconBySlug(cat.slug)}</span>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>

          <div className='flex-1 flex flex-row h-full'>
            <div className='flex-1 px-7 py-7 overflow-y-auto grid grid-cols-3 gap-8'>
              {!current || current.children?.length === 0 ? (
                <div className='text-gray-500'>Нет подкатегорий</div>
              ) : (
                current.children!.map((sub) => (
                  <div key={sub.id}>
                    <div className='font-bold mb-2'>{sub.name}</div>
                    <ul className='space-y-1'>
                      {sub.children && sub.children.length > 0 ? (
                        sub.children.map((child) => (
                          <NestedList key={child.id} node={child} />
                        ))
                      ) : (
                        <li className='text-gray-500'>Нет дочерних</li>
                      )}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
