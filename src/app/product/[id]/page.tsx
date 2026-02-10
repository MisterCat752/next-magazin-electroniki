import ProductView from '@/components/shared/products/product-view';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const productId = parseInt(id, 10);

  if (!productId) return <p>Товар не найден</p>;

  return <ProductView productId={productId} />;
}
