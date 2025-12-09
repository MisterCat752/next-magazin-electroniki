import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categorySlug = searchParams.get('category');
  const filterIds = searchParams.getAll('filters'); // массив id фильтров

  // Находим категорию
  const category = await prisma.category.findUnique({
    where: { slug: categorySlug || undefined },
  });

  if (!category)
    return NextResponse.json(
      { error: 'Категория не найдена' },
      { status: 404 }
    );

  // Получаем фильтры этой категории
  const filters = await prisma.filter.findMany({
    where: { categoryId: category.id },
    include: { values: true },
  });

  // Получаем продукты с фильтрацией
  let where: any = { categoryId: category.id };
  if (filterIds.length > 0) {
    where.filters = {
      some: { id: { in: filterIds.map((id) => Number(id)) } },
    };
  }

  const products = await prisma.product.findMany({
    where,
    include: {
      variants: { include: { optionValues: true, specifications: true } },
      filters: true,
    },
  });

  return NextResponse.json({ filters, products });
}
