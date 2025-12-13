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
  const memory = await prisma.specSection.create({
    data: {
      name: 'Память',
      groups: { create: [{ name: 'Память' }] },
    },
    include: { groups: true },
  });
  const software = await prisma.specSection.create({
    data: {
      name: 'Software',
      groups: { create: [{ name: 'Software' }] },
    },
    include: { groups: true },
  });
  const photoVideo = await prisma.specSection.create({
    data: {
      name: 'Фото Видео',
      groups: { create: [{ name: 'Фото Видео' }] },
    },
    include: { groups: true },
  });
  const procesor = await prisma.specSection.create({
    data: {
      name: 'Procesor',
      groups: { create: [{ name: 'Procesor' }] },
    },
    include: { groups: true },
  });
  const characteristics = await prisma.specSection.create({
    data: {
      name: 'Характеристики',
      groups: { create: [{ name: 'Характеристики' }] },
    },
    include: { groups: true },
  });
  const connection = await prisma.specSection.create({
    data: {
      name: 'Связь',
      groups: { create: [{ name: 'Связь' }] },
    },
    include: { groups: true },
  });

  return {
    baseGroup: base.groups[0],
    displayGroup: display.groups[0],
    connection: connection.groups[0],
    characteristics: characteristics.groups[0],
    memory: memory.groups[0],
    software: software.groups[0],
    photoVideo: photoVideo.groups[0],
    procesor: procesor.groups[0],
  };
}
