import { PrismaClient } from '@prisma/client';

export async function seedSections(prisma: PrismaClient) {
  const base = await prisma.specSection.create({
    data: {
      name: 'General',
      groups: { create: [{ name: 'General' }] },
    },
    include: { groups: true },
  });

  const display = await prisma.specSection.create({
    data: {
      name: 'Display',
      groups: { create: [{ name: 'Display' }] },
    },
    include: { groups: true },
  });
  const memory = await prisma.specSection.create({
    data: {
      name: 'Memory',
      groups: { create: [{ name: 'Memory' }] },
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
      name: 'Photo & Video',
      groups: { create: [{ name: 'Photo & Video' }] },
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
      name: 'Specifications',
      groups: { create: [{ name: 'Specifications' }] },
    },
    include: { groups: true },
  });
  const motherboard = await prisma.specSection.create({
    data: {
      name: 'Motherboard',
      groups: { create: [{ name: 'Motherboard' }] },
    },
    include: { groups: true },
  });
  const connection = await prisma.specSection.create({
    data: {
      name: 'Connection',
      groups: { create: [{ name: 'Connection' }] },
    },
    include: { groups: true },
  });
  const graphic = await prisma.specSection.create({
    data: {
      name: 'Graphics',
      groups: { create: [{ name: 'Graphics' }] },
    },
    include: { groups: true },
  });
  const connectivity = await prisma.specSection.create({
    data: {
      name: 'Connectivity',
      groups: { create: [{ name: 'Connectivity' }] },
    },
    include: { groups: true },
  });
  const extra = await prisma.specSection.create({
    data: {
      name: 'Extra',
      groups: { create: [{ name: 'Extra' }] },
    },
    include: { groups: true },
  });
  const power = await prisma.specSection.create({
    data: {
      name: 'Power',
      groups: { create: [{ name: 'Power' }] },
    },
    include: { groups: true },
  });
  const multimedia = await prisma.specSection.create({
    data: {
      name: 'Multimedia',
      groups: { create: [{ name: 'Multimedia' }] },
    },
    include: { groups: true },
  });

  return {
    baseGroup: base.groups[0],
    displayGroup: display.groups[0],
    motherboard: motherboard.groups[0],
    connection: connection.groups[0],
    power: power.groups[0],
    characteristics: characteristics.groups[0],
    memory: memory.groups[0],
    software: software.groups[0],
    photoVideo: photoVideo.groups[0],
    procesor: procesor.groups[0],
    graphic: graphic.groups[0],
    extra: extra.groups[0],
    connectivity: connectivity.groups[0],
    multimedia: multimedia.groups[0],
  };
}
