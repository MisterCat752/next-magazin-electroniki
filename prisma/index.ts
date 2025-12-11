import { PrismaClient } from '@prisma/client';
import { clearDatabase } from './clear';
import { seedOptions } from './options.seed';
import { seedCategories } from './categories.seed';
import { seedSections } from './sections.seed';
import { seedBaseProducts } from './products/base-products';
import { seedSamsungS25 } from './products/samsung-s25';
import { seedFilters } from './filters.seed';
import { seedSamsungProductItem } from './products/seedItem';

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

  const samsungProduct3 = await seedSamsungProductItem(
    prisma,
    options,
    categories,
    sections,
    {
      name: 'Samsung Galaxy S25 FE',
      slug: 'samsung-galaxy-s25-fe',
      imageUrl: '/samsung-25-fe.webp',
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: [
            {
              name: 'Диагональ экрана',
              value: '6.7"',
              groupId: sections.displayGroup.id,
            },
            { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
            { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
          ],
        },
        {
          memory: '512 ГБ',
          color: 'Синий',
          sim: 'Dual SIM',
          price: 13399,
          specifications: [
            {
              name: 'Диагональ экрана',
              value: '6.7"',
              groupId: sections.displayGroup.id,
            },
            { name: 'Цвет', value: 'Синий', groupId: sections.baseGroup.id },
            { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
          ],
        },
      ],
    }
  );
  console.log('🎛 Seeding filters...');
  await seedFilters(prisma, categories, samsungProduct3);

  console.log('🌱 Seed DONE!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
