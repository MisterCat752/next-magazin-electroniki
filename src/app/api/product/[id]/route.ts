// app/api/product/[id]/route.ts
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } } // params уже приходит как объект
) {
  const paramsId = await params;
  const productId = Number(paramsId.id);

  if (isNaN(productId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      category: {
        select: {
          id: true,
          name: true,
          slug: true, // 👈 ВАЖНО
        },
      },
      variants: {
        include: {
          optionValues: {
            include: {
              optionValue: { include: { option: true } },
            },
          },
          specifications: {
            include: { group: true },
          },
        },
      },
    },
  });

  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  // Преобразуем данные для клиента
  const optionsMap: Record<string, Set<string>> = {};
  product.variants.forEach((variant) => {
    variant.optionValues.forEach((ov) => {
      const name = ov.optionValue.option.name;
      const value = ov.optionValue.value;
      if (!optionsMap[name]) optionsMap[name] = new Set();
      optionsMap[name].add(value);
    });
  });

  return NextResponse.json({
    id: product.id,
    name: product.name,
    categoryId: product.categoryId, // 👈 ВОТ ОНО
    categorySlug: product.category?.slug,
    sliderUrls: product.sliderUrls,
    variants: product.variants.map((v) => ({
      id: v.id,
      sku: v.sku,
      price: v.price,
      options: v.optionValues.map((ov) => ({
        name: ov.optionValue.option.name,
        value: ov.optionValue.value,
      })),
      specs: v.specifications.map((s) => ({
        group: s.group.name,
        name: s.name,
        value: s.value,
      })),
    })),
    options: Object.entries(optionsMap).map(([name, values]) => ({
      name,
      values: Array.from(values),
    })),
  });
}
