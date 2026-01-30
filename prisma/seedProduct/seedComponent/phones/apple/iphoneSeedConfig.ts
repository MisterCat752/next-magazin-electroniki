import {
  SLIDER_SAMSUNG_S25_BLACK,
  SLIDER_SAMSUNG_S24_GRAY,
  SLIDER_SAMSUNG_A56_LIGHTGRAY,
  SLIDER_SAMSUNG_A36_BLACK,
} from './iphoneSliderData';
import {
  buildSamsungGalaxy256GbA36Variants,
  buildSamsungGalaxy256GbA56Variants,
  buildSamsungGalaxy256GbS25FEVariants,
  buildSamsungGalaxy256GbS25Variants,
  buildSamsungGalaxy512GbS25FEVariants,
  buildSamsungGalaxy512GbS25Variants,
  buildSamsungGalaxyS24_256GbVariants,
} from './samsungVariants';

export const IPHONE_SEED_CONFIG = (
  categories: any,
): {
  categoryId: number;
  products: any[];
} => ({
  categoryId: categories.samsung.id,

  products: [
    // s model

    // 24

    {
      name: 'Iphone',
      slug: 'Iphone',
      model: 'Iphone',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxyS24_256GbVariants(sections, model),
      ],
    },
  ],
});
