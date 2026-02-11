'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useFilterStore } from '@/store/filterStore';
import { cn } from '@/lib/utils';
import { LucideMenu, LucideUser } from 'lucide-react';

interface Props {
  className?: string;
}

export const OpenSideButton: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const toggleProfile = useFilterStore((s) => s.toggleProfile);
  const toggleMobileFilters = useFilterStore((s) => s.toggleMobileFilters);

  // Определяем тип кнопки по роуту
  const handleClick = () => {
    if (pathname.startsWith('/profile')) {
      toggleProfile();
    } else {
      toggleMobileFilters();
    }
  };

  // Иконка меняем тоже по маршруту
  const icon = pathname.startsWith('/profile') ? (
    <LucideMenu size={20} />
  ) : (
    <LucideMenu size={20} />
  );

  return (
    <button
      onClick={handleClick}
      className={cn(
        className,
        'flex flex-col items-center gap-2   rounded-xl   text-white lg:hidden',
      )}
    >
      {icon}
      <span>{pathname.startsWith('/profile') ? ' ' : ' '}</span>
    </button>
  );
};
