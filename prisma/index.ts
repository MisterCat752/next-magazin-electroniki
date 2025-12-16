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

  // console.log('📱 Seeding base products...');
  // await seedBaseProducts(prisma, options, categories, sections);
  console.log('🔥 Seeding Samsung S222...');

  await seedSamsungFE(prisma, options, categories, sections);
  // await seedNoteBook(prisma, options, categories, sections);
  console.log('🔥 Seeding NoteBook  ...');

  await seedProduct(prisma, options, categories, sections);
  const samsungProduct3 = await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S25 FE',
      slug: 'samsung-galaxy-s251-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S219 FE',
      slug: 'samsung-galaxy-s2213-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S218 FE',
      slug: 'samsung-galaxy-s2214-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S216 FE',
      slug: 'samsung-galaxy-s2215-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S215 FE',
      slug: 'samsung-galaxy-s2216-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S214 FE',
      slug: 'samsung-galaxy-s2217-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S213 FE',
      slug: 'samsung-galaxy-s2218-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S2123 FE',
      slug: 'samsung-galaxy-s2219-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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
  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S212 FE',
      slug: 'samsung-galaxy-s2231-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams3.webp',
        'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: buildSamsungFESpecs({
            sections,
            model: 'S22 FE',
            memory: '256 ГБ',
            color: ' Черный',
          }),
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

  await seedSamsungProductItem(
    prisma,
    options,
    categories.samsung.id,
    sections,
    {
      name: 'Samsung Galaxy S21 FE',
      slug: 'samsung-galaxy-s2132-fe',
      imageUrl: '/samsung-25-fe.webp',
      sliderUrls: [
        '/phones/sams1.webp',
        '/phones/sams2.webp',
        '/phones/sams2.webp',
      ],
      variants: [
        {
          memory: '256 ГБ',
          color: 'Черный',
          sim: 'Dual SIM',
          price: 12099,
          specifications: specSams({
            sections,
          }),
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

  console.log('🌱 Seed DONE!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
