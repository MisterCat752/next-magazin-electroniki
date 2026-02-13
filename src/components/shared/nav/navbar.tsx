'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useFavoriteStore } from '@/store/favoriteStore';
import { useSession } from 'next-auth/react';
import { Container } from '@/components/layout/container';
import { CatalogMenu } from './catalog-menu';
import { SearchInput } from './search';
import { Login } from '../auth/login';
import { CartDropDown } from './cart-drop-down';

interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  const favorites = useFavoriteStore((state) => state.items);
  const { data: session, status } = useSession();

  return (
    <div className={cn(className, 'bg-gray-dark fixed top-0 w-full z-[122]')}>
      <Container>
        <div className='py-5 flex gap-2 justify-between items-center'>
          {/* Логотип + Каталог */}
          <div className='flex gap-4 items-center'>
            <Link href='/' className='flex gap-2 items-center'>
              <img src='/clicon.png' alt='clicon' />
            </Link>
            <div className='hidden md:block'>
              <CatalogMenu />
            </div>
          </div>

          {/* Поиск */}
          <div className='max-w-[646px] w-full relative'>
            <SearchInput />
          </div>

          {/* Иконки и вход */}
          <div className='text-white hidden lg:flex gap-4 items-center'>
            <CartDropDown />

            <Link
              href={
                status === 'authenticated' ? '/profile/favorites' : '/wishlist'
              }
            >
              <div className='relative'>
                <Heart className='text-white hover:text-green cursor-pointer' />
                {favorites.length > 0 && (
                  <div className='absolute -top-2 -right-3 bg-green w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold text-black'>
                    {favorites.length}
                  </div>
                )}
              </div>
            </Link>

            <Login />
          </div>
        </div>
      </Container>
    </div>
  );
};
