export async function seedCategories(prisma: any) {
  const laptopPc = await prisma.category.create({
    data: { name: 'Ноутбуки | ПК', slug: 'laptop-pc' },
  });

  // ======================
  // 📺 ТЕЛЕВИЗОРЫ
  // ======================
  const tvMain = await prisma.category.create({
    data: { name: 'Телевизоры', slug: 'tv-main' },
  });
  const tvs = await prisma.category.create({
    data: { name: 'Телевизоры', slug: 'tvs', parentId: tvMain.id },
  });
  const electronics = await prisma.category.create({
    data: { name: 'Телефоны | Планшеты', slug: 'electronics' },
  });
  // ======================
  // 📺 БРЕНДЫ ТВ
  // ======================
  await prisma.category.createMany({
    data: [
      { name: 'Samsung', slug: 'samsung-tvs', parentId: tvs.id },
      { name: 'LG', slug: 'lg-tvs', parentId: tvs.id },
      { name: 'Hisense', slug: 'hisense-tvs', parentId: tvs.id },
      { name: 'Toshiba', slug: 'toshiba-tvs', parentId: tvs.id },
      { name: 'KIVI', slug: 'kivi-tvs', parentId: tvs.id },
      { name: 'Sony', slug: 'sony-tvs', parentId: tvs.id },
      { name: 'Xiaomi', slug: 'xiaomi-tvs', parentId: tvs.id },
    ],
  });

  // ======================
  // 🖥 КОМПЬЮТЕРЫ
  // ======================
  const computers = await prisma.category.create({
    data: { name: 'Компьютеры', slug: 'computers', parentId: laptopPc.id },
  });

  const laptop = await prisma.category.create({
    data: {
      name: 'Ноутбуки',
      slug: 'laptop',
      parentId: laptopPc.id,
    },
  });
  const smartphones = await prisma.category.create({
    data: {
      name: 'Смартфоны',
      slug: 'smartphones',
      parentId: electronics.id,
    },
  });

  const accessories = await prisma.category.create({
    data: {
      name: 'Аксессуары',
      slug: 'accessories',
      parentId: electronics.id,
    },
  });
  const chargers = await prisma.category.create({
    data: {
      name: 'Зарядные устройства',
      slug: 'chargers',
      parentId: accessories.id,
    },
  });
  const powerBank = await prisma.category.create({
    data: {
      name: 'Power Bank',
      slug: 'powerBank',
      parentId: accessories.id,
    },
  });
  const cables = await prisma.category.create({
    data: {
      name: 'Cables',
      slug: 'cables',
      parentId: accessories.id,
    },
  });
  const headphones = await prisma.category.create({
    data: {
      name: 'Наушники',
      slug: 'headphones',
      parentId: accessories.id,
    },
  });

  const applePhones = await prisma.category.create({
    data: {
      name: 'Apple',
      slug: 'apple-phones',
      parentId: smartphones.id,
    },
  });
  const xiaomiPhones = await prisma.category.create({
    data: {
      name: 'Xiaomi',
      slug: 'xiaomi-phones',
      parentId: smartphones.id,
    },
  });
  const motorolaPhones = await prisma.category.create({
    data: {
      name: 'Motorola',
      slug: 'motorola-phones',
      parentId: smartphones.id,
    },
  });
  const ulefonePhones = await prisma.category.create({
    data: {
      name: 'Ulefone',
      slug: 'ulefone-phones',
      parentId: smartphones.id,
    },
  });
  const onePlusPhones = await prisma.category.create({
    data: {
      name: 'OnePlus',
      slug: 'onePlus-phones',
      parentId: smartphones.id,
    },
  });
  const huaweiPhones = await prisma.category.create({
    data: {
      name: 'Huawei',
      slug: 'huawei-phones',
      parentId: smartphones.id,
    },
  });

  const samsung = await prisma.category.create({
    data: { name: 'Samsung', slug: 'samsung', parentId: smartphones.id },
  });

  const appleLaptops = await prisma.category.create({
    data: { name: 'Apple', slug: 'apple-laptops', parentId: laptop.id },
  });

  const gamingLaptops = await prisma.category.create({
    data: {
      name: 'Игровые ноутбуки',
      slug: 'gaming-laptops',
      parentId: laptop.id,
    },
  });

  const asusRog = await prisma.category.create({
    data: { name: 'ASUS ROG', slug: 'asus-rog', parentId: gamingLaptops.id },
  });

  const asusTuf = await prisma.category.create({
    data: {
      name: 'ASUS TUF Gaming',
      slug: 'asus-tuf-gaming',
      parentId: gamingLaptops.id,
    },
  });

  const lenovoLegion = await prisma.category.create({
    data: {
      name: 'Lenovo Legion',
      slug: 'lenovo-legion',
      parentId: gamingLaptops.id,
    },
  });

  const lenovoLoq = await prisma.category.create({
    data: {
      name: 'Lenovo LOQ',
      slug: 'lenovo-loq',
      parentId: gamingLaptops.id,
    },
  });

  const hpOmen = await prisma.category.create({
    data: { name: 'HP Omen', slug: 'hp-omen', parentId: gamingLaptops.id },
  });
  return {
    asusRog,
    asusTuf,
    lenovoLegion,
    lenovoLoq,
    hpOmen,
    //
    electronics,
    smartphones,
    applePhones,
    samsung,
    appleLaptops,
    gamingLaptops,
    laptopPc,
    laptop,
    xiaomiPhones,
    motorolaPhones,
    ulefonePhones,
    onePlusPhones,
    huaweiPhones,
    computers,
  };
}
