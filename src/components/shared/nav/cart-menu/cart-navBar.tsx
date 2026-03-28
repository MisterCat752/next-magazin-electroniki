import React from 'react';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface Props {
  className?: string;
  name: string;
  imageUrl?: string;
  price?: number;
  id: number;
  count: number;
}

export const CartNavBAr: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  price,
  id,
  count,
}) => {
  const remove = useCartStore((state) => state.removeFromCart);
  return (
    <div className={cn(className, 'flex items-center  gap-2  w-full   p-2 ')}>
      <div className=' bg-white rounded-[14px] p-2 max-w-[115px] rounded-'>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <h2 className='text-[16px] text-white'>{name}</h2>
        <p className='text-[15px] text-gray '>12 GB / 256 GB / Graygreen</p>
        <p>{count}</p>
        <p className='text-[18px] font-medium text-white'>{price}</p>
      </div>
      <div
        onClick={() => remove(id)}
        className='absolute top-2 right-3 hover:text-red    cursor-pointer'
      >
        <Trash className='text-gray-dark hover:text-red-600 transition-all duration-[0.3s]' />
      </div>
    </div>
  );
};
