'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/services/instance';
import { fetchCategories } from '@/lib/fetchCategories';
import { useClickAway } from 'react-use';

export type Category = {
  id: string;
  name: string;
  slug?: string;
  parentId?: string | null;
  children?: Category[];
};

export function useCatalogMenu(enabled?: boolean) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileStack, setMobileStack] = useState<Category | null>(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000,
    enabled,
  });

  useEffect(() => {
    if (enabled && categories.length > 0 && !hovered) {
      setHovered(categories[0].id);
    }
  }, [enabled, categories, hovered]);

  const current = categories.find((c) => c.id === hovered) ?? null;
  return {
    categories,
    current,
    hovered,
    setHovered,
    mobileStack,
    setMobileStack,
    isLoading,
  };
}
