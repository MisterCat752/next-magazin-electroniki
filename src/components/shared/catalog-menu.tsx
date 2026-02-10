'use client';

import React, { useState, useEffect } from 'react';
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

export function CatalogMenu({ placeClassName }: ClassNamePosition) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000,
    enabled: open,
  });

  useEffect(() => {
    if (open && categories.length > 0 && !hovered) {
      setHovered(categories[0].id);
    }
  }, [open, categories, hovered]);

  const current = categories.find((c) => c.id === hovered) ?? null;

  const NestedList: React.FC<{ node: Category }> = ({ node }) => (
    <li>
      <Link
        href={`/category/${node.slug}`}
        className='cursor-pointer text-white hover:text-green transition duration-200'
        onClick={() => setOpen(false)}
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

  return (
    <>
      {/* Кнопка */}
      <button
        className='flex items-center gap-2 px-4 py-2 bg-gray-medium text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <span className='font-bold'>Каталог</span>
      </button>

      {/* ================= DESKTOP ================= */}
      {open && (
        <div
          className={cn(
            'hidden md:flex absolute inset-x-0 mx-auto bg-gray-dark max-w-[1200px] w-full h-[480px] shadow-2xl z-30',
            placeClassName || 'top-[84px]',
          )}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Левые категории */}
          <div className='max-w-[320px] border-r bg-gray-dark border-gray-300 h-full overflow-y-auto'>
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
                    ? 'bg-gray border-l-4 border-[#043652] font-bold'
                    : 'hover:bg-gray'
                }`}
              >
                <span>{IconBySlug(cat.slug)}</span>
                <span className='text-white font-bold text-[14px]'>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          {/* Подкатегории */}
          <div className='flex-1 px-7 py-7 overflow-y-auto grid grid-cols-3 gap-8'>
            {!current || current.children?.length === 0 ? (
              <div />
            ) : (
              current?.children?.map((sub) => (
                <div key={sub.id}>
                  <Link
                    href={`/category/${sub.slug}`}
                    className='font-bold mb-2 text-green'
                  >
                    {sub.name}
                  </Link>

                  <ul className='space-y-1'>
                    {sub.children?.map((child) => (
                      <NestedList key={child.id} node={child} />
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ================= MOBILE ================= */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 transition',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-black/50 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-80 bg-gray-dark shadow-2xl transition-transform duration-300',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className='h-full flex flex-col'>
            {/* категории */}
            <div className='border-b border-gray-600 p-4 font-bold text-white'>
              Каталог
            </div>

            <div className='overflow-y-auto'>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setHovered(cat.id)}
                  className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition
                  ${
                    hovered === cat.id
                      ? 'bg-gray border-l-4 border-[#043652] font-bold'
                      : ''
                  }`}
                >
                  <span>{IconBySlug(cat.slug)}</span>
                  <span className='text-white text-sm'>{cat.name}</span>
                </div>
              ))}
            </div>

            {/* подкатегории */}
            <div className='flex-1 overflow-y-auto p-4 border-t border-gray-600'>
              {!current || current.children?.length === 0 ? (
                <div />
              ) : (
                current?.children?.map((sub) => (
                  <div key={sub.id} className='mb-4'>
                    <Link
                      href={`/category/${sub.slug}`}
                      className='font-bold mb-2 text-green block'
                      onClick={() => setOpen(false)}
                    >
                      {sub.name}
                    </Link>

                    <ul className='space-y-1'>
                      {sub.children?.map((child) => (
                        <NestedList key={child.id} node={child} />
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
