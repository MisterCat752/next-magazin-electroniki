import { CategoryCard, Slider } from '@/components/shared';
import { categories, HomeSliderImages } from '@/data';
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
      h-[560px] 
      sm:h-[820px] 
      md:h-[820px] 
      lg:h-[500px]
    '
        >
          {HomeSliderImages.map((image, i) => (
            <picture key={i}>
              {/* Мобильная версия до 768px */}
              <source
                srcSet={image.mobile}
                media='(max-width: 998px)'
                type='image/webp'
              />
              {/* Десктопная версия */}
              <img
                src={image.desktop}
                alt={`slide-${i}`}
                loading='lazy'
                className='w-full h-full object-cover rounded-2xl'
              />
            </picture>
          ))}
        </Slider>
      </div>
      <div className='mx-auto max-w-[1450px]'>
        {/* Категории */}
        <h2 className='text-center text-2xl my-10 font-black text-white'>
          Categories
        </h2>
        <Slider
          itemClassName='flex-[0_0_33.333%] max-w-[33.333%] mr-2 
                 md:flex-[0_0_20%] md:max-w-[200px]'
        >
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
        </Slider>
        {/* Последние товары */}
        <div className='my-10'>
          <ProductsSection
            title='Последние товары'
            category='laptop'
            sort='createdAt_desc'
            queryKeySuffix='latest'
          />
        </div>
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
