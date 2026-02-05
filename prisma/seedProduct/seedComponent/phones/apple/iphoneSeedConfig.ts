import { SLIDER_SAMSUNG_S25_BLACK } from './iphoneSliderData';
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
  categoryId: number;
  products: any[];
} => ({
  categoryId: categories.applePhones.id,

  products: [
    // s model

    // 24

    {
      name: 'Iphone 12',
      slug: 'Iphone-12',
      model: 'Iphone 12',
      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) =>
        buildIphone12Variants(sections, model, [
          { ram: '4 ГБ', memory: '64 ГБ', color: 'Черный', price: 7999 },
          { ram: '4 ГБ', memory: '128 ГБ', color: 'Черный', price: 8799 },
          { ram: '4 ГБ', memory: '256 ГБ', color: 'Синий', price: 9499 },
        ]),
    },
    {
      name: 'Iphone 13',
      slug: 'Iphone-13',
      model: 'Iphone 13',
      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) =>
        buildIphone13Variants(sections, model, [
          { ram: '4 ГБ', memory: '128 ГБ', color: 'Чёрный', price: 9999 },
          { ram: '4 ГБ', memory: '256 ГБ', color: 'Красный', price: 10999 },
          { ram: '4 ГБ', memory: '512 ГБ', color: 'Белый', price: 11999 },
        ]),
    },
    {
      name: 'Iphone 14',
      slug: 'Iphone-14',
      model: 'Iphone 14',
      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) =>
        buildIphone14Variants(sections, model, [
          { ram: '6 ГБ', memory: '128 ГБ', color: 'Чёрный', price: 12999 },
          { ram: '6 ГБ', memory: '256 ГБ', color: 'Красный', price: 14499 },
          { ram: '6 ГБ', memory: '512 ГБ', color: 'Синий', price: 15999 },
        ]),
    },
    {
      name: 'Iphone 15',
      slug: 'Iphone-15',
      model: 'Iphone 15',
      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) =>
        buildIphone15Variants(sections, model, [
          { ram: '6 ГБ', memory: '128 ГБ', color: 'Чёрный', price: 12999 },
          { ram: '6 ГБ', memory: '256 ГБ', color: 'Красный', price: 14499 },
          { ram: '6 ГБ', memory: '512 ГБ', color: 'Синий', price: 15999 },
        ]),
    },
    {
      name: 'Iphone 16',
      slug: 'Iphone-16',
      model: 'Iphone 16',
      imageUrl:
        'https://xstore.md/images/product/2025/12/apple-iphone-13-1-xstore-md-52.webp',
      sliderUrls: SLIDER_SAMSUNG_S25_BLACK,

      variants: (sections: any, model: any) =>
        buildIphone16Variants(sections, model, [
          { ram: '6 ГБ', memory: '128 ГБ', color: 'Чёрный', price: 12999 },
          { ram: '6 ГБ', memory: '256 ГБ', color: 'Красный', price: 14499 },
          { ram: '6 ГБ', memory: '512 ГБ', color: 'Синий', price: 15999 },
        ]),
    },
  ],
});
