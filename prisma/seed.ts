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

  // Добавим дополнительные цветовые значения, которые есть в ваших примерах
  await prisma.optionValue.createMany({
    data: [
      { value: 'Тёмно-синий', optionId: colorOption.id },
      { value: 'Синий', optionId: colorOption.id }, // "Icy"
      { value: 'Черный', optionId: colorOption.id }, // альтернативное написание
    ],
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

  // Хелпер для поиска id optionValue по optionId и значению
  async function findOptionValueId(optionId: number, value: string) {
    const found = await prisma.optionValue.findFirst({
      where: { optionId, value },
    });
    if (!found)
      throw new Error(
        `Option value "${value}" for optionId ${optionId} not found`
      );
    return found.id;
  }

  // --- Существующие продукты из вашего примера (оставляем как были) ---
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
              sku: `${p.slug}-${p.memory.replace(/\s/g, '')}-${p.color.replace(
                /\s|\|/g,
                ''
              )}`,
              price: Math.floor(Math.random() * 1000) + 8000,
              stock: Math.floor(Math.random() * 10) + 5,
              optionValues: {
                create: [
                  {
                    optionValueId: await findOptionValueId(
                      memoryOption.id,
                      p.memory
                    ),
                  },
                  {
                    optionValueId: await findOptionValueId(
                      colorOption.id,
                      p.color
                    ),
                  },
                  ...(p.sim
                    ? [
                        {
                          optionValueId: await findOptionValueId(
                            simOption.id,
                            p.sim
                          ),
                        },
                      ]
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

  // --- Добавляем Samsung Galaxy S25 FE (несколько вариантов) ---
  const s25 = {
    name: 'Samsung Galaxy S25 FE',
    slug: 'samsung-galaxy-s25-fe',
    categoryId: samsung.id,
    memories: ['256 ГБ', '512 ГБ'],
    colors: ['Тёмно-синий', 'Черный', 'Синий', 'Белый'],
    ram: '8 ГБ',
    display: '6.7"',
    mainCamera: '50 Мп',
    ultraWide: '12 Мп',
    telephoto: '8 Мп',
    frontCamera: '12 Мп',
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

  // Создадим продукт
  const samsungProduct = await prisma.product.create({
    data: {
      name: s25.name,
      slug: s25.slug,
      category: { connect: { id: s25.categoryId } },
    },
  });

  // Для каждого сочетания памяти + цвета создаём вариант
  for (const mem of s25.memories) {
    for (const color of s25.colors) {
      const sku = `${s25.slug}-${mem.replace(/\s/g, '')}-${color.replace(
        /\s|\|/g,
        ''
      )}`;
      // Установим условно цены: 256 ГБ — 12099, 512 ГБ — 13399 (как в примере)
      const price = mem === '256 ГБ' ? 12099 : 13399;
      const stock = Math.floor(Math.random() * 20) + 1;

      // Найдём optionValue id'шники
      const memId = await findOptionValueId(memoryOption.id, mem);
      const colorId = await findOptionValueId(colorOption.id, color);
      const simId = await findOptionValueId(simOption.id, 'Dual SIM');

      await prisma.productVariant.create({
        data: {
          sku,
          price,
          stock,
          product: { connect: { id: samsungProduct.id } },
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
                group: { connect: { id: displaySection.groups[0].id } },
              },
              {
                name: 'Разрешение основной камеры',
                value: s25.mainCamera,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Разрешение сверхширокой камеры',
                value: s25.ultraWide,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Разрешение телефотообъектива',
                value: s25.telephoto,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Фронтальная камера',
                value: s25.frontCamera,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Вес',
                value: s25.weight,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Процессор',
                value: s25.cpu,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Количество ядер',
                value: s25.cpuCores,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Максимальная частота процессора',
                value: s25.cpuFreq,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Модель видеокарты',
                value: s25.gpu,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Объём аккумулятора',
                value: s25.battery,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Быстрая зарядка',
                value: s25.fastCharge,
                group: { connect: { id: baseSection.groups[0].id } },
              },
              {
                name: 'Разрешение дисплея',
                value: s25.resolution,
                group: { connect: { id: displaySection.groups[0].id } },
              },
              {
                name: 'Частота обновления',
                value: s25.refreshRate,
                group: { connect: { id: displaySection.groups[0].id } },
              },
            ],
          },
        },
      });
    }
  }

  // --- Создаём фильтры для Samsung категории и привязываем значения ---
  const samsungMemoryFilter = await prisma.filter.create({
    data: {
      name: 'Память',
      category: { connect: { id: samsung.id } },
      values: {
        create: [{ value: '256 ГБ' }, { value: '512 ГБ' }],
      },
    },
    include: { values: true },
  });

  const samsungColorFilter = await prisma.filter.create({
    data: {
      name: 'Цвет',
      category: { connect: { id: samsung.id } },
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

  const samsungRamFilter = await prisma.filter.create({
    data: {
      name: 'RAM',
      category: { connect: { id: samsung.id } },
      values: { create: [{ value: '8 ГБ' }] },
    },
    include: { values: true },
  });

  // --- Привязка фильтров к продукту Samsung ---
  await prisma.product.update({
    where: { id: samsungProduct.id },
    data: {
      filters: {
        connect: [
          {
            id: samsungMemoryFilter.values.find((v) => v.value === '256 ГБ')!
              .id,
          },
          { id: samsungRamFilter.values[0].id },
          // Цвет фильтры можно подключать динамически, но подключим первый цвет как пример
          {
            id: samsungColorFilter.values.find(
              (v) => v.value === 'Тёмно-синий'
            )!.id,
          },
        ],
      },
    },
  });

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
