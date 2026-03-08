import { Skeleton } from '@/components/ui/skeleton';
import { Container } from '@/components/layout/container';

export default function ProductViewSkeleton() {
  return (
    <main className='pt-[100px] pb-[100px] bg-[#000]'>
      <Container>
        <div className='flex flex-wrap lg:flex-nowrap gap-6'>
          {/* Images */}
          <div className='w-full relative space-y-4 h-[539px]'>
            <Skeleton className=' bg-gray-dark  max-w-[625px] h-full  rounded-2xl' />
            <div className='flex gap-3 absolute left-3 bottom-3 '>
              <Skeleton className='bg-gray w-[80px] h-[80px] rounded-xl' />
              <Skeleton className='bg-gray w-[80px] h-[80px] rounded-xl' />
              <Skeleton className='bg-gray w-[80px] h-[80px] rounded-xl' />
            </div>
          </div>

          {/* Options */}
          <div className='bg-gray-dark w-full p-4 rounded-2xl text-white space-y-4'>
            <Skeleton className='bg-gray h-11 w-[70%]' />

            {[...Array(3)].map((_, i) => (
              <div key={i} className='space-y-2'>
                <Skeleton className='bg-gray h-4 w-[120px] my-2' />

                <div className='flex gap-2 mt-3'>
                  <Skeleton className='bg-gray h-8 w-[60px]' />
                  <Skeleton className='bg-gray h-8 w-[60px]' />
                  <Skeleton className='bg-gray h-8 w-[60px]' />
                </div>
              </div>
            ))}

            <Skeleton className='bg-gray h-8 w-[120px] mt-30' />

            <Skeleton className='bg-gray h-[50px] w-[280px] rounded-lg' />
          </div>
        </div>

        {/* Specifications */}
        <div className='w-full mt-11 space-y-4 '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Skeleton className='bg-gray-dark h-[160px] rounded-2xl' />
            <Skeleton className='bg-gray-dark h-[160px] rounded-2xl' />
            <Skeleton className='bg-gray-dark h-[160px] rounded-2xl' />
            <Skeleton className='bg-gray-dark h-[160px] rounded-2xl' />
          </div>
        </div>

        {/* Similar products */}
        <div className='mt-10 space-y-4'>
          <Skeleton className='bg-gray-dark h-6 w-[220px]' />

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <Skeleton className='bg-gray-dark h-[320px] rounded-xl' />
            <Skeleton className='bg-gray-dark h-[320px] rounded-xl' />
            <Skeleton className='bg-gray-dark h-[320px] rounded-xl' />
            <Skeleton className='bg-gray-dark h-[320px] rounded-xl' />
          </div>
        </div>
      </Container>
    </main>
  );
}
