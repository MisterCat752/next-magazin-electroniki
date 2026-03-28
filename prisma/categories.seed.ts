export async function seedCategories(prisma: any) {
  const laptopPc = await prisma.category.create({
    data: { name: 'Laptops | PCs', slug: 'laptop-pc' },
  });

  const electronics = await prisma.category.create({
    data: { name: 'Phones | Tablets', slug: 'electronics' },
  });

  // ======================
  // 🖥 COMPUTERS
  // ======================
  const computers = await prisma.category.create({
    data: { name: 'Computers', slug: 'computers', parentId: laptopPc.id },
  });

  const laptop = await prisma.category.create({
    data: {
      name: 'Laptops',
      slug: 'laptop',
      parentId: laptopPc.id,
    },
  });

  const smartphones = await prisma.category.create({
    data: {
      name: 'Smartphones',
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

  const gamingLaptops = await prisma.category.create({
    data: {
      name: 'Gaming Laptops',
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
    gamingLaptops,
    laptopPc,
    laptop,
    computers,
  };
}
