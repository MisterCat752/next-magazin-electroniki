import { PrismaClient } from '@prisma/client';

export async function seedFilters(prisma: PrismaClient, categories: any) {
  // ======================
  // Бренд для  телефонов
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Бренд',
      category: {
        connect: [{ id: categories.smartphones.id }],
      },
      values: {
        create: [
          { value: 'Samsung' },
          { value: 'Xiaomi' },
          { value: 'Apple' },
          { value: 'Motorola' },
          { value: 'Ulefone' },
          { value: 'Huawei' },
        ],
      },
    },
  });
  // ======================
  // Память для телефонов
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Встроенная память',
      category: {
        connect: [
          { id: categories.smartphones.id },
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
          { value: '8 ГБ' },
          { value: '16 ГБ' },
          { value: '32 ГБ' },
          { value: '64 ГБ' },
          { value: '128 ГБ' },
          { value: '256 ГБ' },
          { value: '512 ГБ' },
          { value: '1 ТБ' },
          { value: '2 ТБ' },
        ],
      },
    },
  });
  // ======================
  // Оперативная память для телефонов
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Оперативная память',
      category: {
        connect: [
          { id: categories.smartphones.id },
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
          { value: '1 ГБ' },
          { value: '2 ГБ' },
          { value: '3 ГБ' },
          { value: '4 ГБ' },
          { value: '6 ГБ' },
          { value: '8 ГБ' },
          { value: '12 ГБ' },
          { value: '16 ГБ' },
          { value: '18 ГБ' },
          { value: '24 ГБ' },
        ],
      },
    },
  });
  // ======================
  // Поколение связи для телефонов
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Поколение связи',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.xiaomiPhones.id },
          { id: categories.applePhones.id },
          { id: categories.motorolaPhones.id },
          { id: categories.ulefonePhones.id },
          { id: categories.huaweiPhones.id },
        ],
      },
      values: {
        create: [{ value: '5G' }, { value: '4G' }, { value: '3G' }],
      },
    },
  });
  // ======================
  // Тип дисплея для телефонов
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Тип дисплея',
      category: {
        connect: [
          { id: categories.smartphones.id },
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
          { value: 'Dynamic AMOLED 2X' },
          { value: 'LTPO2 AMOLED' },
          { value: 'Dynamic LTPO AMOLED 2X' },
          { value: 'IPS' },
          { value: 'AMOLED' },
          { value: 'LTPS IPS' },
          { value: 'Super AMOLED' },
          { value: 'IPS LCD' },
          { value: 'LTPS IPS LCD' },
          { value: 'Dynamic AMOLED' },
          { value: 'a-Si AHVA' },
          { value: 'LCD' },
          { value: 'OLED' },
          { value: 'Retina IPS LCD' },
          { value: 'XDR OLED' },
          { value: 'P-OLED' },
          { value: 'PLS LCD' },
          { value: 'TFT' },
          { value: 'Fluid AMOLED' },
          { value: 'Super Retina XDR OLED' },
          { value: 'PLS TFT' },
          { value: 'PLS IPS' },
          { value: 'LTPO AMOLED' },
          { value: 'Foldable OLED' },
          { value: 'LTPO OLED' },
          { value: 'TFT LCD' },
          { value: 'Foldable LTPO AMOLED' },
          { value: 'LTPO P-OLED' },
          { value: 'Swift AMOLED' },
        ],
      },
    },
  });

  // ======================
  // Ёмкость аккумулятора для телефонов
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Ёмкость аккумулятора',
      category: {
        connect: [
          { id: categories.smartphones.id },
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
          { value: '22000 мАч' },
          { value: '15600 мАч' },
          { value: '13200 мАч' },
          { value: '10850 мАч' },
          { value: '10600 мАч' },
          { value: '10000 мАч' },
          { value: '9600 мАч' },
          { value: '8150 мАч' },
          { value: '7700 мАч' },
          { value: '7500 мАч' },
          { value: '7300 мАч' },
          { value: '7050 мАч' },
          { value: '7000 мАч' },
          { value: '6600 мАч' },
          { value: '6500 мАч' },
          { value: '6350 мАч' },
          { value: '6210 мАч' },
          { value: '6200 мАч' },
          { value: '6150 мАч' },
          { value: '6050 мАч' },
          { value: '6000 мАч' },
          { value: '5800 мАч' },
          { value: '5600 мАч' },
          { value: '5580 мАч' },
          { value: '5550 мАч' },
          { value: '5520 мАч' },
          { value: '5500 мАч' },
          { value: '5400 мАч' },
          { value: '5380 мАч' },
          { value: '5300 мАч' },
          { value: '5280 мАч' },
          { value: '5270 мАч' },
          { value: '5260 мАч' },
          { value: '5230 мАч' },
          { value: '5200 мАч' },
          { value: '5180 мАч' },
          { value: '5160 мАч' },
          { value: '5150 мАч' },
          { value: '5110 мАч' },
          { value: '5100 мАч' },
          { value: '5060 мАч' },
          { value: '5050 мАч' },
          { value: '5020 мАч' },
          { value: '5000 мАч' },
          { value: '4970 мАч' },
          { value: '4900 мАч' },
          { value: '4870 мАч' },
          { value: '4860 мАч' },
          { value: '4832 мАч' },
          { value: '4820 мАч' },
          { value: '4800 мАч' },
          { value: '4780 мАч' },
          { value: '4720 мАч' },
          { value: '4700 мАч' },
          { value: '4685 мАч' },
          { value: '4680 мАч' },
          { value: '4674 мАч' },
          { value: '4650 мАч' },
          { value: '4614 мАч' },
          { value: '4610 мАч' },
          { value: '4600 мАч' },
          { value: '4575 мАч' },
          { value: '4520 мАч' },
          { value: '4510 мАч' },
          { value: '4500 мАч' },
          { value: '4492 мАч' },
          { value: '4470 мАч' },
          { value: '4441 мАч' },
          { value: '4410 мАч' },
          { value: '4400 мАч' },
          { value: '4385 мАч' },
          { value: '4383 мАч' },
          { value: '4360 мАч' },
          { value: '4355 мАч' },
          { value: '4323 мАч' },
          { value: '4310 мАч' },
          { value: '4300 мАч' },
          { value: '4250 мАч' },
          { value: '4230 мАч' },
          { value: '4200 мАч' },
          { value: '4160 мАч' },
          { value: '4115 мАч' },
          { value: '4100 мАч' },
          { value: '4030 мАч' },
          { value: '4015 мАч' },
          { value: '4006 мАч' },
          { value: '4005 мАч' },
          { value: '4000 мАч' },
          { value: '3988 мАч' },
          { value: '3900 мАч' },
          { value: '3800 мАч' },
          { value: '3700 мАч' },
          { value: '3692 мАч' },
          { value: '3687 мАч' },
          { value: '3582 мАч' },
          { value: '3577 мАч' },
          { value: '3561 мАч' },
          { value: '3500 мАч' },
          { value: '3400 мАч' },
          { value: '3349 мАч' },
          { value: '3300 мАч' },
          { value: '3279 мАч' },
          { value: '3274 мАч' },
          { value: '3240 мАч' },
          { value: '3200 мАч' },
          { value: '3149 мАч' },
          { value: '3110 мАч' },
          { value: '3100 мАч' },
          { value: '3095 мАч' },
          { value: '3046 мАч' },
          { value: '3000 мАч' },
          { value: '2942 мАч' },
          { value: '2815 мАч' },
          { value: '2800 мАч' },
          { value: '2700 мАч' },
          { value: '2438 мАч' },
          { value: '2227 мАч' },
          { value: '2018 мАч' },
          { value: '1820 мАч' },
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
          { id: categories.smartphones.id },
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
  // Память для пк
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Память',
      category: {
        connect: [
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
