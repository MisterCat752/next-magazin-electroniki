// products/seedSamsungFE.ts

import { NOTEBOOK_FE_SLIDER, NOTEBOOK_FE_VARIANTS } from './notebook.constants';
import { NOTEBOOK_PRODUCTS } from './notebook.data';
import { seedSamsungProductItem } from '../../products/seedItem';

export async function seedNoteBook(
  prisma: any,
  options: any,
  categories: any,
  sections: any
) {
  const createdProducts = [];

  for (const product of NOTEBOOK_PRODUCTS) {
    const created = await seedSamsungProductItem(
      prisma,
      options,
      categories.gamingLaptops.id,
      sections,
      {
        name: product.name,
        slug: product.slug,
        imageUrl: '/samsung-25-fe.webp',
        sliderUrls: NOTEBOOK_FE_SLIDER,
        variants: NOTEBOOK_FE_VARIANTS(sections, product.model),
      }
    );

    createdProducts.push(created);
  }

  return createdProducts;
}
