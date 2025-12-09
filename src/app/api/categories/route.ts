import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client'; // путь поправь если другой

export async function GET() {
  try {
    // Получаем все категории + детей
    const categories = await prisma.category.findMany({
      where: { parentId: null }, // только корневые
      include: {
        children: {
          include: {
            children: {
              include: {
                children: true, // запас для более глубоких уровней
              },
            },
          },
        },
      },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json(
      { message: 'Failed to load categories' },
      { status: 500 }
    );
  }
}

export function POST() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
