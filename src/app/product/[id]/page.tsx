import ProductView from '@/components/shared/products/product-view';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const productId = parseInt(id, 10);

  return (
    <div className='min-h-[100vh] bg-[#000]'>
      <ProductView productId={productId} />
    </div>
  );
}
