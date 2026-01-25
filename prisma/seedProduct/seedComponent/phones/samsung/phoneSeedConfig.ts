import {
  SLIDER_SAMSUNG_S25_BLACK,
  SLIDER_SAMSUNG_S24_GRAY,
  SLIDER_SAMSUNG_A56_LIGHTGRAY,
  SLIDER_SAMSUNG_A36_BLACK,
} from './phoneSliderData';
import {
  buildSamsungGalaxy256GbA36Variants,
  buildSamsungGalaxy256GbA56Variants,
  buildSamsungGalaxy256GbS25FEVariants,
  buildSamsungGalaxy256GbS25Variants,
  buildSamsungGalaxy512GbS25FEVariants,
  buildSamsungGalaxy512GbS25Variants,
  buildSamsungGalaxyS24_256GbVariants,
} from './samsungVariants';

export const SAMSUNG_SEED_CONFIG = (
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
      name: 'Samsung Galaxy S24',
      slug: 'samsung-galaxy-s24',
      model: 'Samsung Galaxy S24',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxyS24_256GbVariants(sections, model),
      ],
    },

    // 25
    {
      name: 'Samsung Galaxy S25 FE',
      slug: 'samsung-galaxy-s25-fe',
      model: 'S731',
      imageUrl:
        'https://xstore.md/images/product/2025/12/samsung-galaxy-s24-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S24_GRAY,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbS25FEVariants(sections, model),
        ...buildSamsungGalaxy512GbS25FEVariants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy S25  ',
      slug: 'samsung-galaxy-s25 ',
      model: 'Samsung Galaxy S25   ',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbS25Variants(sections, model),
        ...buildSamsungGalaxy512GbS25Variants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy  S25 Ultra  ',
      slug: 'samsung-galaxy-s25Ultra ',
      model: 'Samsung Galaxy S25 Ultra   ',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbS25Variants(sections, model),
        ...buildSamsungGalaxy512GbS25Variants(sections, model),
      ],
    },

    // a model
    {
      name: 'Samsung Galaxy A16  ',
      slug: 'samsung-galaxy ',
      model: 'Samsung Galaxy A16',
      imageUrl:
        'https://xstore.md/images/product/2025/03/samsung-galaxy-a56-5g-lightgray-xstore-md-10.webp',
      sliderUrls: SLIDER_SAMSUNG_A56_LIGHTGRAY,
      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbA56Variants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy A56 256 ГБ',
      slug: 'samsung-galaxy-A56-256',
      model: 'A566',
      imageUrl:
        'https://xstore.md/images/product/2025/03/samsung-galaxy-a56-5g-lightgray-xstore-md-10.webp',
      sliderUrls: SLIDER_SAMSUNG_A56_LIGHTGRAY,
      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbA56Variants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy A36  256 ГБ',
      slug: 'samsung-galaxy-A36 -256',
      model: 'A566',
      imageUrl:
        'https://xstore.md/images/product/2025/04/samsung-galaxy-a36-5g-black-xstore-md-17.webp',
      sliderUrls: SLIDER_SAMSUNG_A36_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbA36Variants(sections, model),
      ],
    },

    {
      name: 'Samsung Galaxy S24',
      slug: 'samsung-galaxy-s24-coppy',
      model: 'Samsung Galaxy S24',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxyS24_256GbVariants(sections, model),
      ],
    },

    // 25
    {
      name: 'Samsung Galaxy S25 FE',
      slug: 'samsung-galaxy-s25-fe-coppy',
      model: 'S731',
      imageUrl:
        'https://xstore.md/images/product/2025/12/samsung-galaxy-s24-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S24_GRAY,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbS25FEVariants(sections, model),
        ...buildSamsungGalaxy512GbS25FEVariants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy S25  ',
      slug: 'samsung-galaxy-s25-coppy ',
      model: 'Samsung Galaxy S25   ',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbS25Variants(sections, model),
        ...buildSamsungGalaxy512GbS25Variants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy  S25 Ultra  ',
      slug: 'samsung-galaxy-s25Ultra-coppy ',
      model: 'Samsung Galaxy S25 Ultra   ',
      imageUrl:
        'https://xstore.md/images/product/2025/08/samsung-galaxy-s25-blueblack-xstore-md-42.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbS25Variants(sections, model),
        ...buildSamsungGalaxy512GbS25Variants(sections, model),
      ],
    },

    // a model
    {
      name: 'Samsung Galaxy A16  ',
      slug: 'samsung-galaxy-coppy ',
      model: 'Samsung Galaxy A16',
      imageUrl:
        'https://xstore.md/images/product/2025/03/samsung-galaxy-a56-5g-lightgray-xstore-md-10.webp',
      sliderUrls: SLIDER_SAMSUNG_A56_LIGHTGRAY,
      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbA56Variants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy A56 256 ГБ',
      slug: 'samsung-galaxy-A56-256-coppy',
      model: 'A566',
      imageUrl:
        'https://xstore.md/images/product/2025/03/samsung-galaxy-a56-5g-lightgray-xstore-md-10.webp',
      sliderUrls: SLIDER_SAMSUNG_A56_LIGHTGRAY,
      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbA56Variants(sections, model),
      ],
    },
    {
      name: 'Samsung Galaxy A36  256 ГБ',
      slug: 'samsung-galaxy-A36 -256-coppy',
      model: 'A566',
      imageUrl:
        'https://xstore.md/images/product/2025/04/samsung-galaxy-a36-5g-black-xstore-md-17.webp',
      sliderUrls: SLIDER_SAMSUNG_A36_BLACK,

      variants: (sections: any, model: any) => [
        ...buildSamsungGalaxy256GbA36Variants(sections, model),
      ],
    },
  ],
});
