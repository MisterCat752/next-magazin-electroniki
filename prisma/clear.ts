export async function clearDatabase(prisma: any) {
  await prisma.$transaction([
    // Сначала удаляем самые "нижние" зависимости
    prisma.productVariantOptionValue.deleteMany(),
    prisma.specification.deleteMany(),

    // OrderItem ссылается и на ProductVariant, и на Order — удаляем их раньше родителей
    prisma.orderItem.deleteMany(),
    prisma.order.deleteMany(),

    // Теперь можно удалять варианты и товары
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany(),

    // Остальные справочные таблицы
    prisma.filterValue.deleteMany(),
    prisma.filter.deleteMany(),
    prisma.optionValue.deleteMany(),
    prisma.option.deleteMany(),

    // Спецификации/группы/секции
    prisma.specGroup.deleteMany(),
    prisma.specSection.deleteMany(),

    // Категории и пользователи в самом конце
    prisma.category.deleteMany(),
    prisma.user.deleteMany(),
  ]);
}
