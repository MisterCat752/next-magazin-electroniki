import { PrismaClient } from '@prisma/client';
import { clearDatabase } from './clear';
import { seedOptions } from './options.seed';
import { seedCategories } from './categories.seed';
import { seedSections } from './sections.seed';
import { seedFilters } from './filters.seed';
import { seedProductsByCategory } from './seedProduct/seedProductsByCategory';
import { LAPTOPS_SEED_CONFIG } from './seedProduct/lap-top/laptops.seed';
import { SAMSUNG_SEED_CONFIG } from './seedProduct/phones/samsung/phoneSeedConfig';
import { IPHONE_SEED_CONFIG } from './seedProduct/phones/apple/iphoneSeedConfig';

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

  console.log('🔥 Seeding laptops...');

  await seedProductsByCategory(
    prisma,
    options,
    sections,
    LAPTOPS_SEED_CONFIG(categories),
  );
  console.log('🔥 Seeding Samsung ...');
  await seedProductsByCategory(
    prisma,
    options,
    sections,
    SAMSUNG_SEED_CONFIG(categories),
  );
  console.log('🔥 Seeding Iphone ...');
  await seedProductsByCategory(
    prisma,
    options,
    sections,
    IPHONE_SEED_CONFIG(categories),
  );

  console.log('🎛 Seeding filters...');
  await seedFilters(prisma, categories);

  console.log('🎛 Seeding filters...');

  console.log('🌱 Seed DONE!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
