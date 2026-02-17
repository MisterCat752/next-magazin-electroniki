'use client';

import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChartBarStacked, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation'; // ⭐ добавили

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

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch('/api/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function CatalogMenu({ placeClassName }: ClassNamePosition) {
  const [mounted, setMounted] = useState(false);
  const [mobileStack, setMobileStack] = useState<Category | null>(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const pathname = usePathname(); // ⭐ добавили

  // ⭐ закрытие при переходе по роуту
  useEffect(() => {
    if (open) {
      setOpen(false);
      setMobileStack(null);
    }
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* Кнопка десктоп */}
      <button
        className='hidden md:flex items-center gap-2 px-4 py-2 bg-gray-medium text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <span className='hidden font-bold lg:flex'>Каталог</span>
        <span className='flex font-bold lg:hidden'>
          <ChartBarStacked color='white' />
        </span>
      </button>

      {/* Кнопка мобилка */}
      <button
        className='flex md:hidden items-center gap-2 px-4 py-2 text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <ChartBarStacked color='white' />
      </button>

      {/* ================= DESKTOP ================= */}
      {open && (
        <div
          className={cn(
            'hidden md:flex absolute inset-x-0 mx-auto bg-gray-dark max-w-[1200px] w-full h-[480px] shadow-2xl z-[888]',
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
      {mounted &&
        createPortal(
          <div
            className={cn(
              'md:hidden fixed inset-0 z-[888] transition',
              open ? 'pointer-events-auto' : 'pointer-events-none',
            )}
          >
            {/* overlay */}
            <div
              className={cn(
                'absolute inset-0 bg-black/50 transition-opacity',
                open ? 'opacity-100' : 'opacity-0',
              )}
              onClick={() => {
                setOpen(false);
                setMobileStack(null);
              }}
            />

            {/* panel */}
            <div
              className={cn(
                'absolute left-0 top-0 h-full w-full bg-gray-dark shadow-2xl transition-transform duration-300',
                open ? 'translate-x-0' : '-translate-x-full',
              )}
            >
              <div className='h-full flex flex-col'>
                {/* header */}
                <div className='flex justify-between items-center gap-3 border-b border-gray-600 p-4 font-bold text-white'>
                  {mobileStack && (
                    <button
                      onClick={() => setMobileStack(null)}
                      className='text-green'
                    >
                      ← Назад
                    </button>
                  )}
                  <span>{mobileStack ? mobileStack.name : 'Каталог'}</span>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setMobileStack(null);
                    }}
                  >
                    <X />
                  </button>
                </div>

                <div className='flex-1 overflow-y-auto'>
                  {!mobileStack &&
                    categories.map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => setMobileStack(cat)}
                        className='flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray transition'
                      >
                        <span className='text-white'>{cat.name}</span>
                      </div>
                    ))}

                  {mobileStack &&
                    mobileStack.children?.map((sub) => (
                      <div key={sub.id} className='px-5 py-3'>
                        <Link
                          href={`/category/${sub.slug}`}
                          className='font-bold text-green block mb-2'
                        >
                          {sub.name}
                        </Link>

                        <ul className='space-y-1 ml-3'>
                          {sub.children?.map((child) => (
                            <NestedList key={child.id} node={child} />
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
