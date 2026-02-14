'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/shared';

interface Props {
  className?: string;
  images: string[];
  direction?: 'horizontal' | 'vertical';
}

export const ProductImages: React.FC<Props> = ({
  className,
  images,
  direction = 'horizontal',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isVertical = direction === 'vertical';

  return (
    <div
      className={cn(
        'flex bg-white rounded-2xl',
        isVertical ? 'flex-row items-start' : 'flex-col items-center',
        className,
      )}
    >
      {/* Главное фото */}
      <div className={cn('w-full max-w-md', isVertical ? 'order-2' : ' ')}>
        <img
          src={images[selectedIndex]}
          alt={`main-${selectedIndex}`}
          className='w-full h-auto object-cover rounded-xl shadow'
        />
      </div>
      {/* Thumbnails */}
      <Slider
        isThumbs
        direction='horizontal'
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        itemClassName='
    w-14 h-14         /* mobile */
    sm:w-16 sm:h-16   /* bigger phones */
    md:w-20 md:h-20   /* desktop */
    mr-2 mt-3 shrink-0
  '
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={cn(
              'overflow-hidden rounded-lg border-2',
              selectedIndex === idx ? 'border-primary' : 'border-transparent',
            )}
          >
            <img
              src={img}
              alt={`thumb-${idx}`}
              className='object-cover w-full h-full'
            />
          </button>
        ))}
      </Slider>
    </div>
  );
};
