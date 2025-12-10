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

interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, 'bg-blue fixed top-0 w-full z-10 ')}>
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
                <ShoppingCart />
              </PopoverTrigger>
              <PopoverContent className='  mt-7 w-full bg-white max-w-[520px]'>
                <div className='flex items-center gap-3 w-full border-b border-gray-500 p-2 '>
                  <div className='border border-gray p-2 max-w-[115px] rounded-'>
                    <img src='/samsung-25-fe.webp' alt='' />
                  </div>
                  <div>
                    <h2 className='text-[16px] text-black'>samsung 25 fe</h2>
                    <p className='text-[15px] text-gray-600'>
                      12 GB / 256 GB / Graygreen
                    </p>
                    <p className='text-[18px] font-medium text-black'>
                      33 199 лей
                    </p>
                  </div>
                  <div>
                    <Trash />
                  </div>
                </div>
                <div className='mt-10 flex flex-col items-center justify-center gap-3'>
                  <p className='text-black'>
                    Итого:<span className='font-bold'> 33999 лей</span>
                  </p>
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

            <Link href='/wishlist'>
              <Heart />
            </Link>
            <Login />
          </div>
        </div>
      </Container>
    </div>
  );
};
