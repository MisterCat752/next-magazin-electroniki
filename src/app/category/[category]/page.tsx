import { prisma } from '@/prisma/prisma-client';
import { CategoryContent } from '@/components/shared/category-component';
import type { IProduct, IProductVariants } from '@/types/products.types';

interface Props {
  params: { category: string };
}

function getMinPriceFromVariants(
  variants?: { price: number }[] | null
): number {
  if (!variants || variants.length === 0) return 0;
  return Math.min(...variants.map((v) => v.price));
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  const categoryData = await prisma.category.findUnique({
    where: { slug: category },
    include: {
      products: { include: { variants: true, filters: true } },
      filters: { include: { values: true } },
    },
  });

  const mapProducts = (products: any[]): IProduct[] =>
    products.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: getMinPriceFromVariants(p.variants),
      variants: p.variants.map((v: any) => ({
        id: v.id,
        sku: v.sku,
        price: v.price,
        stock: v.stock,
        productId: v.productId,
      })) as IProductVariants[],
      imageUrl: p.imageUrl ?? undefined,
    }));

  const initialProducts = mapProducts(categoryData?.products || []);
  return (
    <div className='min-h-[100vh]'>
      <CategoryContent
        category={category}
        initialProducts={initialProducts}
        filters={categoryData?.filters || []}
      />
    </div>
  );
}
