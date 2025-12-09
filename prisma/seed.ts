import { PrismaClient, Option, OptionValue } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Очистка базы данных...');

  await prisma.$transaction([
    prisma.productVariantOptionValue.deleteMany(),
    prisma.specification.deleteMany(),
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany(),
    prisma.optionValue.deleteMany(),
    prisma.option.deleteMany(),
    prisma.specGroup.deleteMany(),
    prisma.specSection.deleteMany(),
    prisma.category.deleteMany(), // очистка категорий
  ]);

  console.log('✅ База очищена, начинаем сидинг...');

  // --- Создаём опции ---
  const colorOption = await prisma.option.create({
    data: {
      name: 'Цвет',
      values: {
        create: [
          { value: 'Зелёный' },
          { value: 'Чёрный' },
          { value: 'Красный' },
          { value: 'Голубой' },
          { value: 'Белый' },
          { value: 'Серый' },
          { value: 'Серебристый' },
          { value: 'Золотой' },
        ],
      },
    },
    include: { values: true },
  });

  const memoryOption = await prisma.option.create({
    data: {
      name: 'Память',
      values: {
        create: [
          { value: '64 ГБ' },
          { value: '128 ГБ' },
          { value: '256 ГБ' },
          { value: '512 ГБ' },
        ],
      },
    },
    include: { values: true },
  });

  const simOption = await prisma.option.create({
    data: {
      name: 'SIM',
      values: { create: [{ value: 'Single SIM' }, { value: 'Dual SIM' }] },
    },
    include: { values: true },
  });

  // --- Создаём категории ---
  const electronics = await prisma.category.create({
    data: { name: 'Электроника', slug: 'electronics' },
  });
  const smartphones = await prisma.category.create({
    data: { name: 'Смартфоны', slug: 'smartphones', parentId: electronics.id },
  });
  const ios = await prisma.category.create({
    data: { name: 'iOS', slug: 'ios', parentId: smartphones.id },
  });
  const applePhones = await prisma.category.create({
    data: { name: 'Apple', slug: 'apple-phones', parentId: ios.id },
  });
  const android = await prisma.category.create({
    data: { name: 'Android', slug: 'android', parentId: smartphones.id },
  });
  const samsung = await prisma.category.create({
    data: { name: 'Samsung', slug: 'samsung', parentId: android.id },
  });
  const xiaomi = await prisma.category.create({
    data: { name: 'Xiaomi', slug: 'xiaomi', parentId: android.id },
  });
  const oneplus = await prisma.category.create({
    data: { name: 'OnePlus', slug: 'oneplus', parentId: android.id },
  });
  const laptops = await prisma.category.create({
    data: { name: 'Ноутбуки', slug: 'laptops', parentId: electronics.id },
  });
  const appleLaptops = await prisma.category.create({
    data: { name: 'Apple', slug: 'apple-laptops', parentId: laptops.id },
  });
  const windowsLaptops = await prisma.category.create({
    data: { name: 'Windows', slug: 'windows-laptops', parentId: laptops.id },
  });

  // --- SpecSection и SpecGroup ---
  const baseSection = await prisma.specSection.create({
    data: { name: 'Основные', groups: { create: [{ name: 'Основные' }] } },
    include: { groups: true },
  });
  const displaySection = await prisma.specSection.create({
    data: {
      name: 'Отображение',
      groups: { create: [{ name: 'Отображение' }] },
    },
    include: { groups: true },
  });

  function findOptionValue(
    option: Option & { values: OptionValue[] },
    value: string
  ): number {
    const found = option.values.find((v) => v.value === value);
    if (!found) throw new Error(`Option value "${value}" not found`);
    return found.id;
  }

  // --- iOS / Apple iPhone ---
  const iphoneProducts = [
    { name: 'Apple iPhone 12', slug: 'apple-iphone-12' },
    { name: 'Apple iPhone 13', slug: 'apple-iphone-13' },
    { name: 'Apple iPhone 14', slug: 'apple-iphone-14' },
  ];

  for (const p of iphoneProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: applePhones.id } },
        variants: {
          create: [
            {
              sku: `${p.slug}-128-BLACK-DSIM`,
              price: Math.floor(Math.random() * 1000) + 10000,
              stock: Math.floor(Math.random() * 10) + 5,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, '128 ГБ') },
                  { optionValueId: findOptionValue(colorOption, 'Чёрный') },
                  { optionValueId: findOptionValue(simOption, 'Dual SIM') },
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ дисплея',
                    value: '6.1"',
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: '164 г',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  // --- Android / Samsung ---
  const samsungProducts = [
    { name: 'Samsung Galaxy S21', slug: 'samsung-galaxy-s21' },
    { name: 'Samsung Galaxy S22', slug: 'samsung-galaxy-s22' },
  ];

  for (const p of samsungProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: samsung.id } },
        variants: {
          create: [
            {
              sku: `${p.slug}-256-BLACK-DSIM`,
              price: Math.floor(Math.random() * 1000) + 8000,
              stock: Math.floor(Math.random() * 10) + 5,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, '256 ГБ') },
                  { optionValueId: findOptionValue(colorOption, 'Чёрный') },
                  { optionValueId: findOptionValue(simOption, 'Dual SIM') },
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ дисплея',
                    value: '6.2"',
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: '169 г',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  // --- Android / Xiaomi ---
  const xiaomiProducts = [
    { name: 'Xiaomi Mi 11', slug: 'xiaomi-mi-11' },
    { name: 'Xiaomi Mi 12', slug: 'xiaomi-mi-12' },
  ];

  for (const p of xiaomiProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: xiaomi.id } },
        variants: {
          create: [
            {
              sku: `${p.slug}-256-SILVER`,
              price: Math.floor(Math.random() * 1000) + 7000,
              stock: Math.floor(Math.random() * 10) + 5,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, '256 ГБ') },
                  {
                    optionValueId: findOptionValue(colorOption, 'Серебристый'),
                  },
                  { optionValueId: findOptionValue(simOption, 'Dual SIM') },
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ дисплея',
                    value: '6.81"',
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: '196 г',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  // --- Android / OnePlus ---
  const oneplusProducts = [
    { name: 'OnePlus 9', slug: 'oneplus-9' },
    { name: 'OnePlus 10', slug: 'oneplus-10' },
  ];

  for (const p of oneplusProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: oneplus.id } },
        variants: {
          create: [
            {
              sku: `${p.slug}-128-BLACK-DSIM`,
              price: Math.floor(Math.random() * 1000) + 6000,
              stock: Math.floor(Math.random() * 10) + 5,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, '128 ГБ') },
                  { optionValueId: findOptionValue(colorOption, 'Чёрный') },
                  { optionValueId: findOptionValue(simOption, 'Dual SIM') },
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ дисплея',
                    value: '6.55"',
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: '180 г',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  // --- Ноутбуки / Apple ---
  const appleLaptopProducts = [
    { name: 'MacBook Air M1', slug: 'macbook-air-m1' },
    { name: 'MacBook Pro M1', slug: 'macbook-pro-m1' },
  ];

  for (const p of appleLaptopProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: appleLaptops.id } },
        variants: {
          create: [
            {
              sku: `${p.slug}-256-SILVER`,
              price: Math.floor(Math.random() * 10000) + 25000,
              stock: Math.floor(Math.random() * 5) + 3,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, '256 ГБ') },
                  {
                    optionValueId: findOptionValue(colorOption, 'Серебристый'),
                  },
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ экрана',
                    value: '13.3"',
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: '1.29 кг',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                  {
                    name: 'Процессор',
                    value: 'Apple M1',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  // --- Ноутбуки / Windows ---
  const windowsLaptopProducts = [
    { name: 'Dell XPS 13', slug: 'dell-xps-13' },
    { name: 'HP Spectre x360', slug: 'hp-spectre-x360' },
  ];

  for (const p of windowsLaptopProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: windowsLaptops.id } },
        variants: {
          create: [
            {
              sku: `${p.slug}-512-SILVER`,
              price: Math.floor(Math.random() * 10000) + 22000,
              stock: Math.floor(Math.random() * 5) + 3,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, '512 ГБ') },
                  { optionValueId: findOptionValue(colorOption, 'Серый') },
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ экрана',
                    value: '13.4"',
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: '1.2 кг',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                  {
                    name: 'Процессор',
                    value: 'Intel i7',
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при сидинге:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
