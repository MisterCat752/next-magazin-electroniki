export async function clearDatabase(prisma: any) {
  await prisma.$transaction([
    prisma.productVariantOptionValue.deleteMany(),
    prisma.specification.deleteMany(),
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany(),
    prisma.filterValue.deleteMany(),
    prisma.filter.deleteMany(),
    prisma.optionValue.deleteMany(),
    prisma.option.deleteMany(),
    prisma.specGroup.deleteMany(),
    prisma.specSection.deleteMany(),
    prisma.category.deleteMany(),
  ]);
}
