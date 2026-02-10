'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { Eye, EyeClosed, Heart, Scale, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useFavoriteStore } from '@/store/favoriteStore';

interface Props {
  className?: string;
  id: number;
  name: string;
  imageUrl?: string;
  price: number;
  discount?: number;
  variantId?: number;
}

export const ProductCard: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  id,
  price,
  discount,
  variantId = 1,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite);
  const isInWishlist = useFavoriteStore((state) =>
    state.items.some((item) => item.id === id),
  );
  const isAddedToCart = useCartStore((state) =>
    state.items.some((item) => item.id === id),
  );
  return (
    <div
      className={cn(
        className,
        'group border bg-gray-dark-medium shadow-sm flex flex-col  max-w-[226px] gap-2 min-h-[380px]   rounded-2xl px-[8px] py-3 transition-all duration-300  hover:shadow-lg hover:border-gray-medium   ',
      )}
    >
      {/* Верхняя часть с картинкой и кнопкой "Быстрый просмотр" */}
      <div className='relative bg-white rounded-2xl overflow-hidden mb-2 min-h-[210px] flex items-center justify-center'>
        <Link href={`http://localhost:3000/product/${id}`}>
          <img src={imageUrl} alt={name} className='rounded-lg' />
        </Link>
        <div
          className={cn(
            'cursor-pointer p-1 absolute top-2 right-2 bg-gray-dark-medium  rounded-[5px]    ',
            isInWishlist ? 'bg-green' : '',
          )}
        >
          <Heart
            className={cn('cursor-pointer   ', isInWishlist ? 'bg-green' : '')}
            color={isInWishlist ? 'black' : 'white'}
            height={20}
            width={20}
            onClick={() =>
              toggleFavorite({
                id,
                name,
                price,
                imageUrl,
              })
            }
          />
        </div>
      </div>

      {/* Название товара */}
      <Link
        href={`http://localhost:3000/product/${id}`}
        className='text-white font-semibold text-[16px] cursor-pointer hover:text-red-600 transition-colors duration-200'
      >
        {name}
      </Link>

      <h2 className='text-[12px] text-gray  '>
        6.3 | 48 Мп | 12 ГБ | Single SIM
      </h2>
      {/* Нижняя часть карточки Кэшбэк 825 лей */}
      <div className='mt-auto flex flex-col gap-2 px-2'>
        <div className='flex items-center justify-between gap-2'>
          <p className='text-[18px] text-white font-bold'>{price} лей</p>
          <Button
            className={cn(
              '       rounded-[11px] bg-green cursor-pointer',
              'hover:bg-orange hover:border-primary transition-colors duration-300',
              isAddedToCart ? 'bg-orange  ' : '',
            )}
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                imageUrl,
                variantId,
              })
            }
          >
            <ShoppingCart color={'black'} height={20} width={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
