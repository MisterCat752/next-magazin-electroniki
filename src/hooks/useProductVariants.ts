import { useMemo } from 'react';

interface Option {
  name: string;
  value: string;
}

interface Variant {
  id: number;
  price: number;
  options: Option[];
  specifications: Record<string, string>[]; // или другой тип вместо any
}

interface Product {
  variants: {
    id: number;
    price: number;
    options: Option[];
    specs: Record<string, string>[]; // или как у тебя
  }[];
}

export function useProductVariants(
  product: Product | null,
  selectedOptions: Record<string, string>,
) {
  const variants = useMemo<Variant[]>(() => {
    if (!product) return [];
    return product.variants.map((v) => ({
      id: v.id,
      price: v.price,
      options: v.options.map((o) => ({
        name: o.name,
        value: o.value,
      })),
      specifications: v.specs,
    }));
  }, [product]);

  const allOptions = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    variants.forEach((variant) => {
      variant.options.forEach((opt) => {
        map[opt.name] ??= new Set();
        map[opt.name].add(opt.value);
      });
    });
    return Object.entries(map).map(([name, values]) => ({
      name,
      values: Array.from(values),
    }));
  }, [variants]);

  const activeVariant = useMemo(() => {
    if (variants.length === 0) return null;

    if (Object.keys(selectedOptions).length === 0) {
      return variants[0];
    }

    return (
      variants.find((variant) =>
        Object.entries(selectedOptions).every(([name, value]) =>
          variant.options.some((o) => o.name === name && o.value === value),
        ),
      ) ?? variants[0]
    );
  }, [variants, selectedOptions]);

  const availableValues = useMemo(() => {
    const result: Record<string, Set<string>> = {};

    allOptions.forEach((opt) => {
      result[opt.name] = new Set();
      variants.forEach((variant) => {
        const match = Object.entries(selectedOptions).every(
          ([name, value]) =>
            name === opt.name ||
            variant.options.some((o) => o.name === name && o.value === value),
        );

        if (match) {
          const current = variant.options.find((o) => o.name === opt.name);
          if (current) result[opt.name].add(current.value);
        }
      });
    });

    return result;
  }, [variants, allOptions, selectedOptions]);

  return {
    variants,
    allOptions,
    activeVariant,
    availableValues,
  };
}
