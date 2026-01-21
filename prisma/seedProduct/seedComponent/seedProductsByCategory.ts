import { useSeedProduct } from './useSeedProduct';

type ProductSeedConfig = {
  categoryId: number;
  imageUrl?: string;
  sliderUrls?: string[];
  products: {
    name: string;
    slug: string;
    model?: string;
    variants: any;
  }[];
};

export async function seedProductsByCategory(
  prisma: any,
  options: any,
  sections: any,
  config: ProductSeedConfig,
) {
  const created = [];

  for (const product of config.products) {
    const item = await useSeedProduct(
      prisma,
      options,
      config.categoryId,
      sections,
      {
        name: product.name,
        slug: product.slug,
        imageUrl: config.imageUrl,
        sliderUrls: config.sliderUrls,
        variants: product.variants(sections, product.model),
      },
    );

    created.push(item);
  }

  return created;
}
