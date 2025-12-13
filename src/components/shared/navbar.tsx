'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../layout/container';
import Link from 'next/link';
import { Heart, Search, ShoppingCart, Trash, User } from 'lucide-react';
import { CatalogMenu } from './catalog-menu';
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
import { Login } from './login';
import { SearchInput } from './nav/search';
import { useCartStore } from '@/store/cartStore';
import { CartNavBAr } from './nav/cart-navBar';
import { useSession } from 'next-auth/react';
import { useFavoriteStore } from '@/store/favoriteStore';

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
      className={cn(className, 'bg-gray-dark  fixed top-0 w-full   z-[100] ')}
    >
      <Container>
        <div className='py-5 flex justify-between items-center'>
          <Link href='/' className='flex gap-2 items-center'>
            <img src='clicon.png' alt='clicon' />
            <h2 className='text-white uppercase font-bold text-3xl'>CLICON</h2>
          </Link>
          <div>
            <CatalogMenu />
          </div>
          <div className='max-w-[646px] w-full relative'>
            <SearchInput />
            {/* <Input className='' />
            <Search className='absolute top-2 right-2' width={20} height={20} /> */}
          </div>
          <div className='text-white flex gap-4 items-center'>
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
                {items.map((item) => (
                  <div
                    key={item.id}
                    className='  bg-gray-medium rounded-[14px] gap-3 relative p-3 mb-2'
                  >
                    <CartNavBAr
                      name={item.name}
                      imageUrl={item.imageUrl}
                      price={item.price}
                      id={item.id}
                      count={item.count}
                    />
                  </div>
                ))}

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
