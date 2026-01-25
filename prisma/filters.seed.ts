import { PrismaClient } from '@prisma/client';

export async function seedFilters(prisma: PrismaClient, categories: any) {
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
  const brand = await prisma.filter.create({
    data: {
      name: 'Бренд',
      categoryId: categories.gamingLaptops.id,
      values: {
        create: [
          { value: 'Asus' },
          { value: 'Lenovo' },
          { value: 'Acer' },
          { value: 'HP' },
        ],
      },
    },
    include: { values: true },
  });
  const line = await prisma.filter.create({
    data: {
      name: 'Линия',
      categoryId: categories.gamingLaptops.id,
      values: {
        create: [
          { value: 'Inspiron 15 7000' },
          { value: 'AN17-42' },
          { value: 'X571GT' },
          { value: 'ROG Strix SCAR 18' },
          { value: 'Predator Helios Neo 18' },
          { value: 'TUF Gaming A18' },
          { value: 'ROG Strix G17' },
          { value: 'TUF Gaming A17' },
          { value: 'Predator Helios 300' },
          { value: 'ROG Strix G18' },
        ],
      },
    },
    include: { values: true },
  });
  const ramPc = await prisma.filter.create({
    data: {
      name: 'RAM',
      categoryId: categories.gamingLaptops.id,
      values: {
        create: [
          { value: '64 ГБ' },
          { value: '32 ГБ' },
          { value: '24 ГБ' },
          { value: '16 ГБ' },
          { value: '8 ГБ' },
        ],
      },
    },
    include: { values: true },
  });
  const displayPc = await prisma.filter.create({
    data: {
      name: 'Тип разрешения экрана',
      categoryId: categories.gamingLaptops.id,
      values: {
        create: [
          { value: '3.2 K' },
          { value: '2.5 К' },
          { value: '4K' },
          { value: '3K' },
          { value: '2K' },
          { value: 'Full HD' },
          { value: 'WQHD' },
          { value: 'QHD' },
          { value: 'WUXGA' },
          { value: 'WQXGA' },
        ],
      },
    },
    include: { values: true },
  });
  const mocel = await prisma.filter.create({
    data: {
      name: 'Модель видеокарты',
      categoryId: categories.gamingLaptops.id,
      values: {
        create: [
          { value: 'GeForce RTX 4070' },
          { value: 'GeForce RTX 4080' },
          { value: 'GeForce RTX 4060' },
          { value: 'GeForce RTX 3070' },
          { value: 'GeForce RTX 3070 Ti' },
          { value: 'GeForce RTX 3060' },
          { value: 'GeForce RTX 3050' },
          { value: 'GeForce GTX 3050-TI' },
          { value: 'GeForce RTX 2060' },
          { value: 'GeForce RTX 2050' },
        ],
      },
    },
    include: { values: true },
  });
}
