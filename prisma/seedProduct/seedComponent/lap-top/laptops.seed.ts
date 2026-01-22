import {
  SEED_VARIANTS,
  buildA15Variants,
  buildA17Variants,
} from '../seed.constants';
import buildSpecs from './buildSpec';
import {
  SEED_SLIDER,
  SLIDER_ASUS_ROG,
  SLIDER_LENOVO_LEGION,
  SLIDER_LENOVO_LOC,
} from './sliderData';

export const LAPTOPS_SEED_CONFIG = (
  categories: any,
): {
  categoryId: number;
  products: any[];
} => ({
  categoryId: categories.gamingLaptops.id,

  products: [
    {
      name: 'ASUS TUF Gaming A15',
      slug: 'asus-tuf-gaming-a15',
      model: 'FA506NFR',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'Lenovo LOQ 15IAX9E',
      slug: 'Lenovo-LOQ-15IAX9E',
      model: '15IAX9',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2025/09/lenovo-loq-15iax9e-xstore-md-58.webp',
      sliderUrls: SLIDER_LENOVO_LOC,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'ASUS TUF Gaming A17',
      slug: 'asus-tuf-gaming-a17',
      model: 'FA706NFR',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'ASUS ROG Strix G18 G815LW',
      slug: 'ASUS-ROG-Strix-G18-G815LW',
      model: 'ASUS ROG Strix G18',
      imageUrl:
        'https://xstore.md/images/product/2025/04/asus-rog-strix-18-g815lw-xstore-md-56.webp',
      sliderUrls: SLIDER_ASUS_ROG,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'ASUS ROG Strix G16 G614PR',
      slug: 'ASUS-ROG-Strix-G16-G614PR',
      model: 'ASUS ROG Strix G16',
      imageUrl:
        'https://xstore.md/images/product/2025/04/asus-rog-strix-18-g815lw-xstore-md-56.webp',
      sliderUrls: SLIDER_ASUS_ROG,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'Lenovo Legion Pro 5 16IRX10',
      slug: 'Lenovo-Legion-Pro-5-16IRX10',
      model: 'Lenovo Legion Pro 5',
      imageUrl:
        'https://xstore.md/images/product/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
      sliderUrls: SLIDER_LENOVO_LEGION,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
  ],
});
