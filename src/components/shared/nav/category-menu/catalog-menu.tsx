'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChartBarStacked } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useCatalogMenu } from '@/hooks/useCatalogMenu';
import { CategoryList } from './category-list';
import { SubCategories } from './subcategory';
import { useClickAway } from 'react-use';
import { CatalogMenuMobile } from './catalog-menu-mobile';

type ClassNamePosition = {
  placeClassName?: string;
};

export function CatalogMenu({ placeClassName }: ClassNamePosition) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    categories,
    current,
    hovered,
    setHovered,
    mobileStack,
    setMobileStack,
    isLoading,
  } = useCatalogMenu(open);

  // Click-away для десктопа
  useClickAway(menuRef, (event) => {
    if (
      open &&
      window.innerWidth >= 768 &&
      !buttonRef.current?.contains(event.target as Node)
    ) {
      setOpen(false);
      setMobileStack(null);
    }
  });

  useEffect(() => setMounted(true), []);

  // Закрытие меню при смене пути
  useEffect(() => {
    if (open) {
      setOpen(false);
      setMobileStack(null);
    }
  }, [pathname]);

  return (
    <>
      {/* кнопка десктоп */}
      <button
        ref={buttonRef}
        className='hidden md:flex items-center gap-2 px-4 py-2 bg-gray-medium text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <span className='hidden font-bold lg:flex'>Category</span>
        <span className='flex font-bold lg:hidden'>
          <ChartBarStacked color='white' />
        </span>
      </button>

      {/* кнопка мобилка */}
      <button
        className='flex md:hidden items-center gap-2 px-4 py-2 text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <ChartBarStacked color='white' />
      </button>

      {/* DESKTOP */}
      {open && (
        <div
          ref={menuRef}
          className={cn(
            'hidden md:flex absolute inset-x-0 mx-auto bg-gray-dark max-w-[1200px] w-full h-[480px] shadow-2xl z-[888]',
            placeClassName || 'top-[84px]',
          )}
        >
          <CategoryList
            categories={categories}
            hovered={hovered}
            setHovered={setHovered}
          />
          <div className='flex-1 px-7 py-7 overflow-y-auto grid grid-cols-3 gap-8'>
            <SubCategories current={current} />
          </div>
        </div>
      )}

      {/* MOBILE */}
      {mounted && (
        <CatalogMenuMobile
          open={open}
          setOpen={setOpen}
          mobileStack={mobileStack}
          setMobileStack={setMobileStack}
          categories={categories}
        />
      )}
    </>
  );
}
