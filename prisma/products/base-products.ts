import { findOption, makeSku } from './utils';
import { BaseProductInput } from '../types';
import { PrismaClient } from '@prisma/client';

export async function seedBaseProducts(
  prisma: PrismaClient,
  options: any,
  categories: any,
  sections: any
) {
  const baseProducts: BaseProductInput[] = [
    {
      name: 'Apple iPhone 12',
      slug: 'apple-iphone-12',
      categoryId: categories.applePhones.id,
      memory: '128 ГБ',
      color: 'Чёрный',
      sim: 'Dual SIM',
      display: '6.1"',
      weight: '164 г',
    },
    {
      name: 'Samsung Galaxy S21',
      slug: 'samsung-galaxy-s21',
      categoryId: categories.samsung.id,
      memory: '256 ГБ',
      color: 'Чёрный',
      sim: 'Dual SIM',
      display: '6.2"',
      weight: '169 г',
    },
    {
      name: 'Samsung Galaxy S22',
      slug: 'samsung-galaxy-s22',
      categoryId: categories.samsung.id,
      memory: '256 ГБ',
      color: 'Синий',
      sim: 'Dual SIM',
      display: '6.3"',
      weight: '1339 г',
    },
    // … остальные
  ];

  for (const p of baseProducts) {
    const product = await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        categoryId: String(p.categoryId),
      },
    });

    const memId = await findOption(prisma, options.memory, p.memory);
    const colorId = await findOption(prisma, options.color, p.color);
    const simId = p.sim ? await findOption(prisma, options.sim, p.sim) : null;

    await prisma.productVariant.create({
      data: {
        sku: makeSku(p.slug, p.memory, p.color),
        price: Math.floor(Math.random() * 1000) + 8000,
        stock: Math.floor(Math.random() * 10) + 5,
        productId: product.id,
        optionValues: {
          create: [
            { optionValueId: memId },
            { optionValueId: colorId },
            ...(simId ? [{ optionValueId: simId }] : []),
          ],
        },
        specifications: {
          create: [
            {
              name: 'Диагональ экрана',
              value: p.display,
              groupId: sections.displayGroup.id,
            },
            {
              name: 'Вес',
              value: p.weight,
              groupId: sections.baseGroup.id,
            },
            ...(p.processor
              ? [
                  {
                    name: 'Процессор',
                    value: p.processor,
                    groupId: sections.baseGroup.id,
                  },
                ]
              : []),
          ],
        },
      },
    });
  }
}
