// products/seedSamsungFE.ts

import { SEED_SLIDER, SEED_VARIANTS } from './seed.constants';
import { SEED_PRODUCTS } from './seed.data';
import { seedSamsungProductItem } from '../../products/seedItem';
import { useSeedProduct } from './useSeedProduct';

export async function seedProduct(
  prisma: any,
  options: any,
  categories: any,
  sections: any
) {
  const createdProducts = [];

  for (const product of SEED_PRODUCTS) {
    const created = await useSeedProduct(
      prisma,
      options,
      categories.gamingLaptops.id,
      sections,
      {
        name: product.name,
        slug: product.slug,
        imageUrl: '/pc/asus.webp',
        sliderUrls: SEED_SLIDER,
        variants: SEED_VARIANTS(sections, product.model),
      }
    );

    createdProducts.push(created);
  }

  return createdProducts;
}
