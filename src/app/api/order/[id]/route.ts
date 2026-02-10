// app/api/product/[id]/route.ts
import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      variants: {
        include: {
          specifications: true,
        },
      },
      filters: true,
    },
  });

  if (!product) {
    return NextResponse.json({ error: 'Товар не найден' }, { status: 404 });
  }

  return NextResponse.json(product);
}
