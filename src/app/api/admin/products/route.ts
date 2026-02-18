// app/api/admin/products/route.ts
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      variants: {
        include: {
          specifications: true,
          optionValues: {
            include: {
              optionValue: true,
            },
          },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      slug: body.slug,
      imageUrl: body.imageUrl,
      sliderUrls: body.sliderUrls || [],
      categoryId: body.categoryId,
      variants: {
        create: body.variants.map((variant: any) => ({
          sku: variant.sku,
          price: variant.price,
          stock: variant.stock,
          specifications: {
            create: variant.specifications,
          },
        })),
      },
    },
    include: {
      variants: true,
    },
  });

  return NextResponse.json(product);
}
