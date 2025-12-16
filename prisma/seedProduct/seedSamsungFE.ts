// products/seedSamsungFE.ts

import { SAMSUNG_FE_SLIDER, SAMSUNG_FE_VARIANTS } from './samsung.constants';
import { SAMSUNG_FE_PRODUCTS } from './samsung-fe.data';
import { seedSamsungProductItem } from '../products/seedItem';

export async function seedSamsungFE(
  prisma: any,
  options: any,
  categories: any,
  sections: any
) {
  const createdProducts = [];

  for (const product of SAMSUNG_FE_PRODUCTS) {
    const created = await seedSamsungProductItem(
      prisma,
      options,
      categories.samsung.id,
      sections,
      {
        name: product.name,
        slug: product.slug,
        imageUrl: '/samsung-25-fe.webp',
        sliderUrls: SAMSUNG_FE_SLIDER,
        variants: SAMSUNG_FE_VARIANTS(sections, product.model),
      }
    );

    createdProducts.push(created);
  }

  return createdProducts;
}
