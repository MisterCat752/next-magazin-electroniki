import React from 'react';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui';

interface Props {
  className?: string;
}

export const CartProduct: React.FC<Props> = ({ className }) => {
  return (
    <div className='w-full flex gap-2 relative bg-gray-dark p-13  rounded-2xl'>
      <div className='absolute cursor-pointer hover:bg-[#198754] top-4 right-4 bg-gray-medium p-2 rounded-[13px]'>
        <Trash className='text-gray' />
      </div>
      <div className='max-h-[209px] max-w-[209px]'>
        <img src='/samsung-25-fe.webp' alt='' />
      </div>
      <div className=''>
        <p className='text-[16px] text-white font-semibold'>
          Samsung Galaxy S25 Edge 256 ГБ Черный Jet
        </p>
        <p className='text-[14px] mt-2 text-white font-semibold'>
          6.7" | 200 МП | 12 ГБ | Dual SIM
        </p>
        <p className='text-[24px] mt-2 text-white font-semibold'>15 699 лей</p>
        <div className='flex gap-3 mt-7 items-center'>
          <Button className='p-3 text-[24px] text-gray-dark pb-4 bg-gray-medium'>
            {' '}
            -{' '}
          </Button>
          <p className='text-[24px]   text-white font-semibold'>1</p>
          <Button className='p-3 text-[24px] text-gray-dark pb-3 bg-gray-medium'>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
