import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get('category');

    if (!categorySlug) {
      return NextResponse.json({ error: 'Category required' }, { status: 400 });
    }

    // Находим категорию
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
      select: { id: true },
    });

    if (!category) return NextResponse.json([]);

    // Берем фильтры категории
    const filters = await prisma.filter.findMany({
      where: { category: { some: { id: category.id } } },
      include: { values: true },
    });

    // Возвращаем только id, name и values
    const result = filters.map((filter) => ({
      id: filter.id,
      name: filter.name,
      values: filter.values.map((v) => ({
        id: v.id,
        value: v.value,
      })),
    }));

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
