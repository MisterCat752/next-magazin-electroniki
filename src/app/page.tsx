import { ProductCard, CategoryCard, Slider } from '@/components/shared';
import { categories, products } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const images = ['/iphone.webp', '/iphone.webp', '/xiamo.webp'];

  return (
    <main className='p-6 space-y-10'>
      <h2 className='text-xl font-bold mt-20'>Фото-слайдер</h2>
      <Slider
        options={{ loop: true }}
        itemClassName='relative flex-[0_0_100%] h-[400px] mr-4'
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
      <h2 className='text-xl font-bold'>Слайдер товаров</h2>
      <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Slider>

      <h2 className='text-center text-2xl font-black text-black'>Categories</h2>
      <Slider itemClassName='flex-[0_0_20%] max-w-[200px] mr-2'>
        {categories.map((c) => (
          <CategoryCard key={c.id} {...c} />
        ))}
      </Slider>

      <h2 className='text-xl font-bold'>Хиты продаж</h2>
      <div className='flex gap-2'>
        <div className='max-w-[266px] max-h-[256px]'>
          <div className='bg-red-600 text-white p-3'>
            <h2 className=' text-3xl font-bold mb-2'>Лучшие из Лучших</h2>
            <p className='text-[16px] mb-3'>
              Лучшие товары по суперценам! Успей купить хиты продаж в нашем
              магазине!
            </p>
            <Link href='/' className='text-[16px] mb-3 '>
              {' '}
              Смотреть все
            </Link>
          </div>
          <div className='h-full w-full bg-black'></div>
        </div>
        <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </Slider>
      </div>

      <h2 className='text-xl font-bold mt-[120px]'>Новинки</h2>
      <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Slider>
    </main>
  );
}
