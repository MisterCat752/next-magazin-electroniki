import { PrismaClient } from '@prisma/client';

export async function seedFilters(
  prisma: PrismaClient,
  categories: any,
  samsungProduct: any
) {
  const memory = await prisma.filter.create({
    data: {
      name: 'Память',
      categoryId: categories.samsung.id,
      values: {
        create: [{ value: '256 ГБ' }, { value: '512 ГБ' }],
      },
    },
    include: { values: true },
  });

  const color = await prisma.filter.create({
    data: {
      name: 'Цвет',
      categoryId: categories.samsung.id,
      values: {
        create: [
          { value: 'Тёмно-синий' },
          { value: 'Черный' },
          { value: 'Синий' },
          { value: 'Белый' },
        ],
      },
    },
    include: { values: true },
  });

  const ram = await prisma.filter.create({
    data: {
      name: 'RAM',
      categoryId: categories.samsung.id,
      values: { create: [{ value: '8 ГБ' }] },
    },
    include: { values: true },
  });

  await prisma.product.update({
    where: { id: samsungProduct.id },
    data: {
      filters: {
        connect: [
          { id: memory.values[0].id },
          { id: ram.values[0].id },
          { id: color.values[0].id },
        ],
      },
    },
  });
}
