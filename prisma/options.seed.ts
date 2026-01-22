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
          '8 ГБ|512 ГБ',
          '16 ГБ|512 ГБ',
          '16 ГБ|1 ТБ',
          '24 ГБ|512 ГБ',
          '24 ГБ|1 ТБ',
          '32 ГБ|512 ГБ',
          '32 ГБ|1 ТБ',
          '32 ГБ|2 ТБ',
          '64 ГБ|2 ТБ',
        ].map((v) => ({
          value: v,
        })),
      },
    },
    include: { values: true },
  });
  const videoMemory = await prisma.option.create({
    data: {
      name: 'Видеокарта',
      values: {
        create: [
          // 🟢 Встроенные
          'Intel UHD Graphics|Shared',
          'Intel Iris Xe|Shared',
          'AMD Radeon Graphics|Shared',

          // 🔵 NVIDIA GTX
          'GeForce GTX 1650|4 ГБ',
          'GeForce GTX 1660 Ti|6 ГБ',

          // 🔴 NVIDIA RTX 20
          'GeForce RTX 2050|4 ГБ',
          'GeForce RTX 2060|6 ГБ',

          // 🟣 NVIDIA RTX 30
          'GeForce RTX 3050|4 ГБ',
          'GeForce RTX 3050|6 ГБ',
          'GeForce RTX 3060|6 ГБ',
          'GeForce RTX 3060|8 ГБ',
          'GeForce RTX 3070|8 ГБ',
          'GeForce RTX 3080|8 ГБ',

          // 🟡 NVIDIA RTX 40
          'GeForce RTX 4050|6 ГБ',
          'GeForce RTX 4060|8 ГБ',
          'GeForce RTX 4070|8 ГБ',
          'GeForce RTX 4080|12 ГБ',

          // 🟡 NVIDIA RTX 50
          'GeForce RTX 5060|8 ГБ',
          'GeForce RTX 5070|8 ГБ',
          'GeForce RTX 5080|16 ГБ',
          'GeForce RTX 5090|24 ГБ',

          // 🔴 AMD RX
          'Radeon RX 6600M|8 ГБ',
          'Radeon RX 6700M|10 ГБ',
          'Radeon RX 6800M|12 ГБ',
        ].map((v) => ({ value: v })),
      },
    },
    include: { values: true },
  });

  const procesor = await prisma.option.create({
    data: {
      name: 'Процесор',
      values: {
        create: [
          // 🔴 AMD Ryzen
          '5500U|Ryzen 5',
          '5600U|Ryzen 5',
          '5600H|Ryzen 5',
          '5700U|Ryzen 7',
          '5800H|Ryzen 7',
          '6800H|Ryzen 7',
          '6900HX|Ryzen 9',
          '7435HS|Ryzen 7',
          '7535HS|Ryzen 7',
          '7840HS|Ryzen 7',
          '7940HS|Ryzen 9',

          // 🔵 Intel Core
          '11320H|Core i5',
          '11400H|Core i5',
          '12450H|Core i5',
          '12450HX|Core i5',
          '12500H|Core i5',
          '13420H|Core i5',
          '13500H|Core i5',

          '11800H|Core i7',
          '12650H|Core i7',
          '12700H|Core i7',
          '13700H|Core i7',

          '12900H|Core i9',
          '13900H|Core i9',

          // 🟢 Intel Core Ultra (новая линейка)
          '155H|Core Ultra 7',
          '165H|Core Ultra 7',
          '185H|Core Ultra 9',
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

  return { color, memory, sim, videoMemory, procesor };
}
