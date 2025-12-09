import React from 'react';
import { cn } from '@/lib/utils';
import { Filters, ProductGroupList } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import type { IProduct, IProductVariants } from '@/types/products.types';

interface Props {
  params: { category: string };
}

function getMinPriceFromVariants(
  variants?: { price: number }[] | null
): number {
  if (!variants || variants.length === 0) return 0; // fallback — можно сделать null, если нужно
  return Math.min(...variants.map((v) => v.price));
}

export default async function Page({ params }: Props) {
  const { category } = params;

  // Берём категорию вместе с продуктами и вариантами
  const categoryData = await prisma.category.findUnique({
    where: { slug: category },
    include: { products: { include: { variants: true } } },
  });

  const productsFromDb = categoryData?.products || [];

  // Маппим в IProduct[], вычисляем price (минимальная цена варианта)
  const items: IProduct[] = productsFromDb.map((p: any) => {
    const price = getMinPriceFromVariants(p.variants);

    // приводим variants к виду IProductVariants[]
    const variants: IProductVariants[] = (p.variants || []).map((v: any) => ({
      id: v.id,
      sku: v.sku,
      price: v.price,
      stock: v.stock,
      productId: v.productId,
    }));

    return {
      id: p.id,
      name: p.name,
      price,
      image: (p as any).image ?? undefined, // если есть поле image в модели — используем, иначе undefined
      variants,
    };
  });

  console.log(categoryData, 'productdto');
  console.log(items, 'mappedItems');

  return (
    <>
      <h2 className='mt-25'>каталог</h2>
      <main className='bg-white flex gap-4 items-center justify-center'>
        <Filters />

        <div>
          <ProductGroupList
            title={categoryData?.name || 'Товары'}
            items={items}
          />
        </div>
      </main>
    </>
  );
}
