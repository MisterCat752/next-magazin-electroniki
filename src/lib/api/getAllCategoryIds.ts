export async function getAllCategoryIds(
  prisma: any,
  rootId: string,
): Promise<string[]> {
  const ids: string[] = [rootId];

  const children = await prisma.category.findMany({
    where: { parentId: rootId },
    select: { id: true },
  });

  for (const child of children) {
    const childIds = await getAllCategoryIds(prisma, child.id);
    ids.push(...childIds);
  }

  return ids;
}
