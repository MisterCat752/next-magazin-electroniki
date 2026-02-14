'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SliderProps {
  children: React.ReactNode;
  itemClassName?: string;
  options?: Parameters<typeof useEmblaCarousel>[0];
  /** Включить режим "thumbs" */
  isThumbs?: boolean;
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  direction?: 'horizontal' | 'vertical';
}

export function Slider({
  children,
  itemClassName,
  options,
  isThumbs = false,
  selectedIndex,
  onSelect,
  direction = 'horizontal',
}: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: direction === 'vertical' ? 'y' : 'x',
    align: 'start',
    ...options,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className='relative'>
      <div
        className='overflow-hidden rounded-2xl w-full min-w-0'
        ref={emblaRef}
      >
        <div
          className={`flex ${
            direction === 'vertical' ? 'flex-col' : 'flex-row'
          } [&>*]:shrink-0`}
        >
          {React.Children.map(children, (child, i) => {
            const isSelected = selectedIndex === i;
            return (
              <div
                key={i}
                className={`${itemClassName ?? ''} ${
                  isThumbs ? `cursor-pointer   rounded  ` : ''
                }`}
                onClick={() => isThumbs && onSelect?.(i)}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      {!isThumbs && (
        <>
          <button
            onClick={scrollPrev}
            className='absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
          >
            <ArrowLeft className='h-[20px] w-[20px] text-white' />
          </button>
          <button
            onClick={scrollNext}
            className='absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
          >
            <ArrowRight className='h-[20px] w-[20px] text-white' />
          </button>
        </>
      )}
    </div>
  );
}
