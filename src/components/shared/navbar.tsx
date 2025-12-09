import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../layout/container';
import Link from 'next/link';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import { CatalogMenu } from './catalog-menu';
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';

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
            <Input className='' />
            <Search className='absolute top-2 right-2' width={20} height={20} />
          </div>
          <div className='text-white flex gap-4 items-center'>
            <Popover>
              <PopoverTrigger>
                {' '}
                <ShoppingCart />
              </PopoverTrigger>
              <PopoverContent className='bg-gray w-35'>
                <div className=' '>Place content for the popover here.</div>
              </PopoverContent>
            </Popover>

            <Heart />
            <User />
          </div>
        </div>
      </Container>
    </div>
  );
};
