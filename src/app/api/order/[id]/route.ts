// app/api/product/[id]/route.ts
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } } // params уже приходит как объект
) {
  const paramsId = await params;
  const productId = paramsId.id;

  const product = await prisma.order.findUnique({
    where: { id: productId },
    include: {
      items: {
        include: {
          productVariant: true,
        },
      },
    },
  });

  return NextResponse.json(product);
}
