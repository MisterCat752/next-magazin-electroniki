import {
  SLIDER_IPHONE_13,
  SLIDER_IPHONE_13_WHITE,
  SLIDER_IPHONE_14_WHITE,
  SLIDER_IPHONE_15,
  SLIDER_IPHONE_16,
} from './iphoneSliderData';
import {
  buildIphone12Variants,
  buildIphone13Variants,
  buildIphone14Variants,
  buildIphone15Variants,
  buildIphone16Variants,
} from './iphoneVariants';

export const IPHONE_SEED_CONFIG = (
  categories: any,
): {
  products: any[];
} => ({
  products: [
    // s model

    // 24

    {
      name: 'iPhone 12',
      slug: 'iphone-12',
      categoryId: categories.applePhones.id,

      model: 'iPhone 12',
      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',
      sliderUrls: SLIDER_IPHONE_13,

      variants: (sections: any, model: any) =>
        buildIphone12Variants(sections, model, [
          { ram: '4 GB', memory: '64 GB', color: 'Black', price: 7999 },
          { ram: '4 GB', memory: '128 GB', color: 'Black', price: 8799 },
          { ram: '4 GB', memory: '256 GB', color: 'Blue', price: 9499 },
        ]),
    },
    {
      name: 'iPhone 13',
      slug: 'iphone-13',
      model: 'iPhone 13',
      categoryId: categories.applePhones.id,

      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-xstore-md-17.webp',
      sliderUrls: SLIDER_IPHONE_13_WHITE,

      variants: (sections: any, model: any) =>
        buildIphone13Variants(sections, model, [
          { ram: '4 GB', memory: '128 GB', color: 'Black', price: 9999 },
          { ram: '4 GB', memory: '256 GB', color: 'Red', price: 10999 },
          { ram: '4 GB', memory: '512 GB', color: 'White', price: 11999 },
        ]),
    },
    {
      name: 'iPhone 14',
      slug: 'iphone-14',
      categoryId: categories.applePhones.id,

      model: 'iPhone 14',
      imageUrl:
        'https://xstore.md/images/product/2022/09/Apple-iPhone-14-Starlight-1.webp',
      sliderUrls: SLIDER_IPHONE_14_WHITE,

      variants: (sections: any, model: any) =>
        buildIphone14Variants(sections, model, [
          { ram: '6 GB', memory: '128 GB', color: 'Black', price: 12999 },
          { ram: '6 GB', memory: '256 GB', color: 'Red', price: 14499 },
          { ram: '6 GB', memory: '512 GB', color: 'Blue', price: 15999 },
        ]),
    },
    {
      name: 'iPhone 15',
      slug: 'iphone-15',
      model: 'iPhone 15',
      categoryId: categories.applePhones.id,

      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',

      sliderUrls: SLIDER_IPHONE_13,

      variants: (sections: any, model: any) =>
        buildIphone15Variants(sections, model, [
          { ram: '6 GB', memory: '128 GB', color: 'Black', price: 12999 },
          { ram: '6 GB', memory: '256 GB', color: 'Red', price: 14499 },
          { ram: '6 GB', memory: '512 GB', color: 'Blue', price: 15999 },
        ]),
    },
    {
      name: 'iPhone 16',
      slug: 'iphone-16',
      model: 'iPhone 16',
      categoryId: categories.applePhones.id,

      imageUrl:
        'https://xstore.md/images/product/2025/05/apple-iphone-16-128gb-ultramarine-xstore-md-4.webp',
      sliderUrls: SLIDER_IPHONE_16,

      variants: (sections: any, model: any) =>
        buildIphone16Variants(sections, model, [
          { ram: '6 GB', memory: '128 GB', color: 'Black', price: 12999 },
          { ram: '6 GB', memory: '256 GB', color: 'Red', price: 14499 },
          { ram: '6 GB', memory: '512 GB', color: 'Blue', price: 15999 },
        ]),
    },
  ],
});
