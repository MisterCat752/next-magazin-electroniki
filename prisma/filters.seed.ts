import { PrismaClient } from '@prisma/client';

export async function seedFilters(prisma: PrismaClient, categories: any) {
  // ======================
  // Память для Samsung
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Память',
      category: {
        connect: [
          { id: categories.samsung.id },
          { id: categories.appleLaptops.id },
          { id: categories.gamingLaptops.id },
        ],
      },
      values: {
        create: [
          { value: '8 ГБ' },
          { value: '16 ГБ' },
          { value: '32 ГБ' },
          { value: '64 ГБ' },
          { value: '256 ГБ' },
          { value: '512 ГБ' },
        ],
      },
    },
  });

  // ======================
  // Цвет для Samsung
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Цвет',
      category: {
        connect: [
          { id: categories.samsung.id },
          { id: categories.xiaomiPhones.id },
          { id: categories.applePhones.id },
          { id: categories.motorolaPhones.id },
          { id: categories.ulefonePhones.id },
          { id: categories.huaweiPhones.id },
        ],
      },
      values: {
        create: [
          { value: 'Черный' },
          { value: 'Белый' },
          { value: 'Синий' },
          { value: 'Тёмно-синий' },
          { value: 'Красный' },
          { value: 'Серебристый' },
        ],
      },
    },
  });

  // ======================
  // RAM для нескольких категорий сразу
  // ======================
  await prisma.filter.create({
    data: {
      name: 'RAM',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },

          { id: categories.appleLaptops.id },
        ],
      },
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
  });

  // ======================
  // Бренд для игровых ноутбуков
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Бренд',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptopPc.id },
        ],
      },
      values: {
        create: [
          { value: 'Asus' },
          { value: 'Lenovo' },
          { value: 'Acer' },
          { value: 'HP' },
        ],
      },
    },
  });

  // ======================
  // Линия для игровых ноутбуков
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Линия',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptopPc.id },
        ],
      },
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
  });

  // ======================
  // Тип разрешения экрана для ПК
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Тип разрешения экрана',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptopPc.id },
          { id: categories.monitors?.id },
        ],
      },
      values: {
        create: [
          { value: '3.2 K' },
          { value: '2.5 K' },
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
  });

  // ======================
  // Модель видеокарты
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Модель видеокарты',
      category: {
        connect: [{ id: categories.gamingLaptops.id }],
      },
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
  });
}
