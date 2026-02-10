export async function seedCategories(prisma: any) {
  const electronics = await prisma.category.create({
    data: { name: 'Телефоны | Планшеты', slug: 'electronics' },
  });
  const laptopPc = await prisma.category.create({
    data: { name: 'Ноутбуки | ПК', slug: 'laptop-pc' },
  });

  // ======================
  // 🚗 ТРАНСПОРТ | ТУРИЗМ
  // ======================
  const transportTourism = await prisma.category.create({
    data: {
      name: 'Транспорт | Туризм',
      slug: 'transport-tourism',
    },
  });
 
  // ======================
  // 🎮 ГЕЙМИНГ
  // ======================
  const gaming = await prisma.category.create({
    data: { name: 'Гейминг', slug: 'gaming' },
  });

  // ======================
  // 🎮 ИГРОВЫЕ ПРИСТАВКИ
  // ======================
  const consoles = await prisma.category.create({
    data: {
      name: 'Игровые приставки',
      slug: 'gaming-consoles',
      parentId: gaming.id,
    },
  });

  const playstation = await prisma.category.create({
    data: {
      name: 'Sony PlayStation',
      slug: 'playstation',
      parentId: consoles.id,
    },
  });

  const xbox = await prisma.category.create({
    data: {
      name: 'Microsoft Xbox',
      slug: 'xbox',
      parentId: consoles.id,
    },
  });

  const nintendo = await prisma.category.create({
    data: {
      name: 'Nintendo',
      slug: 'nintendo',
      parentId: consoles.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Nintendo Switch 2',
      slug: 'nintendo-switch-2',
      parentId: consoles.id,
    },
  });

  // ======================
  // 🥽 VR
  // ======================
  await prisma.category.create({
    data: {
      name: 'VR очки',
      slug: 'vr-headsets',
      parentId: gaming.id,
    },
  });

  // ======================
  // 🖱 ИГРОВАЯ ПЕРИФЕРИЯ
  // ======================
  const gamingPeripheral = await prisma.category.create({
    data: {
      name: 'Игровая периферия',
      slug: 'gaming-peripherals',
      parentId: gaming.id,
    },
  });

  await prisma.category.createMany({
    data: [
      {
        name: 'Мониторы',
        slug: 'gaming-monitors',
        parentId: gamingPeripheral.id,
      },
      { name: 'Мыши', slug: 'gaming-mice', parentId: gamingPeripheral.id },
      {
        name: 'Наушники',
        slug: 'gaming-headphones',
        parentId: gamingPeripheral.id,
      },
      {
        name: 'Клавиатуры',
        slug: 'gaming-keyboards',
        parentId: gamingPeripheral.id,
      },
      {
        name: 'Коврики для мыши',
        slug: 'mousepads',
        parentId: gamingPeripheral.id,
      },
    ],
  });

  // ======================
  // 💿 ИГРЫ
  // ======================
  const games = await prisma.category.create({
    data: {
      name: 'Игры',
      slug: 'games',
      parentId: gaming.id,
    },
  });

  await prisma.category.createMany({
    data: [
      {
        name: 'Для PlayStation',
        slug: 'games-playstation',
        parentId: games.id,
      },
      { name: 'Для Xbox', slug: 'games-xbox', parentId: games.id },
      { name: 'Для Nintendo', slug: 'games-nintendo', parentId: games.id },
    ],
  });

  // ======================
  // 🪑 ИГРОВЫЕ КРЕСЛА
  // ======================
  await prisma.category.create({
    data: {
      name: 'Игровые кресла',
      slug: 'gaming-chairs',
      parentId: gaming.id,
    },
  });

  // ======================
  // 🎮 КОНТРОЛЛЕРЫ
  // ======================
  const controllers = await prisma.category.create({
    data: {
      name: 'Контроллеры',
      slug: 'controllers',
      parentId: gaming.id,
    },
  });

  await prisma.category.createMany({
    data: [
      { name: 'Геймпады', slug: 'gamepads', parentId: controllers.id },
      { name: 'Рули', slug: 'steering-wheels', parentId: controllers.id },
      { name: 'Джойстики', slug: 'joysticks', parentId: controllers.id },
      {
        name: 'Переключатели скоростей',
        slug: 'gear-shifters',
        parentId: controllers.id,
      },
    ],
  });

  // ======================
  // 🔌 АКСЕССУАРЫ ДЛЯ ПРИСТАВОК
  // ======================
  await prisma.category.create({
    data: {
      name: 'Аксессуары для приставок',
      slug: 'console-accessories',
      parentId: gaming.id,
    },
  });

  // ======================
  // 🖥 КОМПЬЮТЕРЫ И НОУТБУКИ
  // ======================
  const gamingPc = await prisma.category.create({
    data: {
      name: 'Компьютеры и ноутбуки',
      slug: 'gaming-pc',
      parentId: gaming.id,
    },
  });

  await prisma.category.createMany({
    data: [
      {
        name: 'Системные блоки',
        slug: 'gaming-desktops',
        parentId: gamingPc.id,
      },
      { name: 'Ноутбуки', slug: 'gaming-laptops-2', parentId: gamingPc.id },
      {
        name: 'Компьютерные столы',
        slug: 'computer-desks',
        parentId: gamingPc.id,
      },
    ],
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
  // 🎛 АКСЕССУАРЫ ДЛЯ ТВ
  // ======================
  const tvAccessories = await prisma.category.create({
    data: {
      name: 'Аксессуары ТВ',
      slug: 'tv-accessories',
      parentId: tvs.id,
    },
  });

  await prisma.category.create({
    data: {
      name: 'Кронштейны для ТВ',
      slug: 'tv-mounts',
      parentId: tvAccessories.id,
    },
  });
  // ======================
  // 💻 НОУТБУКИ | ПК
  // ======================

  const monitors = await prisma.category.create({
    data: { name: 'Мониторы', slug: 'monitors', parentId: laptopPc.id },
  });

  await prisma.category.createMany({
    data: [
      {
        name: 'Мониторы Full HD',
        slug: 'monitors-full-hd',
        parentId: monitors.id,
      },
      { name: 'Мониторы 4K', slug: 'monitors-4k', parentId: monitors.id },
      { name: 'Мониторы 60 Гц', slug: 'monitors-60hz', parentId: monitors.id },
      {
        name: 'Мониторы 144 Гц',
        slug: 'monitors-144hz',
        parentId: monitors.id,
      },
    ],
  });

  // ======================
  // 🖥 КОМПЬЮТЕРЫ
  // ======================
  const computers = await prisma.category.create({
    data: { name: 'Компьютеры', slug: 'computers', parentId: laptopPc.id },
  });

  await prisma.category.createMany({
    data: [
      { name: 'Системные блоки', slug: 'system-units', parentId: computers.id },
      { name: 'Моноблоки', slug: 'all-in-one', parentId: computers.id },
    ],
  });

  // ======================
  // 🌐 СЕТЕВОЕ ОБОРУДОВАНИЕ
  // ======================
  const networking = await prisma.category.create({
    data: {
      name: 'Сетевое оборудование',
      slug: 'networking',
      parentId: laptopPc.id,
    },
  });

  await prisma.category.createMany({
    data: [
      { name: 'Роутеры', slug: 'routers', parentId: networking.id },
      {
        name: 'Сетевые коммутаторы',
        slug: 'switches',
        parentId: networking.id,
      },
      {
        name: 'Сетевые адаптеры',
        slug: 'network-adapters',
        parentId: networking.id,
      },
      { name: 'Ретрансляторы', slug: 'repeaters', parentId: networking.id },
      { name: 'Сетевые хранилища (NAS)', slug: 'nas', parentId: networking.id },
      { name: 'Точки доступа', slug: 'access-points', parentId: networking.id },
    ],
  });

  // ======================
  // 🧩 КОМПЛЕКТУЮЩИЕ ПК
  // ======================
  const pcParts = await prisma.category.create({
    data: {
      name: 'Комплектующие ПК',
      slug: 'pc-components',
      parentId: laptopPc.id,
    },
  });

  await prisma.category.createMany({
    data: [
      { name: 'Процессоры', slug: 'cpu', parentId: pcParts.id },
      { name: 'Материнские платы', slug: 'motherboards', parentId: pcParts.id },
      { name: 'Память', slug: 'ram', parentId: pcParts.id },
      { name: 'Жесткие диски (HDD)', slug: 'hdd', parentId: pcParts.id },
      { name: 'SSD', slug: 'ssd', parentId: pcParts.id },
      { name: 'Видеокарты', slug: 'gpu', parentId: pcParts.id },
      { name: 'Корпуса', slug: 'cases', parentId: pcParts.id },
      { name: 'Блоки питания', slug: 'psu', parentId: pcParts.id },
      { name: 'Устройства охлаждения', slug: 'cooling', parentId: pcParts.id },
      {
        name: 'Аксессуары для охлаждения',
        slug: 'cooling-accessories',
        parentId: pcParts.id,
      },
      { name: 'DVD-RW', slug: 'dvd-rw', parentId: pcParts.id },
    ],
  });

  // ======================
  // 🖱 ПЕРИФЕРИЯ ПК
  // ======================
  const peripherals = await prisma.category.create({
    data: {
      name: 'Периферия ПК',
      slug: 'pc-peripherals',
      parentId: laptopPc.id,
    },
  });

  await prisma.category.createMany({
    data: [
      { name: 'Клавиатуры', slug: 'keyboards', parentId: peripherals.id },
      { name: 'Мышки', slug: 'mice', parentId: peripherals.id },
      { name: 'Внешние HDD', slug: 'external-hdd', parentId: peripherals.id },
      { name: 'Внешние SSD', slug: 'external-ssd', parentId: peripherals.id },
      { name: 'WEB-камеры', slug: 'webcams', parentId: peripherals.id },
      { name: 'ИБП', slug: 'ups', parentId: peripherals.id },
      { name: 'Флешки USB', slug: 'usb-flash', parentId: peripherals.id },
    ],
  });

  // ======================
  // 🧠 ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ
  // ======================
  const software = await prisma.category.create({
    data: {
      name: 'Программное обеспечение',
      slug: 'software',
      parentId: laptopPc.id,
    },
  });

  await prisma.category.createMany({
    data: [
      {
        name: 'Операционные системы',
        slug: 'operating-systems',
        parentId: software.id,
      },
      {
        name: 'Антивирусные программы',
        slug: 'antivirus',
        parentId: software.id,
      },
      {
        name: 'Офисные приложения',
        slug: 'office-software',
        parentId: software.id,
      },
    ],
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
  const tablets = await prisma.category.create({
    data: {
      name: 'tablets',
      slug: 'tablets',
      parentId: electronics.id,
    },
  });
  const onePlusTablets = await prisma.category.create({
    data: {
      name: 'Планшеты OnePlus',
      slug: 'onePlus-tablets',
      parentId: tablets.id,
    },
  });
  const blackviewTablets = await prisma.category.create({
    data: {
      name: 'Планшеты Blackview',
      slug: 'blackview-tablets',
      parentId: tablets.id,
    },
  });
  const xiaomiTablets = await prisma.category.create({
    data: {
      name: 'Планшеты Xiaomi',
      slug: 'xiaomi-tablets',
      parentId: tablets.id,
    },
  });
  const appleTablets = await prisma.category.create({
    data: {
      name: 'Планшеты Apple',
      slug: 'apple-tablets',
      parentId: tablets.id,
    },
  });
  const samsungTablets = await prisma.category.create({
    data: {
      name: 'Планшеты Samsung',
      slug: 'samsung-tablets',
      parentId: tablets.id,
    },
  });
  const lenovoTablets = await prisma.category.create({
    data: {
      name: 'Планшеты Lenovo',
      slug: 'lenovo-tablets',
      parentId: tablets.id,
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

  const laptops = await prisma.category.create({
    data: { name: 'Ноутбуки', slug: 'laptops', parentId: electronics.id },
  });

  const appleLaptops = await prisma.category.create({
    data: { name: 'Apple', slug: 'apple-laptops', parentId: laptops.id },
  });

  const gamingLaptops = await prisma.category.create({
    data: {
      name: 'Игровые ноутбуки',
      slug: 'gaming-laptops',
      parentId: laptop.id,
    },
  });

  return {
    electronics,
    smartphones,
    applePhones,
    samsung,
    laptops,
    appleLaptops,
    gamingLaptops,
    laptopPc,
    laptop,
    xiaomiPhones,
    motorolaPhones,
    ulefonePhones,
    onePlusPhones,
    huaweiPhones,
    monitors,
    computers,
    pcParts,
    peripherals,
  };
}
