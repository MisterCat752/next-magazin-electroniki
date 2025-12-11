import { PrismaClient } from '@prisma/client';
import { clearDatabase } from './clear';
import { seedOptions } from './options.seed';
import { seedCategories } from './categories.seed';
import { seedSections } from './sections.seed';
import { seedBaseProducts } from './products/base-products';
import { seedSamsungS25 } from './products/samsung-s25';
import { seedFilters } from './filters.seed';
import { seedSamsungproductItem } from './products/seedItem';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Clearing DB...');
  await clearDatabase(prisma);

  console.log('📦 Seeding options...');
  const options = await seedOptions(prisma);

  console.log('📁 Seeding categories...');
  const categories = await seedCategories(prisma);

  console.log('📑 Seeding spec sections...');
  const sections = await seedSections(prisma);

  console.log('📱 Seeding base products...');
  await seedBaseProducts(prisma, options, categories, sections);

  console.log('🔥 Seeding Samsung S222...');

  const productItem = {
    name: 'Samsung Galaxy   FE2',
    slug: 'samsung-galaxy- -fe',
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
  const samsungProduct2 = await seedSamsungproductItem(
    prisma,
    options,
    categories,
    sections,
    productItem
  );

  console.log('🎛 Seeding filters...');
  await seedFilters(prisma, categories, samsungProduct2);

  console.log('🌱 Seed DONE!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
