import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();
  const id = Number(params.id);

  const updated = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      imageUrl: body.imageUrl,
      categoryId: body.categoryId,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  await prisma.product.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ success: true });
}
