// products/seedSamsungFE.ts

import { SEED_SLIDER, SEED_VARIANTS } from './seed.constants';
import { SEED_PRODUCTS } from './seed.data';
import { seedSamsungProductItem } from '../../products/seedItem';
import { useSeedProduct } from './useSeedProduct';

export async function seedProduct(
  prisma: any,
  options: any,
  categories: any,
  sections: any,
  SEED_PRODUCTS: any,
) {
  const createdProducts = [];

  for (const product of SEED_PRODUCTS) {
    const created = await useSeedProduct(
      prisma,
      options,
      categories,
      sections,
      {
        name: product.name,
        slug: product.slug,
        imageUrl:
          'https://xstore.md/images/product/thumbs/2025/07/casex-carcasa-gamemax-storm-2-ab-xstore-md-52.webp',
        sliderUrls: SEED_SLIDER,
        variants: SEED_VARIANTS(sections, product.model),
      },
    );

    createdProducts.push(created);
  }

  return createdProducts;
}
