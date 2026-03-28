import { buildPcVariants } from './seed.constants';
import { SEED_SLIDER } from './sliderData';

export const PC_SEED_CONFIG = (
  categories: any,
): {
  products: any[];
} => ({
  products: [
    // asus

    {
      name: 'Gaming PC Unity X05',
      slug: 'Unity-X05',
      categoryId: categories.computers.id,

      model: 'Unity X05',
      imageUrl:
        'https://xstore.md/images/product/2025/10/carcasa-gamemax-diamond-cp-bk-xstore-md-49.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) =>
        buildPcVariants(sections, [
          { ram: '16 GB', storage: '512 GB', price: 17999 },
          { ram: '32 GB', storage: '512 GB', price: 18799 },
        ]),
    },
    {
      name: 'Gaming PC infinity X05',
      slug: 'infinity-X35',
      categoryId: categories.computers.id,

      model: 'infinity X35',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2025/07/casex-carcasa-gamemax-storm-2-ab-xstore-md-52.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) =>
        buildPcVariants(sections, [
          { ram: '16 GB', storage: '512 GB', price: 12999 },
          { ram: '32 GB', storage: '512 GB', price: 13799 },
        ]),
    },
    {
      name: 'Gaming PC   x25',
      slug: 'Unity-x25',
      categoryId: categories.computers.id,

      model: 'Unity X05',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2026/03/casex-carcasa-darkflash-db330m-black-xstore-md-54.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) =>
        buildPcVariants(sections, [
          { ram: '16 GB', storage: '512 GB', price: 14999 },
          { ram: '32 GB', storage: '512 GB', price: 15799 },
        ]),
    },
  ],
});
