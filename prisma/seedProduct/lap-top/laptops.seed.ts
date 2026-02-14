import {
  buildA15Variants,
  buildA17Variants,
  buildAsusRogScar18_2tb5080Variants,
  buildAsusTu512gb4050fA15Fa507Variants,
  buildAsusTufF16_1tb4050Variants,
  buildHpOmen5090v64gb,
  buildLenovoLegion5_24gb5060Variants,
  buildLenovoLegionPro5_1tb5070Variants,
  buildLenovoLoq3_1tb4060Variants,
  buildLoq24gb4050Variants,
} from './seed.constants';
import {
  SEED_SLIDER,
  SLIDER_ASUS_ROG,
  SLIDER_HP_OMEN,
  SLIDER_LENOVO_LEGION,
  SLIDER_LENOVO_LOC,
} from './sliderData';

export const LAPTOPS_SEED_CONFIG = (
  categories: any,
): {
  products: any[];
} => ({
  products: [
    // asus

    {
      name: 'ASUS TUF Gaming A17',
      slug: 'asus-tuf-gaming-a17',
      model: 'FA706NFR',
      categoryId: categories.asusTuf.id,

      imageUrl:
        'https://xstore.md/images/product/2025/11/asus-tuf-gaming-a15-fa506ncg-xstore-md-86.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'Asus TUF Gaming A17 FX707NUR',
      slug: 'asus-tuf-gaming-a17-FX707NUR',
      model: 'FX707NUR',
      categoryId: categories.asusTuf.id,

      imageUrl:
        'https://xstore.md/images/product/2025/11/asus-tuf-gaming-a15-fa506ncg-xstore-md-86.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) => [
        ...buildAsusTu512gb4050fA15Fa507Variants(sections, model),
      ],
    },
    {
      name: 'Asus TUF Gaming A18 FA808UP Jaeger',
      slug: 'asus-tuf-gaming-A18-FA808UP',
      model: 'FA808UP',
      categoryId: categories.asusTuf.id,
      imageUrl:
        'https://xstore.md/images/product/2025/11/asus-tuf-gaming-a15-fa506ncg-xstore-md-86.webp',
      sliderUrls: SEED_SLIDER,

      variants: (sections: any, model: any) => [
        ...buildAsusTufF16_1tb4050Variants(sections, model),
      ],
    },

    {
      name: 'ASUS ROG Strix G18 G815LW',
      slug: 'ASUS-ROG-Strix-G18-G815LW',
      model: 'ASUS ROG Strix G18',
      categoryId: categories.asusRog.id,

      imageUrl:
        'https://xstore.md/images/product/2025/04/asus-rog-strix-18-g815lw-xstore-md-56.webp',
      sliderUrls: SLIDER_ASUS_ROG,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'ASUS ROG Strix G18 G815JPR ',
      slug: 'ASUS-ROG-Strix-G18-G815JPR ',
      model: 'ASUS ROG Strix G18 G815JPR ',
      categoryId: categories.asusRog.id,

      imageUrl:
        'https://xstore.md/images/product/2025/04/asus-rog-strix-18-g815lw-xstore-md-56.webp',
      sliderUrls: SLIDER_ASUS_ROG,

      variants: (sections: any, model: any) => [
        ...buildAsusRogScar18_2tb5080Variants(sections, model),
      ],
    },
    {
      name: 'ASUS ROG Strix G18 G814PM  ',
      slug: 'ASUS-ROG-Strix-G18-G814PM  ',
      model: 'ASUS ROG Strix G18 G814PM  ',
      categoryId: categories.asusRog.id,

      imageUrl:
        'https://xstore.md/images/product/2025/04/asus-rog-strix-18-g815lw-xstore-md-56.webp',
      sliderUrls: SLIDER_ASUS_ROG,

      variants: (sections: any, model: any) => [
        ...buildAsusRogScar18_2tb5080Variants(sections, model),
      ],
    },
    {
      name: 'ASUS ROG Strix G16 G614PR',
      slug: 'ASUS-ROG-Strix-G16-G614PR',
      categoryId: categories.asusRog.id,

      model: 'ASUS ROG Strix G16',
      imageUrl:
        'https://xstore.md/images/product/2025/04/asus-rog-strix-18-g815lw-xstore-md-56.webp',
      sliderUrls: SLIDER_ASUS_ROG,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    // lenovo

    {
      name: 'Lenovo LOQ 15IAX9E',
      slug: 'Lenovo-LOQ-15IAX9E',
      categoryId: categories.lenovoLoq.id,

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
      name: ' Lenovo LOQ 3 15IRX9 Luna',
      slug: 'Lenovo-LOQ-15IRX9',
      categoryId: categories.lenovoLoq.id,

      model: '15IRX9',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2025/09/lenovo-loq-15iax9e-xstore-md-58.webp',
      sliderUrls: SLIDER_LENOVO_LOC,

      variants: (sections: any, model: any) => [
        ...buildLenovoLoq3_1tb4060Variants(sections, model),
      ],
    },
    {
      name: ' Lenovo LOQ 3 17IRX10  Luna',
      slug: 'Lenovo-LOQ-17IRX10 ',
      categoryId: categories.lenovoLoq.id,

      model: '17IRX10 ',
      imageUrl:
        'https://xstore.md/images/product/thumbs/2025/09/lenovo-loq-15iax9e-xstore-md-58.webp',
      sliderUrls: SLIDER_LENOVO_LOC,

      variants: (sections: any, model: any) => [
        ...buildLoq24gb4050Variants(sections, model),
      ],
    },

    {
      name: 'Lenovo Legion Pro 5 16IRX10',
      slug: 'Lenovo-Legion-Pro-5-16IRX10',
      categoryId: categories.lenovoLegion.id,

      model: 'Lenovo Legion Pro 5',
      imageUrl:
        'https://xstore.md/images/product/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
      sliderUrls: SLIDER_LENOVO_LEGION,

      variants: (sections: any, model: any) => [
        ...buildA15Variants(sections, model),
        ...buildA17Variants(sections, model),
      ],
    },
    {
      name: 'Lenovo Legion Pro 5 1HRK Eclipse',
      slug: 'Lenovo-Legion-Pro-5-1HRK',
      model: 'Lenovo Legion Pro 5',
      categoryId: categories.lenovoLegion.id,

      imageUrl:
        'https://xstore.md/images/product/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
      sliderUrls: SLIDER_LENOVO_LEGION,

      variants: (sections: any, model: any) => [
        ...buildLenovoLegionPro5_1tb5070Variants(sections, model),
      ],
    },
    {
      name: 'Lenovo Legion 5 83LY007MRK Eclipse',
      slug: 'Lenovo-Legion-Pro-5-83LY007MRK',
      model: 'Lenovo Legion Pro 5',
      categoryId: categories.lenovoLegion.id,

      imageUrl:
        'https://xstore.md/images/product/2025/10/lenovo-legion-pro-5-16irx10-xstore-md-75.webp',
      sliderUrls: SLIDER_LENOVO_LEGION,

      variants: (sections: any, model: any) => [
        ...buildLenovoLegion5_24gb5060Variants(sections, model),
      ],
    },

    //hp
    {
      name: 'HP Omen Max 16-ah0017c',
      slug: 'HP-Omen-Max-16-ah0017c',
      model: 'Lenovo Legion Pro 5',
      categoryId: categories.hpOmen.id,

      imageUrl:
        'https://xstore.md/images/product/2025/07/hp-omen-max-16-ah0023ci-xstore-md-48.webp',
      sliderUrls: SLIDER_HP_OMEN,

      variants: (sections: any, model: any) => [
        ...buildHpOmen5090v64gb(sections, model),
      ],
    },
  ],
});
