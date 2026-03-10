import { Slider } from '@/components/shared';
import { HomeSliderImages } from '@/data';
import Link from 'next/link';

export const HomeSlider = () => (
  <Slider
    options={{ loop: true }}
    itemClassName='
      relative w-full mr-4 rounded-2xl
      h-[420px] sm:h-[520px] md:h-[620px] lg:h-[500px]
    '
  >
    {HomeSliderImages.map((image, i) => (
      <Link key={i} href={image.link}>
        <picture>
          <source
            srcSet={image.mobile}
            media='(max-width: 998px)'
            type='image/webp'
          />
          <img
            src={image.desktop}
            alt={`slide-${i}`}
            loading='lazy'
            className='w-full h-full object-cover rounded-2xl'
          />
        </picture>
      </Link>
    ))}
  </Slider>
);
