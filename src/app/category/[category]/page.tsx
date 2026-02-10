import { CategoryContent } from '@/components/shared/category-component';

interface Props {
  params: { category: string };
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  return (
    <div className='min-h-[100vh]'>
      <CategoryContent category={category} />
    </div>
  );
}
