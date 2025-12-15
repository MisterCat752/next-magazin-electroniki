import { CategoryCard, Slider } from '@/components/shared';
import { categories } from '@/data';
import Image from 'next/image';
import { ProductsSection } from './product-section';

export default function HomeContent() {
  const images = ['/iphone.webp', '/iphone.webp', '/xiamo.webp'];

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
      <ProductsSection
        title='Последние товары'
        category='samsung'
        sort='createdAt_desc'
        queryKeySuffix='latest'
      />

      {/* Категории */}
      <h2 className='text-center text-2xl font-black text-white'>Categories</h2>
      <Slider itemClassName='flex-[0_0_20%] max-w-[200px] mr-2'>
        {categories.map((c) => (
          <CategoryCard key={c.id} {...c} />
        ))}
      </Slider>

      {/* Другие секции */}
      <ProductsSection
        title='Самсунг'
        category='samsung'
        queryKeySuffix='samsung'
      />

      <ProductsSection
        title='Apple'
        category='apple-phones'
        queryKeySuffix='apple'
      />
    </main>
  );
}
