'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductOptions from './product-options';
import ProductSpecifications from './product-specs';
import { Container } from '@/components/layout/container';
import { ProductImages } from './product-images';
import { axiosInstance } from '@/services/instance';
import { getProducts } from '@/lib/api/get-products';
import { IProduct } from '@/types';
import { ProductCard } from './product-card';
import { Slider } from '../slider';

interface ProductViewProps {
  productId: number;
}

async function fetchProduct(id: number) {
  try {
    const { data } = await axios.get(`/api/product/${id}`);
    // API возвращает сам объект продукта
    return data ?? null;
  } catch (err: any) {
    console.error(err);
    return null;
  }
}

export default function ProductView({ productId }: ProductViewProps) {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProduct(productId),
    staleTime: 5 * 60 * 1000,
  });

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const { data: latestProducts, isLoading: loadingLatest } = useQuery({
    queryKey: ['products', 'latest'],
    queryFn: () =>
      getProducts({
        category: 'samsung',
        sort: 'createdAt_desc', // сортировка по дате добавления
        limit: 5,
        page: 1,
      }),
    staleTime: 5 * 60 * 1000, // кэшируем 5 минут
  });
  const variants = useMemo(() => {
    if (!product) return [];
    return product.variants.map((v: any) => ({
      id: v.id,
      price: v.price,
      options: v.options.map((o: any) => ({ name: o.name, value: o.value })),
      specifications: v.specs,
    }));
  }, [product]);

  const allOptions = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    variants.forEach((variant: any) => {
      variant.options.forEach((opt: any) => {
        if (!map[opt.name]) map[opt.name] = new Set();
        map[opt.name].add(opt.value);
      });
    });
    return Object.entries(map).map(([name, values]) => ({
      name,
      values: Array.from(values),
    }));
  }, [variants]);

  const activeVariant = useMemo(() => {
    return (
      variants.find((variant: any) =>
        Object.entries(selectedOptions).every(([name, value]) =>
          variant.options.some((o: any) => o.name === name && o.value === value)
        )
      ) || variants[0]
    );
  }, [selectedOptions, variants]);

  const availableValues = useMemo(() => {
    const result: Record<string, Set<string>> = {};
    allOptions.forEach((opt) => {
      result[opt.name] = new Set();
      variants.forEach((variant: any) => {
        const match = Object.entries(selectedOptions).every(
          ([name, value]) =>
            name === opt.name ||
            variant.options.some(
              (o: any) => o.name === name && o.value === value
            )
        );
        if (match) {
          const current = variant.options.find((o: any) => o.name === opt.name);
          if (current) result[opt.name].add(current.value);
        }
      });
    });
    return result;
  }, [selectedOptions, variants, allOptions]);

  const handleSelect = (name: string, value: string) => {
    setSelectedOptions((prev) => {
      if (prev[name] === value) {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      }
      return { ...prev, [name]: value };
    });
  };

  console.log(activeVariant, 'activeVariant');
  if (isLoading) return <p className='text-white mt-30'>Загрузка товара...</p>;
  if (isError || !product)
    return <p className='text-black mt-30'>Товар не найден</p>;
  return (
    <main className='pt-[100px] pb-[100px] bg-[#000]'>
      <Container>
        {isLoading && <p className='text-white mt-30'>Загрузка товара...</p>}
        {isError && <p className='text-black mt-30'>Товар не найден</p>}
        {!isLoading && !isError && product && (
          <div className=''>
            <div className='flex gap-6'>
              <div className='w-full'>
                <ProductImages images={product.sliderUrls} />
              </div>
              <div className='bg-gray-dark p-4 rounded-2xl text-white'>
                <ProductOptions
                  product={product}
                  activeVariant={activeVariant}
                  allOptions={allOptions}
                  selectedOptions={selectedOptions}
                  availableValues={availableValues}
                  onSelect={handleSelect}
                />
              </div>
            </div>
            <ProductSpecifications activeVariant={activeVariant} />
            <div className=''>
              {/* Последние товары */}
              <h2 className='text-xl text-white font-bold'>Последние товары</h2>
              {loadingLatest ? (
                <p className='text-white'>Загрузка...</p>
              ) : (
                <Slider itemClassName='flex-[0_0_25%] max-w-[266px] mr-2'>
                  {latestProducts?.products?.map((p: IProduct) => (
                    <ProductCard key={p.id} {...p} />
                  ))}
                </Slider>
              )}
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
