'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Link from 'next/link';
import { NestedList } from './nested-list';
import { reverseSafe } from '@/lib/reverse';
import { cn } from '@/lib/utils';

import type { Category } from '@/hooks/useCatalogMenu';

type CatalogMenuMobileProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
  mobileStack: Category | null;
  setMobileStack: (cat: Category | null) => void;
  categories: Category[];
};

export const CatalogMenuMobile: React.FC<CatalogMenuMobileProps> = ({
  open,
  setOpen,
  mobileStack,
  setMobileStack,
  categories,
}) => {
  return createPortal(
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

          {/* content */}
          <div className='flex-1 overflow-y-auto'>
            {!mobileStack &&
              reverseSafe(categories).map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setMobileStack(cat)}
                  className='flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray transition'
                >
                  <span className='text-white'>{cat.name}</span>
                </div>
              ))}

            {mobileStack &&
              reverseSafe(mobileStack.children).map((sub) => (
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
  );
};
