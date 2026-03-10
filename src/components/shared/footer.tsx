'use client';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { CatalogMenu } from './nav/catalog-menu';
import { Login } from './auth/login';
import { useCartStore } from '@/store/cartStore';
import { useSession } from 'next-auth/react';
import { useFavoriteStore } from '@/store/favoriteStore';
import { OpenSideButton } from './profile/open-side-button';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
export function Footer() {
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const favorites = useFavoriteStore((state) => state.items);
  const { data: session, status } = useSession();
  const isProfile =
    pathname.startsWith('/profile') || pathname.startsWith('/category');
  return (
    <footer className='bg-gray-dark-medium relative text-white w-full py-12'>
      <footer className='fixed bottom-0 left-0 w-full bg-black text-white lg:hidden'>
        <nav className='flex    justify-around items-center py-4'>
          <div className='mt-2'>{isProfile && <OpenSideButton />}</div>
          <div className='relative flex md:hidden   '>
            <CatalogMenu placeClassName='bottom-[70px]   text-black w-[500px]' />
          </div>

          <Link
            href={
              status === 'authenticated' ? '/profile/favorites' : '/wishlist'
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
          <Link href={'/cart'}>
            <div className=' relative'>
              <ShoppingCart className='text-white hover:text-green cursor-pointer' />

              {items.length > 0 && (
                <div className=' absolute -top-2 -right-3 bg-green w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold text-black'>
                  {items.length}
                </div>
              )}
            </div>
          </Link>
          <Login />
        </nav>
      </footer>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10'>
        {/* Логотип и описание */}
        <div className='flex flex-col items-start md:items-start gap-4'>
          <div className='flex items-center gap-3'>
            <Image
              src='/clicon.png'
              alt='Clicon Electro'
              width={40}
              height={40}
            />
            <span className='text-2xl font-bold'>Clicon Electro</span>
          </div>
          <p className='text-gray-300 max-w-xs'>
            Modern electronics store. Laptops, smartphones, gadgets, and
            accessories at best prices.
          </p>
        </div>

        {/* Контакты */}
        <div className='flex flex-col gap-2 text-gray-300'>
          <h3 className='font-semibold text-lg'>Contacts</h3>
          <div>
            📧{' '}
            <a href='mailto:nikitareznov@gmail.com' className='hover:underline'>
              nikitareznov@gmail.com
            </a>
          </div>
          <div className='flex gap-1'>
            <img
              className='max-w-[15px]'
              src='https://www.svgrepo.com/show/452115/telegram.svg'
              alt=''
            />
            <a href='https://t.me/Nigredo574' className='hover:underline'>
              @Nigredo574
            </a>
          </div>
          <div>📍 Chisinau, Moldova</div>
        </div>
      </div>

      {/* Копирайт */}
      <div className='mt-10 border-t border-gray-800 pt-6 text-center text-main text-sm'>
        © {new Date().getFullYear()} Clicon Electro. All rights reserved.
        <br />
        <Link
          href='https://github.com/MisterCat752'
          className='hover:underline'
        >
          GitHub Repository
        </Link>
      </div>
    </footer>
  );
}
