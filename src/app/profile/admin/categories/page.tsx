import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const category = await prisma.category.create({
    data: {
      name: body.name,
      slug: body.slug,
      parentId: body.parentId || null,
    },
  });

  return NextResponse.json(category);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.category.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
