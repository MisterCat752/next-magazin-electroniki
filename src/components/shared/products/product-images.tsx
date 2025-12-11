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
        className
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
        direction={direction}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        itemClassName='w-20 h-20 m-1 mt-3'
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className='object-cover w-full h-full rounded'
          />
        ))}
      </Slider>
    </div>
  );
};
