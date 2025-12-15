'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/container';
import ProductOptions from './product-options';
import ProductSpecifications from './product-specs';
import { ProductImages } from './product-images';
import { useProduct } from '@/hooks/useProduct';
import { useProductVariants } from '@/hooks/useProductVariants';
import { SimilarProducts } from './similar-product';

export default function ProductView({ productId }: { productId: number }) {
  const { data: product, isLoading, isError } = useProduct(productId);

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const { activeVariant, allOptions, availableValues } = useProductVariants(
    product,
    selectedOptions
  );
  console.log('ProductView render:', {
    product,
    activeVariant,
    selectedOptions,
  });
  if (isLoading) return <p className='text-white mt-30'>Загрузка товара...</p>;
  if (isError || !product)
    return <p className='text-black mt-30'>Товар не найден</p>;

  return (
    <main className='pt-[100px] pb-[100px] bg-[#000]'>
      <Container>
        <div className='flex flex-wrap gap-6'>
          <div className='w-full'>
            <ProductImages images={product.sliderUrls} />
          </div>

          <div className='bg-gray-dark w-full p-4 rounded-2xl text-white'>
            <ProductOptions
              product={product}
              activeVariant={activeVariant}
              allOptions={allOptions}
              selectedOptions={selectedOptions}
              availableValues={availableValues}
              onSelect={(name, value) =>
                setSelectedOptions((prev) => {
                  if (prev[name] === value) {
                    const next = { ...prev };
                    delete next[name];
                    return next;
                  }
                  return { ...prev, [name]: value };
                })
              }
            />
          </div>
        </div>

        <ProductSpecifications activeVariant={activeVariant} />

        <SimilarProducts />
      </Container>
    </main>
  );
}
