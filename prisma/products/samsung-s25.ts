import { findOption, makeSku } from './utils';
type ProductDynamic = {
  [key: string]: string | number | string[];
};
export async function seedSamsungS25(
  prisma: any,
  options: any,
  categories: any,
  sections: any,
  productItem: ProductDynamic
) {
  const s25 = {
    name: 'Samsung Galaxy S25 FE',
    slug: 'samsung-galaxy-s25-fe',
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
      name: s25.name,
      slug: s25.slug,
      categoryId: categories.samsung.id,
    },
  });

  for (const mem of s25.memories) {
    for (const color of s25.colors) {
      const memId = await findOption(prisma, options.memory, mem);
      const colorId = await findOption(prisma, options.color, color);
      const simId = await findOption(prisma, options.sim, 'Dual SIM');

      await prisma.productVariant.create({
        data: {
          productId: product.id,
          sku: makeSku(s25.slug, mem, color),
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
            create: [
              {
                name: 'Диагональ экрана',
                value: s25.display,
                groupId: sections.displayGroup.id,
              },
              {
                name: 'Вес',
                value: s25.weight,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Процессор',
                value: s25.cpu,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Количество ядер',
                value: s25.cpuCores,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Максимальная частота процессора',
                value: s25.cpuFreq,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Модель видеокарты',
                value: s25.gpu,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Объём аккумулятора',
                value: s25.battery,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Быстрая зарядка',
                value: s25.fastCharge,
                groupId: sections.baseGroup.id,
              },
              {
                name: 'Разрешение дисплея',
                value: s25.resolution,
                groupId: sections.displayGroup.id,
              },
              {
                name: 'Частота обновления',
                value: s25.refreshRate,
                groupId: sections.displayGroup.id,
              },
            ],
          },
        },
      });
    }
  }

  return product;
}
