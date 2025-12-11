import { findOption, makeSku } from './utils';
type ProductDynamic = {
  [key: string]: string | number | string[];
  slug: string;
};
type SpecInput = {
  name: string;
  value: string | number;
  groupId: number; // или 'base' | 'display' и потом преобразовывать через map
};

export async function seedSamsungproductItem(
  prisma: any,
  options: any,
  categories: any,
  sections: any,
  productItem: ProductDynamic
) {
  const s2 = {
    name: 'Samsung Galaxy productItem FE',
    slug: 'samsung-galaxy-productItem-fe',
    memories: ['256 ГБ', '512 ГБ'],
    colors: ['Тёмно-синий', 'Черный', 'Синий', 'Белый'],
    display: '6.7"',
    weight: '190 г',
    cpu: 'Exynos 2400',
    cpuCores: '8',
    cpuFreq: '3.2 ГГц',
    gpu: 'Samsung Xclipse 940',
    battery: '4900 мАч',
    fastCharge: '45 ВТ',
    resolution: '1080 x 2340',
    refreshRate: '120 Гц',
  };

  const product = await prisma.product.create({
    data: {
      name: productItem.name,
      slug: productItem.slug,
      categoryId: categories.samsung.id,
    },
  });
  if (
    Array.isArray(productItem.memories) &&
    Array.isArray(productItem.colors)
  ) {
    for (const mem of productItem.memories) {
      for (const color of productItem.colors) {
        const memId = await findOption(prisma, options.memory, mem);
        const colorId = await findOption(prisma, options.color, color);
        const simId = await findOption(prisma, options.sim, 'Dual SIM');

        // const specMap: { [key: string]: number } = {
        //   display: sections.displayGroup.id,
        //   resolution: sections.displayGroup.id,
        //   refreshRate: sections.displayGroup.id,

        //   weight: sections.baseGroup.id,
        //   color: sections.baseGroup.id,
        //   cpu: sections.baseGroup.id,
        //   cpuCores: sections.baseGroup.id,
        //   cpuFreq: sections.baseGroup.id,
        //   gpu: sections.baseGroup.id,
        //   battery: sections.baseGroup.id,
        //   fastCharge: sections.baseGroup.id,
        // };
        const specsInput: SpecInput[] = [
          { name: 'Цвет', value: 'Синий', groupId: sections.displayGroup.id },
          {
            name: 'Диагональ экрана',
            value: '6.7"',
            groupId: sections.displayGroup.id,
          },
          { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
          {
            name: 'Процессор',
            value: 'Exynos 2400',
            groupId: sections.baseGroup.id,
          },
        ];
        const specs = specsInput.map((spec) => ({
          name: spec.name,
          value: spec.value,
          groupId: spec.groupId,
        }));
        // const specs = Object.entries(specMap)
        //   .filter(([key]) => productItem[key] !== undefined)
        //   .map(([key, groupId]) => ({
        //     name: key.charAt(0).toUpperCase() + key.slice(1), // красиво
        //     value: productItem[key],
        //     groupId,
        //   }));

        await prisma.productVariant.create({
          data: {
            productId: product.id,
            sku: makeSku(productItem.slug, mem, color),
            price: mem === '256 ГБ' ? 12099 : 13399,
            stock: Math.floor(Math.random() * 20) + 1,

            optionValues: {
              create: [
                { optionValueId: memId },
                { optionValueId: colorId },
                { optionValueId: simId },
              ],
            },

            specifications: {
              create: specs,
            },
          },
        });
        //   await prisma.productVariant.create({
        //     data: {
        //       productId: product.id,
        //       sku: makeSku(productItem.slug, mem, color),
        //       price: mem === '256 ГБ' ? 12099 : 13399,
        //       stock: Math.floor(Math.random() * 20) + 1,

        //       optionValues: {
        //         create: [
        //           { optionValueId: memId },
        //           { optionValueId: colorId },
        //           { optionValueId: simId },
        //         ],
        //       },

        //       specifications: {
        //         create: [
        //           {
        //             name: 'Диагональ экрана',
        //             value: productItem.display,
        //             groupId: sections.displayGroup.id,
        //           },
        //           {
        //             name: 'Цвет',
        //             value: productItem.weight,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Процессор',
        //             value: productItem.cpu,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Количество ядер',
        //             value: productItem.cpuCores,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Максимальная частота процессора',
        //             value: productItem.cpuFreq,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Модель видеокарты',
        //             value: productItem.gpu,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Объём аккумулятора',
        //             value: productItem.battery,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Быстрая зарядка',
        //             value: productItem.fastCharge,
        //             groupId: sections.baseGroup.id,
        //           },
        //           {
        //             name: 'Разрешение дисплея',
        //             value: productItem.resolution,
        //             groupId: sections.displayGroup.id,
        //           },
        //           {
        //             name: 'Частота обновления',
        //             value: productItem.refreshRate,
        //             groupId: sections.displayGroup.id,
        //           },
        //         ],
        //       },
        //     },
        //   });
      }
    }

    return product;
  }
}
