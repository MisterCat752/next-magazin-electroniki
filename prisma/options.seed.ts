export async function seedOptions(prisma: any) {
  const color = await prisma.option.create({
    data: {
      name: 'Color',
      values: {
        create: [
          'Green',
          'Green',
          'Black',
          'Red',
          'Light Blue',
          'White',
          'Gray',
          'Silver',
          'Gold',
          'Dark Blue',
          'Blue',
          'Black',
        ].map((v) => ({ value: v })),
      },
    },
    include: { values: true },
  });

  const memory = await prisma.option.create({
    data: {
      name: 'Storage / Memory',
      values: {
        create: [
          '64 GB',
          '128 GB',
          '256 GB',
          '512 GB',

          '4 GB|64 GB',
          '4 GB|128 GB',
          '4 GB|256 GB',
          '4 GB|512 GB',

          '6 GB|128 GB',
          '6 GB|256 GB',
          '6 GB|512 GB',

          '8 GB|128 GB',
          '8 GB|256 GB',
          '8 GB|512 GB',

          '12 GB|256 GB',
          '16 GB|512 GB',
          '16 GB|1 TB',
          '24 GB|512 GB',
          '24 GB|1 TB',
          '32 GB|512 GB',
          '32 GB|1 TB',
          '32 GB|2 TB',
          '64 GB|2 TB',
        ].map((v) => ({
          value: v,
        })),
      },
    },
    include: { values: true },
  });
  const videoMemory = await prisma.option.create({
    data: {
      name: 'Graphics Card',
      values: {
        create: [
          // 🟢 Встроенные
          'Intel UHD Graphics|Shared',
          'Intel Iris Xe|Shared',
          'AMD Radeon Graphics|Shared',

          // 🔵 NVIDIA GTX
          'GeForce GTX 1650|4 GB',
          'GeForce GTX 1660 Ti|6 GB',

          // 🔴 NVIDIA RTX 20
          'GeForce RTX 2050|4 GB',
          'GeForce RTX 2060|6 GB',

          // 🟣 NVIDIA RTX 30
          'GeForce RTX 3050|4 GB',
          'GeForce RTX 3050|6 GB',
          'GeForce RTX 3060|6 GB',
          'GeForce RTX 3060|8 GB',
          'GeForce RTX 3070|8 GB',
          'GeForce RTX 3080|8 GB',

          // 🟡 NVIDIA RTX 40
          'GeForce RTX 4050|6 GB',
          'GeForce RTX 4060|8 GB',
          'GeForce RTX 4070|8 GB',
          'GeForce RTX 4080|12 GB',

          // 🟡 NVIDIA RTX 50
          'GeForce RTX 5060|8 GB',
          'GeForce RTX 5070|8 GB',
          'GeForce RTX 5080|16 GB',
          'GeForce RTX 5090|24 GB',

          // 🔴 AMD RX
          'Radeon RX 6600M|8 GB',
          'Radeon RX 6700M|10 GB',
          'Radeon RX 6800M|12 GB',
        ].map((v) => ({ value: v })),
      },
    },
    include: { values: true },
  });

  const procesor = await prisma.option.create({
    data: {
      name: 'Processor',
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
