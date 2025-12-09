import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const categorySlug = searchParams.get('category');
  const filtersParam = searchParams.get('filters');

  if (!categorySlug) {
    return NextResponse.json(
      { error: 'Category is required' },
      { status: 400 }
    );
  }

  // --- parse filters ---
  const filterIds = filtersParam
    ? filtersParam.split(',').map((id) => Number(id))
    : [];

  try {
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
    });

    if (!category) {
      return NextResponse.json({ products: [] });
    }

    const products = await prisma.product.findMany({
      where: {
        categoryId: category.id,
        ...(filterIds.length > 0 && {
          filters: {
            some: { id: { in: filterIds } }, // товары, содержащие хотя бы один фильтр
          },
        }),
      },
      include: {
        variants: true,
        filters: true,
      },
    });

    // transform for client:
    const mapProducts = (items: any[]) =>
      items.map((p) => ({
        id: p.id,
        name: p.name,
        image: p.image,
        variants: p.variants,
        price: Math.min(
          ...(p.variants.map((v: { price: any }) => v.price) || [0])
        ),
      }));

    return NextResponse.json({
      products: mapProducts(products),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
