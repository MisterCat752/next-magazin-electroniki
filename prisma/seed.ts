import { PrismaClient, Option, OptionValue } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Очистка базы данных...');

  // порядок важен из-за связей
  await prisma.$transaction([
    prisma.productVariantOptionValue.deleteMany(),
    prisma.specification.deleteMany(),
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany(),
    prisma.optionValue.deleteMany(),
    prisma.option.deleteMany(),
    prisma.specGroup.deleteMany(),
    prisma.specSection.deleteMany(),
  ]);

  console.log('✅ База очищена, начинаем сидинг...');

  // --- Создаём опции и значения ---
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
      values: {
        create: [{ value: 'Single SIM' }, { value: 'Dual SIM' }],
      },
    },
    include: { values: true },
  });

  // --- Создаём категории (иерархия) ---
  console.log('📦 Создание категорий...');

  // Корневая категория
  const electronics = await prisma.category.create({
    data: {
      name: 'Электроника',
      slug: 'electronics',
    },
  });

  // Смартфоны (дочерняя)
  const smartphones = await prisma.category.create({
    data: {
      name: 'Смартфоны',
      slug: 'smartphones',
      parentId: electronics.id,
    },
  });

  // iOS
  const ios = await prisma.category.create({
    data: {
      name: 'iOS',
      slug: 'ios',
      parentId: smartphones.id,
    },
  });

  const applePhones = await prisma.category.create({
    data: {
      name: 'Apple',
      slug: 'apple-phones',
      parentId: ios.id,
    },
  });

  // Android
  const android = await prisma.category.create({
    data: {
      name: 'Android',
      slug: 'android',
      parentId: smartphones.id,
    },
  });

  const samsung = await prisma.category.create({
    data: {
      name: 'Samsung',
      slug: 'samsung',
      parentId: android.id,
    },
  });

  const xiaomi = await prisma.category.create({
    data: {
      name: 'Xiaomi',
      slug: 'xiaomi',
      parentId: android.id,
    },
  });

  const oneplus = await prisma.category.create({
    data: {
      name: 'OnePlus',
      slug: 'oneplus',
      parentId: android.id,
    },
  });

  // Ноутбуки
  const laptops = await prisma.category.create({
    data: {
      name: 'Ноутбуки',
      slug: 'laptops',
      parentId: electronics.id,
    },
  });

  const appleLaptops = await prisma.category.create({
    data: {
      name: 'Apple',
      slug: 'apple-laptops',
      parentId: laptops.id,
    },
  });

  const windowsLaptops = await prisma.category.create({
    data: {
      name: 'Windows',
      slug: 'windows-laptops',
      parentId: laptops.id,
    },
  });

  console.log('✅ Категории созданы!');

  // --- SpecSection и SpecGroup ---
  const baseSection = await prisma.specSection.create({
    data: {
      name: 'Основные',
      groups: { create: [{ name: 'Основные' }] },
    },
    include: { groups: true },
  });

  const displaySection = await prisma.specSection.create({
    data: {
      name: 'Отображение',
      groups: { create: [{ name: 'Отображение' }] },
    },
    include: { groups: true },
  });

  // --- Helper ---
  function findOptionValue(
    option: Option & { values: OptionValue[] },
    value: string
  ): number {
    const found = option.values.find((v) => v.value === value);
    if (!found) throw new Error(`Option value "${value}" not found`);
    return found.id;
  }

  // --- iPhone 12 ---
  await prisma.product.create({
    data: {
      name: 'Apple iPhone 12',
      slug: 'apple-iphone-12',
      variants: {
        create: [
          {
            sku: 'IP12-128-GREEN-SSIM',
            price: 11999,
            stock: 10,
            optionValues: {
              create: [
                { optionValueId: findOptionValue(memoryOption, '128 ГБ') },
                { optionValueId: findOptionValue(colorOption, 'Зелёный') },
                { optionValueId: findOptionValue(simOption, 'Single SIM') },
              ],
            },
            specifications: {
              create: [
                {
                  name: 'Размеры',
                  value: '146.7 x 71.5 x 7.4 мм',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Вес',
                  value: '164 г',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Цвет',
                  value: 'Зелёный',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Диагональ дисплея',
                  value: '6.1"',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
                {
                  name: 'Разрешение дисплея',
                  value: '2532 × 1170',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
                {
                  name: 'Тип дисплея',
                  value: 'Super Retina XDR OLED',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
              ],
            },
          },
          {
            sku: 'IP12-64-GREEN-DSIM',
            price: 11499,
            stock: 6,
            optionValues: {
              create: [
                { optionValueId: findOptionValue(memoryOption, '64 ГБ') },
                { optionValueId: findOptionValue(colorOption, 'Зелёный') },
                { optionValueId: findOptionValue(simOption, 'Dual SIM') },
              ],
            },
            specifications: {
              create: [
                {
                  name: 'Размеры',
                  value: '146.7 x 71.5 x 7.4 мм',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Вес',
                  value: '164 г',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Цвет',
                  value: 'Зелёный',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Диагональ дисплея',
                  value: '6.1"',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
                {
                  name: 'Разрешение дисплея',
                  value: '2532 × 1170',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
                {
                  name: 'Тип дисплея',
                  value: 'Super Retina XDR OLED',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
              ],
            },
          },
          {
            sku: 'IP12-64-BLACK-DSIM',
            price: 10999,
            stock: 8,
            optionValues: {
              create: [
                { optionValueId: findOptionValue(memoryOption, '64 ГБ') },
                { optionValueId: findOptionValue(colorOption, 'Чёрный') },
                { optionValueId: findOptionValue(simOption, 'Dual SIM') },
              ],
            },
            specifications: {
              create: [
                {
                  name: 'Размеры',
                  value: '146.7 x 71.5 x 7.4 мм',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Вес',
                  value: '164 г',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Цвет',
                  value: 'Чёрный',
                  group: { connect: { id: baseSection.groups[0].id } },
                },
                {
                  name: 'Диагональ дисплея',
                  value: '6.1"',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
                {
                  name: 'Разрешение дисплея',
                  value: '2532 × 1170',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
                {
                  name: 'Тип дисплея',
                  value: 'Super Retina XDR OLED',
                  group: { connect: { id: displaySection.groups[0].id } },
                },
              ],
            },
          },
        ],
      },
    },
  });

  // --- MacBook Air M1 ---
  await prisma.product.create({
    data: {
      name: 'Apple MacBook Air M1',
      slug: 'macbook-air-m1',
      variants: {
        create: [
          {
            sku: 'MBAIR-256-SILVER',
            price: 29999,
            stock: 5,
            optionValues: {
              create: [
                { optionValueId: findOptionValue(memoryOption, '256 ГБ') },
                { optionValueId: findOptionValue(colorOption, 'Серебристый') },
              ],
            },
            specifications: {
              create: [
                {
                  name: 'Диагональ экрана',
                  value: '13.3"',
                  group: { connect: { id: baseSection.groups[0].id } },
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
