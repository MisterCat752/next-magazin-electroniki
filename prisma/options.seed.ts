export async function seedOptions(prisma: any) {
  const color = await prisma.option.create({
    data: {
      name: 'Цвет',
      values: {
        create: [
          'Зелёный',
          'Чёрный',
          'Красный',
          'Голубой',
          'Белый',
          'Серый',
          'Серебристый',
          'Золотой',
          'Тёмно-синий',
          'Синий',
          'Черный',
        ].map((v) => ({ value: v })),
      },
    },
    include: { values: true },
  });

  const memory = await prisma.option.create({
    data: {
      name: 'Память',
      values: {
        create: [
          '64 ГБ',
          '128 ГБ',
          '256 ГБ',
          '512 ГБ',
          '16 ГБ|512 ГБ',
          '32 ГБ|512 ГБ',
        ].map((v) => ({
          value: v,
        })),
      },
    },
    include: { values: true },
  });

  const sim = await prisma.option.create({
    data: {
      name: 'SIM',
      values: {
        create: ['Single SIM', 'Dual SIM'].map((v) => ({ value: v })),
      },
    },
    include: { values: true },
  });

  return { color, memory, sim };
}
