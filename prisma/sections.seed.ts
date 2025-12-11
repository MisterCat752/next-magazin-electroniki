import { PrismaClient } from '@prisma/client';

export async function seedSections(prisma: PrismaClient) {
  const base = await prisma.specSection.create({
    data: {
      name: 'Основные',
      groups: { create: [{ name: 'Основные' }] },
    },
    include: { groups: true },
  });

  const display = await prisma.specSection.create({
    data: {
      name: 'Отображение',
      groups: { create: [{ name: 'Отображение' }] },
    },
    include: { groups: true },
  });

  return {
    baseGroup: base.groups[0],
    displayGroup: display.groups[0],
  };
}
