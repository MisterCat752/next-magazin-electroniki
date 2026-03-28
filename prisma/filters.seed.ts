import { PrismaClient } from '@prisma/client';

export async function seedFilters(prisma: PrismaClient, categories: any) {
  // ======================
  // Brand for phones
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Brand',
      category: {
        connect: [{ id: categories.smartphones.id }],
      },
      values: {
        create: [
          { value: 'Samsung' },
          { value: 'Xiaomi' },
          { value: 'Apple' },
          { value: 'Motorola' },
          { value: 'Ulefone' },
          { value: 'Huawei' },
        ],
      },
    },
  });

  // ======================
  // Internal Storage for phones
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Internal Storage',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.applePhones.id },
        ],
      },
      values: {
        create: [
          { value: '8 GB' },
          { value: '16 GB' },
          { value: '32 GB' },
          { value: '64 GB' },
          { value: '128 GB' },
          { value: '256 GB' },
          { value: '512 GB' },
          { value: '1 TB' },
          { value: '2 TB' },
        ],
      },
    },
  });

  // ======================
  // RAM for phones
  // ======================
  await prisma.filter.create({
    data: {
      name: 'RAM',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.applePhones.id },
        ],
      },
      values: {
        create: [
          { value: '1 GB' },
          { value: '2 GB' },
          { value: '3 GB' },
          { value: '4 GB' },
          { value: '6 GB' },
          { value: '8 GB' },
          { value: '12 GB' },
          { value: '16 GB' },
          { value: '18 GB' },
          { value: '24 GB' },
        ],
      },
    },
  });

  // ======================
  // Network generation
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Network Generation',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.applePhones.id },
        ],
      },
      values: {
        create: [{ value: '5G' }, { value: '4G' }, { value: '3G' }],
      },
    },
  });

  // ======================
  // Display type
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Display Type',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.applePhones.id },
        ],
      },
      values: {
        create: [
          { value: 'Dynamic AMOLED 2X' },
          { value: 'LTPO2 AMOLED' },
          { value: 'Dynamic LTPO AMOLED 2X' },
          { value: 'IPS' },
          { value: 'AMOLED' },
          { value: 'LTPS IPS' },
          { value: 'Super AMOLED' },
          { value: 'IPS LCD' },
          { value: 'LTPS IPS LCD' },
          { value: 'Dynamic AMOLED' },
          { value: 'a-Si AHVA' },
          { value: 'LCD' },
          { value: 'OLED' },
          { value: 'Retina IPS LCD' },
          { value: 'XDR OLED' },
        ],
      },
    },
  });

  // ======================
  // Battery capacity
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Battery Capacity',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.applePhones.id },
        ],
      },
      values: {
        create: [
          { value: '5520 mAh' },
          { value: '5500 mAh' },
          { value: '5400 mAh' },
          { value: '5380 mAh' },
          { value: '5300 mAh' },
          { value: '5280 mAh' },
          { value: '5270 mAh' },
          { value: '5260 mAh' },
          { value: '5230 mAh' },
          { value: '5200 mAh' },
          { value: '5180 mAh' },
          { value: '5160 mAh' },
          { value: '5150 mAh' },
          { value: '5110 mAh' },
          { value: '5100 mAh' },
          { value: '5060 mAh' },
          { value: '5050 mAh' },
          { value: '5020 mAh' },
          { value: '5000 mAh' },
        ],
      },
    },
  });

  // ======================
  // Color
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Color',
      category: {
        connect: [
          { id: categories.smartphones.id },
          { id: categories.samsung.id },
          { id: categories.applePhones.id },
        ],
      },
      values: {
        create: [
          { value: 'Black' },
          { value: 'White' },
          { value: 'Blue' },
          { value: 'Dark Blue' },
          { value: 'Red' },
          { value: 'Silver' },
        ],
      },
    },
  });

  // ======================
  // Storage for laptops/PC
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Storage',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.asusRog.id },
          { id: categories.asusTuf.id },
          { id: categories.lenovoLegion.id },
          { id: categories.lenovoLoq.id },
          { id: categories.hpOmen.id },
          { id: categories.laptopPc.id },
          { id: categories.laptop.id },
          { id: categories.computers.id },
        ],
      },
      values: {
        create: [
          { value: '8 GB' },
          { value: '16 GB' },
          { value: '32 GB' },
          { value: '64 GB' },
          { value: '256 GB' },
          { value: '512 GB' },
        ],
      },
    },
  });

  // ======================
  // RAM for laptops/PC
  // ======================
  await prisma.filter.create({
    data: {
      name: 'RAM',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptop.id },
          { id: categories.asusRog.id },
          { id: categories.asusTuf.id },
          { id: categories.laptopPc.id },
          { id: categories.lenovoLegion.id },
          { id: categories.lenovoLoq.id },
          { id: categories.hpOmen.id },
          { id: categories.computers.id },
        ],
      },
      values: {
        create: [
          { value: '64 GB' },
          { value: '32 GB' },
          { value: '24 GB' },
          { value: '16 GB' },
          { value: '8 GB' },
        ],
      },
    },
  });

  // ======================
  // Brand for laptops
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Brand',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptopPc.id },
          { id: categories.laptop.id },
          { id: categories.computers.id },
        ],
      },
      values: {
        create: [
          { value: 'Asus' },
          { value: 'Lenovo' },
          { value: 'Acer' },
          { value: 'HP' },
        ],
      },
    },
  });

  // ======================
  // Laptop series
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Series',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptopPc.id },
          { id: categories.laptop.id },
        ],
      },
      values: {
        create: [
          { value: 'Inspiron 15 7000' },
          { value: 'AN17-42' },
          { value: 'X571GT' },
          { value: 'ROG Strix SCAR 18' },
          { value: 'Predator Helios Neo 18' },
          { value: 'TUF Gaming A18' },
          { value: 'ROG Strix G17' },
          { value: 'TUF Gaming A17' },
          { value: 'Predator Helios 300' },
          { value: 'ROG Strix G18' },
        ],
      },
    },
  });

  // ======================
  // Screen resolution
  // ======================
  await prisma.filter.create({
    data: {
      name: 'Screen Resolution',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptop.id },
          { id: categories.laptopPc.id },
          { id: categories.asusRog.id },
          { id: categories.asusTuf.id },
          { id: categories.lenovoLegion.id },
          { id: categories.lenovoLoq.id },
          { id: categories.hpOmen.id },
          { id: categories.computers.id },
        ],
      },
      values: {
        create: [
          { value: '3.2K' },
          { value: '2.5K' },
          { value: '4K' },
          { value: '3K' },
          { value: '2K' },
          { value: 'Full HD' },
          { value: 'WQHD' },
          { value: 'QHD' },
          { value: 'WUXGA' },
          { value: 'WQXGA' },
        ],
      },
    },
  });

  // ======================
  // GPU model
  // ======================
  await prisma.filter.create({
    data: {
      name: 'GPU Model',
      category: {
        connect: [
          { id: categories.gamingLaptops.id },
          { id: categories.laptop.id },
          { id: categories.laptopPc.id },
          { id: categories.computers.id },
          { id: categories.asusRog.id },
          { id: categories.asusTuf.id },
          { id: categories.lenovoLegion.id },
          { id: categories.lenovoLoq.id },
          { id: categories.hpOmen.id },
        ],
      },
      values: {
        create: [
          { value: 'GeForce RTX 4070' },
          { value: 'GeForce RTX 4080' },
          { value: 'GeForce RTX 4060' },
          { value: 'GeForce RTX 3070' },
          { value: 'GeForce RTX 3070 Ti' },
          { value: 'GeForce RTX 3060' },
          { value: 'GeForce RTX 3050' },
          { value: 'GeForce GTX 3050 Ti' },
          { value: 'GeForce RTX 2060' },
          { value: 'GeForce RTX 2050' },
        ],
      },
    },
  });
}
