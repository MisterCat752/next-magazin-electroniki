export async function seedCategories(prisma: any) {
  const electronics = await prisma.category.create({
    data: { name: 'Электроника', slug: 'electronics' },
  });

  const smartphones = await prisma.category.create({
    data: {
      name: 'Смартфоны',
      slug: 'smartphones',
      parentId: electronics.id,
    },
  });

  const ios = await prisma.category.create({
    data: { name: 'iOS', slug: 'ios', parentId: smartphones.id },
  });

  const applePhones = await prisma.category.create({
    data: {
      name: 'Apple',
      slug: 'apple-phones',
      parentId: ios.id,
    },
  });

  const android = await prisma.category.create({
    data: { name: 'Android', slug: 'android', parentId: smartphones.id },
  });

  const samsung = await prisma.category.create({
    data: { name: 'Samsung', slug: 'samsung', parentId: android.id },
  });

  const xiaomi = await prisma.category.create({
    data: { name: 'Xiaomi', slug: 'xiaomi', parentId: android.id },
  });

  const oneplus = await prisma.category.create({
    data: { name: 'OnePlus', slug: 'oneplus', parentId: android.id },
  });

  const laptops = await prisma.category.create({
    data: { name: 'Ноутбуки', slug: 'laptops', parentId: electronics.id },
  });

  const appleLaptops = await prisma.category.create({
    data: { name: 'Apple', slug: 'apple-laptops', parentId: laptops.id },
  });

  const windowsLaptops = await prisma.category.create({
    data: {
      name: 'Windows',
      slug: 'windows-laptops',
      parentId: laptops.id,
    },
  });

  return {
    electronics,
    smartphones,
    ios,
    applePhones,
    android,
    samsung,
    xiaomi,
    oneplus,
    laptops,
    appleLaptops,
    windowsLaptops,
  };
}
