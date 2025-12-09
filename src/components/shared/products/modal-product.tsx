'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  images: string[];
  code?: string;
}

interface ModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose?: () => void;
}

export const ModalProductQuickView: React.FC<ModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [thumbEmblaRef] = useEmblaCarousel({
    axis: 'y',
    containScroll: 'trimSnaps',
  });

  if (!isOpen || !product) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='relative bg-white rounded-lg w-full max-w-6xl max-h-[90vh] h-full flex flex-col md:flex-row overflow-hidden'>
        {/* Close Button */}
        <button
          className='absolute top-2 right-2 p-2 text-gray-500 hover:text-black z-10'
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Left: Thumbnails */}
        <div className='flex flex-col gap-2 p-2 max-h-full overflow-y-auto md:w-24'>
          <div ref={thumbEmblaRef} className='flex flex-col gap-2'>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  selectedImage === idx ? 'border-red-600' : 'border-gray-300'
                }`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Center: Main Image */}
        <div className='flex-1 flex items-center justify-center p-2 max-h-full overflow-y-auto'>
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className='max-h-full object-contain'
          />
        </div>

        {/* Right: Product Info */}
        <div className='flex-1 flex flex-col gap-4 p-4 max-h-full overflow-y-auto'>
          <h2 className='font-bold text-xl'>{product.name}</h2>
          {product.discount && (
            <span className='bg-red-100 text-red-700 px-2 py-1 text-sm rounded'>
              -{product.discount}%
            </span>
          )}
          <div className='flex items-center gap-2'>
            {product.oldPrice && (
              <span className='line-through text-gray-400'>
                {product.oldPrice} лей
              </span>
            )}
            <span className='font-black text-2xl'>{product.price} лей</span>
          </div>
          {product.code && (
            <p className='text-gray-500 text-sm'>Код товара: {product.code}</p>
          )}
          <div className='flex gap-2 mt-auto'>
            <button className='flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700'>
              В корзину
            </button>
            <button className='flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100'>
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
