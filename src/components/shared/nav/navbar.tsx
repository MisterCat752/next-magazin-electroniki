'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Heart, Search, ShoppingCart, Trash, User } from 'lucide-react';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { SearchInput } from './search';
import { useCartStore } from '@/store/cartStore';
import { CartNavBAr } from './cart-navBar';
import { useSession } from 'next-auth/react';
import { useFavoriteStore } from '@/store/favoriteStore';
import { CartNavBarItem } from './CartNavBarItem';
import { Login } from '../auth/login';
import { Container } from '@/components/layout/container';
import { CatalogMenu } from './catalog-menu';
interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  const items = useCartStore((state) => state.items);
  const favorites = useFavoriteStore((state) => state.items);
  const total = useCartStore((s) => s.totalPrice());
  const { data: session, status } = useSession();
  return (
    <div
      className={cn(className, 'bg-gray-dark  fixed top-0 w-full   z-[12] ')}
    >
      <Container>
        <div className='py-5 flex gap-2  justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <Link href='/' className='flex gap-2 items-center'>
              <img className=' ' src='/clicon.png' alt='clicon' />
            </Link>
            <div className='hidden  sm:block'>
              <CatalogMenu />
            </div>
          </div>
          <div className='max-w-[646px] w-full relative'>
            <SearchInput />
            {/* <Input className='' />
            <Search className='absolute top-2 right-2' width={20} height={20} /> */}
          </div>
          <div className='text-white  hidden lg:flex gap-4 items-center'>
            <Popover>
              <PopoverTrigger>
                {' '}
                <div className=' relative'>
                  <ShoppingCart className='text-white hover:text-green cursor-pointer' />
                  {items.length > 0 && (
                    <div className=' absolute -top-2 -right-3 bg-green w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold text-black'>
                      {items.length}
                    </div>
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent className='  mt-7 w-full bg-gray-dark max-w-[520px]'>
                {items.length === 0 && (
                  <div className='flex items-center justify-center h-[200px] text-gray-400 text-sm'>
                    🛒 Корзина пуста
                  </div>
                )}{' '}
                <div
                  className='
                        h-[360px]
                        overflow-y-auto
                        flex flex-col
                        gap-2
                        pr-1
                        scrollbar-thin
                        scrollbar-thumb-gray-700
                      '
                >
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className='  bg-gray-medium rounded-[14px] gap-3 relative p-3 mb-2'
                    >
                      <CartNavBarItem key={item.id} {...item} />
                    </div>
                  ))}
                </div>
                <div className='mt-10 flex flex-col items-center justify-center gap-3'>
                  <div className='text-white text-[18px] font-medium'>
                    <p>Итого: {total} MDL</p>
                  </div>
                  <Link href='/cart'>
                    <Button
                      variant='outline'
                      className='cursor-pointer hover:bg-gray-500 transition-all delay-75'
                    >
                      в корзину
                    </Button>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            <Link
              href={
                status === 'authenticated' ? 'profile/favorites' : '/wishlist'
              }
            >
              <div className=' relative'>
                <Heart className='text-white hover:text-green cursor-pointer' />

                {favorites.length > 0 && (
                  <div className=' absolute -top-2 -right-3 bg-green w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold text-black'>
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
