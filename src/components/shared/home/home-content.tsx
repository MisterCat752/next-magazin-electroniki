import { CategoryCard, Slider } from '@/components/shared';
import { categories, HomeSliderImages } from '@/data';
import Image from 'next/image';
import { ProductsSection } from './product-section';

export default function HomeContent() {
  return (
    <main className='p-6 space-y-10 bg-black'>
      {/* Фото-слайдер */}
      <h2 className='text-xl font-bold mt-20'>Фото-слайдер</h2>
      <div className='bg-gray-dark-medium max-w-[1450px] mx-auto p-3 rounded-2xl'>
        <Slider
          options={{ loop: true }}
          itemClassName='
      relative w-full  mr-4 rounded-2xl
      h-[180px] 
      sm:h-[260px] 
      md:h-[360px] 
      lg:h-[500px]
    '
        >
          {HomeSliderImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className='w-full h-full object-cover rounded-2xl'
            />
          ))}
        </Slider>
      </div>
      <div className='mx-auto max-w-[1450px]'>
        {/* Последние товары */}
        <ProductsSection
          title='Последние товары'
          category='samsung'
          sort='createdAt_desc'
          queryKeySuffix='latest'
        />
        {/* Категории */}
        <h2 className='text-center text-2xl mt-10 font-black text-white'>
          Categories
        </h2>
        <Slider itemClassName='flex-[0_0_20%] max-w-[200px] mr-2'>
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
        </Slider>
        <div className='mt-10'>
          {/* Другие секции */}
          <ProductsSection
            title='Самсунг'
            category='samsung'
            queryKeySuffix='samsung'
          />
        </div>

        <div className='mt-10'>
          <ProductsSection
            title='Apple'
            category='apple-phones'
            queryKeySuffix='apple'
          />
        </div>
      </div>
    </main>
  );
}
