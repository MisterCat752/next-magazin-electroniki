export async function seedCategories(prisma: any) {
  const electronics = await prisma.category.create({
    data: { name: 'Электроника', slug: 'electronics' },
  });
  const laptopPc = await prisma.category.create({
    data: { name: 'Ноутбуки | ПК', slug: 'laptop-pc' },
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

  const applePhones = await prisma.category.create({
    data: {
      name: 'Apple',
      slug: 'apple-phones',
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
  };
}
