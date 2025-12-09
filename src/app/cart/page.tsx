import React from 'react';
import { cn } from '@/lib/utils';
import { CartView } from '@/components/shared/cart';

interface Props {
  className?: string;
}

export default async function Page({ className }: Props) {
  return (
    <div className={cn(className, 'mt-20')}>
      <CartView />
    </div>
  );
}
