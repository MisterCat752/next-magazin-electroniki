import React from 'react';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/shared';
import { Container } from '@/components/layout/container';
import { useFavoriteStore } from '@/store/favoriteStore';
import { WishLIshContent } from '@/components/shared/wishlist/wishLish-content';

interface Props {
  className?: string;
}

export default async function Page({ className }: Props) {
  return (
    <div className={cn(className, 'bg-[#000] min-h-[100vh] pt-30 pb-30')}>
      <Container className=''>
        <h1 className='text-[24px] text-white font-semibold'>
          Список избранных
        </h1>
        <WishLIshContent />
      </Container>
    </div>
  );
}
