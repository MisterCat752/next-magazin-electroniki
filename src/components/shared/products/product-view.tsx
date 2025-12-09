'use client';

import { useState, useMemo } from 'react';
import ProductOptions from './product-options';
import ProductSpecifications from './product-specs';

interface ProductViewProps {
  product: any;
}

export default function ProductView({ product }: ProductViewProps) {
  // сделать хук
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  // Преобразуем варианты
  const variants = product.variants.map((v: any) => ({
    id: v.id,
    price: v.price,
    options: v.optionValues.map((ov: any) => ({
      name: ov.optionValue.option.name,
      value: ov.optionValue.value,
    })),
    specifications: v.specifications,
  }));

  // Собираем все доступные опции
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

  // Активный вариант
  const activeVariant = useMemo(() => {
    return (
      variants.find((variant: any) =>
        Object.entries(selectedOptions).every(([name, value]) =>
          variant.options.some((o: any) => o.name === name && o.value === value)
        )
      ) || variants[0]
    );
  }, [selectedOptions, variants]);

  // --- Вычисляем доступные значения для каждой опции ---
  const availableValues = useMemo(() => {
    const result: Record<string, Set<string>> = {};

    allOptions.forEach((opt) => {
      result[opt.name] = new Set();

      variants.forEach((variant: { options: any[] }) => {
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
      // если пользователь нажал повторно на уже выбранную опцию — убираем её
      if (prev[name] === value) {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      }

      // иначе — выбираем новую
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <main className='pt-[100px]'>
      <div className='flex gap-6'>
        {/* Изображение */}
        <div className='w-1/2 bg-neutral-900 p-4 rounded'>
          <img
            src='/iphone12.png'
            alt='Product'
            className='rounded w-full object-contain'
          />
        </div>

        {/* Правая часть: опции */}
        <ProductOptions
          product={product}
          activeVariant={activeVariant}
          allOptions={allOptions}
          selectedOptions={selectedOptions}
          availableValues={availableValues}
          onSelect={handleSelect}
        />
      </div>

      {/* Характеристики */}
      <ProductSpecifications activeVariant={activeVariant} />
    </main>
  );
}
