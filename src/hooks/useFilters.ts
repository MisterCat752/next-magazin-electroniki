'use client';

import { useFilterStore, SpecFilter } from '@/store/filterStore';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useFilters = (categoryId: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    filtersByCategory,
    setCategoryFilters,
    clearCategoryFilters,
    mobileFiltersOpen,
    toggleMobileFilters,
    closeMobileFilters,
  } = useFilterStore();

  const categoryState = filtersByCategory[categoryId] || {
    selectedSpecs: [],
    sort: null,
    priceRange: null,
  };

  const { selectedSpecs, priceRange } = categoryState;

  // -----------------------------
  // LOCAL PRICE INPUT STATE
  // -----------------------------
  const [priceMin, setPriceMin] = React.useState<number | null>(
    priceRange?.min ?? null,
  );

  const [priceMax, setPriceMax] = React.useState<number | null>(
    priceRange?.max ?? null,
  );

  const isMounted = React.useRef(false);

  // -----------------------------
  // 🔥 URL → STORE (при смене категории)
  // -----------------------------
  React.useEffect(() => {
    const specs: SpecFilter[] = [];

    searchParams.forEach((value, key) => {
      if (key !== 'min' && key !== 'max') {
        specs.push({ name: key, value });
      }
    });

    const min = searchParams.get('min');
    const max = searchParams.get('max');

    setCategoryFilters(categoryId, {
      selectedSpecs: specs,
      priceRange:
        min || max
          ? {
              min: min ? Number(min) : 0,
              max: max ? Number(max) : 999999999,
            }
          : null,
    });

    // синхронизируем инпуты
    setPriceMin(min ? Number(min) : null);
    setPriceMax(max ? Number(max) : null);

    isMounted.current = true;
  }, [categoryId]);

  // -----------------------------
  // 🔥 PRICE INPUT → STORE (debounce)
  // -----------------------------
  React.useEffect(() => {
    if (!isMounted.current) return;

    const timeout = setTimeout(() => {
      if (priceMin === null && priceMax === null) {
        setCategoryFilters(categoryId, { priceRange: null });
        return;
      }

      setCategoryFilters(categoryId, {
        priceRange: {
          min: priceMin ?? 0,
          max: priceMax ?? 999999999,
        },
      });
    }, 600);

    return () => clearTimeout(timeout);
  }, [priceMin, priceMax, categoryId]);

  // -----------------------------
  // 🔥 STORE → URL
  // -----------------------------
  React.useEffect(() => {
    if (!isMounted.current) return;

    const params = new URLSearchParams();

    selectedSpecs.forEach((spec) => {
      params.append(spec.name, spec.value);
    });

    if (priceRange) {
      if (priceRange.min !== 0) {
        params.set('min', String(priceRange.min));
      }

      if (priceRange.max !== 999999999) {
        params.set('max', String(priceRange.max));
      }
    }

    const query = params.toString();

    router.replace(query ? `?${query}` : '?', { scroll: false });
  }, [selectedSpecs, priceRange, router]);

  // -----------------------------
  // SPEC TOGGLE
  // -----------------------------
  const toggleSpecFilter = (spec: SpecFilter) => {
    const exists = selectedSpecs.some(
      (s) => s.name === spec.name && s.value === spec.value,
    );

    const updated = exists
      ? selectedSpecs.filter(
          (s) => !(s.name === spec.name && s.value === spec.value),
        )
      : [...selectedSpecs, spec];

    setCategoryFilters(categoryId, { selectedSpecs: updated });
  };

  const clearFilters = () => {
    clearCategoryFilters(categoryId);
  };

  // -----------------------------
  // FILTERS API
  // -----------------------------
  const { data, isLoading } = useQuery({
    queryKey: ['filters', categoryId],
    queryFn: async () => {
      const { data } = await axios.get('/api/filters', {
        params: { category: categoryId },
      });
      return data;
    },
    placeholderData: keepPreviousData,
  });

  return {
    filters: data ?? [],
    isLoading,
    selectedSpecs,
    toggleSpecFilter,
    mobileFiltersOpen,
    toggleMobileFilters,
    closeMobileFilters,
    clearFilters,
    priceRange,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
  };
};
