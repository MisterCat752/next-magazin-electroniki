import React from 'react';
import { Trash, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';

interface Props {
  className?: string;
  name: string;
  imageUrl?: string;
  price: number;
  id: number;
  count: number;
}

export const CartNavBarItem: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  price,
  id,
  count,
}) => {
  const remove = useCartStore((s) => s.removeFromCart);
  const increase = useCartStore((s) => s.increaseCount);
  const decrease = useCartStore((s) => s.decreaseCount);

  return (
    <div className={cn(className, 'relative flex gap-3  rounded-xl p-3')}>
      {/* Image */}
      <div className='bg-white rounded-lg p-2 w-[90px] h-[90px] flex items-center justify-center'>
        <img src={imageUrl} alt={name} className='object-contain max-h-full' />
      </div>

      {/* Info */}
      <div className='flex flex-col flex-1 gap-1'>
        <h2 className='text-white text-sm font-medium leading-tight'>{name}</h2>

        <p className='text-gray-400 text-xs'>12 GB / 256 GB / Graygreen</p>

        {/* Counter */}
        <div className='flex items-center gap-2 mt-2'>
          <button
            onClick={() => decrease(id)}
            className='w-7 h-7 rounded-md bg-gray-700 hover:bg-gray-600 flex items-center justify-center'
          >
            <Minus size={14} className='text-white' />
          </button>

          <span className='text-white text-sm w-6 text-center'>{count}</span>

          <button
            onClick={() => increase(id)}
            className='w-7 h-7 rounded-md bg-gray-700 hover:bg-gray-600 flex items-center justify-center'
          >
            <Plus size={14} className='text-white' />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className='flex flex-col items-end justify-between'>
        <span className='text-white font-semibold text-sm'>
          {price * count} $
        </span>

        <button
          onClick={() => remove(id)}
          className='text-gray-500 hover:text-red-500 transition'
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};
