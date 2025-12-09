import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

interface Params {
  category: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { category } = params;

    if (!category) {
      return NextResponse.json(
        { error: 'Категория не указана' },
        { status: 400 }
      );
    }

    // Ищем категорию по slug
    const categoryData = await prisma.category.findUnique({
      where: { slug: category },
      include: {
        products: {
          include: { variants: true },
        },
      },
    });

    if (!categoryData) {
      return NextResponse.json(
        { error: 'Категория не найдена' },
        { status: 404 }
      );
    }

    return NextResponse.json({ products: categoryData.products });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Ошибка при получении товаров' },
      { status: 500 }
    );
  }
}
