import {
  SEED_SLIDER,
  SEED_VARIANTS,
  buildA15Variants,
  buildA17Variants,
} from '../seed.constants';
import buildSpecs from './buildSpec';

export const LAPTOPS_SEED_CONFIG = (
  categories: any,
): {
  categoryId: number;
  imageUrl: string;
  sliderUrls: string[];
  products: any[];
} => ({
  categoryId: categories.gamingLaptops.id,
  imageUrl:
    'https://xstore.md/images/product/thumbs/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
  sliderUrls: SEED_SLIDER,

  products: [
    {
      name: 'ASUS TUF Gaming A15',
      slug: 'asus-tuf-gaming-a15',
      model: 'FA506NFR',
      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'ASUS TUF Gaming A17',
      slug: 'asus-tuf-gaming-a17',
      model: 'FA706NFR',
      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
  ],
});
