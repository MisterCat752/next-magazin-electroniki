'use client';

import { ProductCard, CategoryCard, Slider } from '@/components/shared';
import { categories } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/api/get-products';
import type { IProduct } from '@/types/products.types';

export default function HomeContent() {
  const images = ['/iphone.webp', '/iphone.webp', '/xiamo.webp'];

  // Последние товары (новинки)
  const { data: latestProducts, isLoading: loadingLatest } = useQuery({
    queryKey: ['products', 'latest'],
    queryFn: () =>
      getProducts({
        category: 'samsung',
        sort: 'createdAt_desc', // сортировка по дате добавления
        limit: 8,
        page: 1,
      }),
    staleTime: 5 * 60 * 1000, // кэшируем 5 минут
  });

  // Товары категории Samsung
  const { data: samsungProducts, isLoading: loadingSamsung } = useQuery({
    queryKey: ['products', 'samsung'],
    queryFn: () =>
      getProducts({
        category: 'samsung',
        limit: 8,
      }),
    staleTime: 5 * 60 * 1000,
  });

  // Товары категории Computers
  const { data: computersProducts, isLoading: loadingComputers } = useQuery({
    queryKey: ['products', 'apple'],
    queryFn: () =>
      getProducts({
        category: 'apple-phones',
        limit: 8,
      }),
    staleTime: 5 * 60 * 1000,
  });

  return (
    <main className='p-6 space-y-10 bg-black'>
      {/* Фото-слайдер */}
      <h2 className='text-xl font-bold mt-20'>Фото-слайдер</h2>
      <div className='bg-gray-dark-medium p-3 rounded-2xl'>
        <Slider
          options={{ loop: true }}
          itemClassName='relative flex-[0_0_100%] rounded-2xl h-[400px] mr-4'
        >
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`slide-${i}`}
              fill
              className='object-cover rounded-2xl'
            />
          ))}
        </Slider>
      </div>

      {/* Последние товары */}
      <h2 className='text-xl text-white font-bold'>Последние товары</h2>
      {loadingLatest ? (
        <p className='text-white'>Загрузка...</p>
      ) : (
        <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
          {latestProducts?.products?.map((p: IProduct) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </Slider>
      )}

      {/* Категории */}
      <h2 className='text-center text-2xl font-black text-white'>Categories</h2>
      <Slider itemClassName='flex-[0_0_20%] max-w-[200px] mr-2'>
        {categories.map((c) => (
          <CategoryCard key={c.id} {...c} />
        ))}
      </Slider>

      {/* Товары Samsung */}
      <h2 className='text-xl font-bold'>Самсунг</h2>
      {loadingSamsung ? (
        <p className='text-white'>Загрузка...</p>
      ) : (
        <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
          {samsungProducts?.products.map((p: IProduct) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </Slider>
      )}

      {/* Товары Компьютеры */}
      <h2 className='  text-white text-2xl font-bold'>apple</h2>
      {loadingComputers ? (
        <p className='text-white'>Загрузка...</p>
      ) : (
        <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
          {computersProducts?.products.map((p: IProduct) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </Slider>
      )}
    </main>
  );
}
