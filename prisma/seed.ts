import { PrismaClient, Option, OptionValue } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Очистка базы данных...');

  await prisma.$transaction([
    prisma.productVariantOptionValue.deleteMany(),
    prisma.specification.deleteMany(),
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany(),
    prisma.filterValue.deleteMany(),
    prisma.filter.deleteMany(),
    prisma.optionValue.deleteMany(),
    prisma.option.deleteMany(),
    prisma.specGroup.deleteMany(),
    prisma.specSection.deleteMany(),
    prisma.category.deleteMany(),
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

  // --- Сидинг продуктов ---
  const productData = [
    {
      name: 'Apple iPhone 12',
      slug: 'apple-iphone-12',
      categoryId: applePhones.id,
      memory: '128 ГБ',
      color: 'Чёрный',
      sim: 'Dual SIM',
      display: '6.1"',
      weight: '164 г',
    },
    {
      name: 'Apple iPhone 13',
      slug: 'apple-iphone-13',
      categoryId: applePhones.id,
      memory: '128 ГБ',
      color: 'Чёрный',
      sim: 'Dual SIM',
      display: '6.1"',
      weight: '164 г',
    },
    {
      name: 'Samsung Galaxy S21',
      slug: 'samsung-galaxy-s21',
      categoryId: samsung.id,
      memory: '256 ГБ',
      color: 'Чёрный',
      sim: 'Dual SIM',
      display: '6.2"',
      weight: '169 г',
    },
    {
      name: 'Xiaomi Mi 11',
      slug: 'xiaomi-mi-11',
      categoryId: xiaomi.id,
      memory: '256 ГБ',
      color: 'Серебристый',
      sim: 'Dual SIM',
      display: '6.81"',
      weight: '196 г',
    },
    {
      name: 'OnePlus 9',
      slug: 'oneplus-9',
      categoryId: oneplus.id,
      memory: '128 ГБ',
      color: 'Чёрный',
      sim: 'Dual SIM',
      display: '6.55"',
      weight: '180 г',
    },
    {
      name: 'MacBook Air M1',
      slug: 'macbook-air-m1',
      categoryId: appleLaptops.id,
      memory: '256 ГБ',
      color: 'Серебристый',
      processor: 'Apple M1',
      display: '13.3"',
      weight: '1.29 кг',
    },
    {
      name: 'Dell XPS 13',
      slug: 'dell-xps-13',
      categoryId: windowsLaptops.id,
      memory: '512 ГБ',
      color: 'Серый',
      processor: 'Intel i7',
      display: '13.4"',
      weight: '1.2 кг',
    },
  ];

  for (const p of productData) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        category: { connect: { id: p.categoryId } },
        variants: {
          create: [
            {
              sku: `${p.slug}-${p.memory}-${p.color}`,
              price: Math.floor(Math.random() * 1000) + 8000,
              stock: Math.floor(Math.random() * 10) + 5,
              optionValues: {
                create: [
                  { optionValueId: findOptionValue(memoryOption, p.memory) },
                  { optionValueId: findOptionValue(colorOption, p.color) },
                  ...(p.sim
                    ? [{ optionValueId: findOptionValue(simOption, p.sim) }]
                    : []),
                ],
              },
              specifications: {
                create: [
                  {
                    name: 'Диагональ экрана',
                    value: p.display,
                    group: { connect: { id: displaySection.groups[0].id } },
                  },
                  {
                    name: 'Вес',
                    value: p.weight,
                    group: { connect: { id: baseSection.groups[0].id } },
                  },
                  ...(p.processor
                    ? [
                        {
                          name: 'Процессор',
                          value: p.processor,
                          group: { connect: { id: baseSection.groups[0].id } },
                        },
                      ]
                    : []),
                ],
              },
            },
          ],
        },
      },
    });
  }

  // --- Сидинг фильтров ---
  const appleLaptopProcessorFilter = await prisma.filter.create({
    data: {
      name: 'Процессор',
      category: { connect: { id: appleLaptops.id } },
      values: { create: [{ value: 'Apple M1' }, { value: 'Intel i7' }] },
    },
    include: { values: true },
  });

  const memoryFilter = await prisma.filter.create({
    data: {
      name: 'Память',
      category: { connect: { id: appleLaptops.id } },
      values: {
        create: [{ value: '8 GB' }, { value: '16 GB' }, { value: '32 GB' }],
      },
    },
    include: { values: true },
  });

  const colorFilterSamsung = await prisma.filter.create({
    data: {
      name: 'Цвет',
      category: { connect: { id: samsung.id } },
      values: { create: [{ value: 'Чёрный' }, { value: 'Белый' }] },
    },
    include: { values: true },
  });

  // --- Привязка фильтров к продукту (пример) ---
  const firstAppleLaptop = await prisma.product.findFirst({
    where: { categoryId: appleLaptops.id },
  });
  if (firstAppleLaptop) {
    await prisma.product.update({
      where: { id: firstAppleLaptop.id },
      data: {
        filters: {
          connect: [
            { id: appleLaptopProcessorFilter.values[0].id }, // Apple M1
            { id: memoryFilter.values[1].id }, // 16 GB
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
