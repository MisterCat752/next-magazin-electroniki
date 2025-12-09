import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { Eye, EyeClosed, Heart, Scale } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
  id: number;
  name: string;
  image?: string;
  price: number;
  discount?: number;
}

export const ProductCard: React.FC<Props> = ({
  className,
  name,
  image,
  id,
  price,
  discount,
}) => {
  return (
    <div
      className={cn(
        className,
        'group border border-gray-200 shadow-sm flex flex-col max-w-[250px] gap-2 min-h-[470px] rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:border-gray-300'
      )}
    >
      {/* Верхняя часть с картинкой и кнопкой "Быстрый просмотр" */}
      <div className='relative'>
        <Link href='product/dsdsds'>
          <img src={image} alt={name} className='rounded-lg' />
        </Link>
        <button
          className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    flex items-center gap-2 bg-white/50 p-3 rounded-sm opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
        >
          <span className='relative flex items-center'>
            {/* Закрытый глаз */}
            <EyeClosed
              className='text-primary opacity-100 transition-opacity duration-[1.4s] group-hover:opacity-0'
              height={20}
              width={20}
            />
            {/* Открытый глаз с задержкой */}
            <Eye
              className='text-primary absolute top-0 left-0 opacity-0 transition-opacity duration-[1.4s] delay-150 group-hover:opacity-100'
              height={20}
              width={20}
            />
          </span>
          <p className='text-primary ml-1'>Быстрый просмотр</p>
        </button>
      </div>

      {/* Название товара */}
      <Link
        href='product/dsdsdsd'
        className='text-black font-semibold text-[16px] cursor-pointer hover:text-red-600 transition-colors duration-200'
      >
        {name}
      </Link>

      {/* Нижняя часть карточки */}
      <div className='mt-auto flex flex-col gap-2'>
        <p className='font-black text-black'>{price} лей</p>
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            className='flex-1 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white'
          >
            В корзину
          </Button>
          <Scale className='cursor-pointer' height={20} width={20} />
          <Heart className='cursor-pointer' height={20} width={20} />
        </div>
      </div>
    </div>
  );
};
