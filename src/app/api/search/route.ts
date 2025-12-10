import { getSearchParams } from '@/lib/get-search-params';
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';
export interface GetSearchParams {
  id: number;
  name: string;
  slug: string;
  imageUrl?: string | null;
  categoryId?: string | null;
}
export async function GET(req: Request) {
  const params = getSearchParams<GetSearchParams>(req.url);

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: params.name,
        mode: 'insensitive',
      },
    },
    take: 5,
  });

  return NextResponse.json(products);
}
