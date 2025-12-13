import { ProductImages, ProductInfoBlock, Slider } from '@/components/shared';
import ProductView from '@/components/shared/products/product-view';

import { prisma } from '@/prisma/prisma-client';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Преобразуем id в число, если в БД int
  const productId = parseInt(id, 10);

  if (!productId) return <p>Товар не найден</p>;

  return <ProductView productId={productId} />;
}
