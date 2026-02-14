import { buildPcVariants } from './seed.constants';
import { SEED_SLIDER } from './sliderData';

export const LAPTOPS_SEED_CONFIG = (
  categories: any,
): {
  products: any[];
} => ({
  products: [
    // asus

    {
      name: 'Игровой компьютер Unity X05',
      slug: 'Unity-X05',
      categoryId: categories.computers.id,

      model: 'Unity X05',
      imageUrl:
        'https://xstore.md/images/product/2025/10/carcasa-gamemax-diamond-cp-bk-xstore-md-49.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) =>
        buildPcVariants(sections, [
          { ram: '16 ГБ', storage: '512 ГБ', price: 17999 },
          { ram: '32 ГБ', storage: '512 ГБ', price: 18799 },
        ]),
    },
  ],
});
