import { PrismaClient } from '@prisma/client';
import { clearDatabase } from './clear';
import { seedOptions } from './options.seed';
import { seedCategories } from './categories.seed';
import { seedSections } from './sections.seed';
import { seedBaseProducts } from './products/base-products';
import { seedSamsungS25 } from './products/samsung-s25';
import { seedFilters } from './filters.seed';
import { seedSamsungProductItem } from './products/seedItem';
import { buildSamsungFESpecs } from './buildSamsungFESpecs';
import { specSams } from './data/specification';
import { seedSamsungFE } from './seedProduct/seedSamsungFE';
import { seedNoteBook } from './seedProduct/seedNoteBook/seedNoteBook';
import { seedProduct } from './seedProduct/seedComponent/seedNoteBook';
import { seedProductsByCategory } from './seedProduct/seedComponent/seedProductsByCategory';
import { LAPTOPS_SEED_CONFIG } from './seedProduct/seedComponent/lap-top/laptops.seed';
import { SEED_PRODUCTS } from './seedProduct/seedComponent/seed.data';
import { SAMSUNG_SEED_CONFIG } from './seedProduct/seedComponent/phones/samsung/phoneSeedConfig';

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

  console.log('🔥 Seeding NoteBook  ...');
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

  console.log('🎛 Seeding filters...');
  await seedFilters(prisma, categories);

  console.log('🎛 Seeding filters...');

  console.log('🌱 Seed DONE!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
