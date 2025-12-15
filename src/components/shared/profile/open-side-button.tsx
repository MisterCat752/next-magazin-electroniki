'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useFilterStore } from '@/store/filterStore';

interface Props {
  className?: string;
}

export const OpenSideButton: React.FC<Props> = ({ className }) => {
  const toggleProfile = useFilterStore((state) => state.toggleProfile);

  return (
    <div
      onClick={toggleProfile}
      className={cn(
        className,
        'px-4 py-5 block lg:hidden border border-green text-white '
      )}
    >
      Open Side
    </div>
  );
};
