import { CategoryCard, Slider } from '@/components/shared';
import { categories } from '@/data';
import { ProductsSection } from './product-section';
import { HomeSlider } from './home-slider';
import { PhoneBanner } from './phone-banner';

export default function HomeContent() {
  const sections = [
    { title: 'Laptops', category: 'laptop', queryKeySuffix: 'latest' },
    { title: 'Samsung phones', category: 'samsung', queryKeySuffix: 'samsung' },
    {
      title: 'Apple phones',
      category: 'apple-phones',
      queryKeySuffix: 'apple',
    },
  ];

  return (
    <main className='p-6 space-y-10 bg-black pt-30'>
      {/* Слайдер + баннер */}
      <div className='flex max-w-[1450px] mx-auto flex-col lg:flex-row gap-4'>
        <div className='flex-1  bg-gray-dark-medium p-3 rounded-2xl'>
          <HomeSlider />
        </div>
        <PhoneBanner />
      </div>

      {/* Категории */}
      <div className='mx-auto max-w-[1450px]'>
        <h2 className='text-center text-2xl my-10 font-black text-white'>
          Categories
        </h2>
        <Slider itemClassName='flex-[0_0_33.333%] max-w-[33.333%] mr-2 md:flex-[0_0_20%] md:max-w-[200px]'>
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
        </Slider>

        {/* Продукты */}
        {sections.map((s) => (
          <div key={s.category} className='mt-10'>
            <ProductsSection {...s} />
          </div>
        ))}
      </div>
    </main>
  );
}
