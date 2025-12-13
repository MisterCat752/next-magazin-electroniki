import { findOption, makeSku } from './utils';
type VariantInput = {
  memory: string;
  color: string;
  sim?: string;
  price?: number;
  stock?: number;
  specifications: SpecInput[];
};
type SpecInput = {
  name: string;
  value: string | number;
  groupId: number; // или 'base' | 'display' и потом преобразовывать через map
};

export async function seedSamsungProductItem(
  prisma: any,
  options: any,
  categories: any,
  sections: any,
  productItem: {
    name: string;
    slug: string;
    variants: VariantInput[];
    imageUrl?: string;
    sliderUrls?: string[];
  }
) {
  // Создаём продукт
  const product = await prisma.product.create({
    data: {
      name: productItem.name,
      slug: productItem.slug,
      categoryId: categories,
      imageUrl: productItem.imageUrl,
      sliderUrls: productItem.sliderUrls,
    },
  });

  // Создаём все варианты параллельно через Promise.all
  await Promise.all(
    productItem.variants.map(async (variant) => {
      const memId = await findOption(prisma, options.memory, variant.memory);
      const colorId = await findOption(prisma, options.color, variant.color);
      const simId = variant.sim
        ? await findOption(prisma, options.sim, variant.sim)
        : undefined;

      await prisma.productVariant.create({
        data: {
          productId: product.id,
          sku: makeSku(productItem.slug, variant.memory, variant.color),
          price: variant.price ?? 12099,
          stock: variant.stock ?? Math.floor(Math.random() * 20) + 1,

          optionValues: {
            create: [
              { optionValueId: memId },
              { optionValueId: colorId },
              ...(simId ? [{ optionValueId: simId }] : []),
            ],
          },

          specifications: {
            create: variant.specifications.map((spec) => ({
              name: spec.name,
              value: spec.value,
              groupId: spec.groupId,
            })),
          },
        },
      });
    })
  );

  return product;
}
