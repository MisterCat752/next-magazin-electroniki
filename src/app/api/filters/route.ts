//api/filters/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get('category');
    const filterIds = searchParams.getAll('filters'); // массив id фильтров

    if (!categorySlug) {
      return NextResponse.json(
        { error: 'Категория не указана' },
        { status: 400 },
      );
    }

    // Находим родительскую категорию
    const parentCategory = await prisma.category.findUnique({
      where: { slug: categorySlug },
    });

    if (!parentCategory) {
      return NextResponse.json(
        { error: 'Категория не найдена' },
        { status: 404 },
      );
    }

    // Получаем id родителя + всех дочерних категорий
    const allCategories = await prisma.category.findMany({
      where: {
        OR: [{ id: parentCategory.id }, { parentId: parentCategory.id }],
      },
      select: { id: true },
    });

    const categoryIds = allCategories.map((c) => c.id);

    // Получаем фильтры для этих категорий
    const filters = await prisma.filter.findMany({
      where: {
        category: { some: { id: { in: categoryIds } } },
      },
      include: { values: true },
    });

    // Получаем продукты категории и всех дочерних
    let productWhere: any = { categoryId: { in: categoryIds } };

    if (filterIds.length > 0) {
      productWhere.filters = {
        some: { id: { in: filterIds.map((id) => Number(id)) } },
      };
    }

    const products = await prisma.product.findMany({
      where: productWhere,
      include: {
        variants: { include: { optionValues: true, specifications: true } },
        filters: true,
      },
    });

    return NextResponse.json({ filters, products });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
