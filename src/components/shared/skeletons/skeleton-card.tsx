import React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui';

interface Props {
  className?: string;
}

export const SkeletonCard: React.FC<Props> = ({ className }) => {
  return (
    <div className='relative w-full h-[360px] bg-gray-dark rounded-2xl overflow-hidden'>
      <Skeleton className='w-full h-42 rounded-t-2xl' />
      <div className='p-3 flex flex-col gap-2'>
        <Skeleton className='h-4 w-[60%]' />
        <Skeleton className='h-4 w-[40%]' />
        <Skeleton className='h-6 w-[80%]' />
      </div>
    </div>
  );
};
