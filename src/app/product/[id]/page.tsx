// import { notFound, redirect } from 'next/navigation';

// interface ProductPageProps {
//   params: { slug: string };
// }
// import Image from 'next/image';
import { ProductImages, ProductInfoBlock, Slider } from '@/components/shared';
import ProductView from '@/components/shared/products/product-view';
// import { products2 } from '@/data/products';
// import { Container } from '@/components/layout/container';

// const product = {
//   name: 'Смартфон Samsung Galaxy S25+, 12GB/512ГБ, Мятный',
//   brand: 'SAMSUNG',
//   color: 'Нержавеющая сталь',
//   colors: [
//     { name: 'Мятный', hex: '#e9f5e8', img: '/s25-mint.png' },
//     { name: 'Серый', hex: '#e6e6e8', img: '/s25-grey.png' },
//     { name: 'Черный', hex: '#222324', img: '/s25-black.png' },
//     { name: 'Синий', hex: '#b4cbe8', img: '/s25-blue.png' },
//     { name: 'Белый', hex: '#f6f7f8', img: '/s25-white.png' },
//   ],
//   memory: ['512 ГБ', '256 ГБ'],
//   selectedMemory: '512 ГБ',
//   price: 20699,
//   oldPrice: 22999,
//   discount: 10,
//   installment: 21734,
//   installmentMonths: 12,
//   image: '/s25-mint.png',
//   description: [
//     { label: 'Диагональ дисплея', value: '6.7"' },
//     { label: 'Разрешение экрана', value: '3120x1440' },
//     { label: 'Макс. Разрешение камеры', value: '50 МП' },
//     { label: 'Фронтальная камера', value: '12 МП' },
//     { label: 'Ёмкость аккумулятора', value: '4900 мА·ч' },
//     { label: 'Чипсет', value: 'Qualcomm SM8750-AB Snapdragon 8 Elite' },
//     { label: 'Платформа ПО', value: 'Android' },
//     { label: 'Степень защиты', value: 'IP68 защита от пыли/влаги' },
//   ],
// };
// const specs = [
//   {
//     label: 'Особенности',
//     value: 'Samsung DeX, Samsung Wireless DeX, Ultra Wideband (UWB) support',
//   },
//   { label: 'Размеры', value: '162.8 x 77.6 x 8.2 мм' },
//   { label: 'Код модели', value: 'S938' },
//   { label: 'Оттенок', value: 'Титан' },
//   { label: 'Бренд', value: 'Samsung' },
//   { label: 'Цвет', value: 'Угольно-черный' },
//   { label: 'Вес', value: '218 г' },
//   { label: 'Модель', value: 'Galaxy S25 Ultra' },
// ];
// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   return (
//     <main className='mt-20 '>
//       <Container>
//         <div className='max-w-6xl mt-20 mx-auto p-6  flex gap-8'>
//           {/* Left: Images */}
//           <div className='bg-white rounded-xl w-full  max-h-[600px] p-4 shadow-md   items-center'>
//             <ProductImages images={products2[0].images} />
//           </div>
//           {/* Right: Info */}
//           <div>
//             <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
//             <div className='font-semibold text-gray-700 mb-2'>
//               {product.brand}
//             </div>
//             <div className='mb-4'>
//               <span className='text-gray-600'>Цвет:</span>
//               <span className='ml-2 font-medium'>{product.color}</span>
//             </div>
//             <div className='mb-4'>
//               <span className='text-gray-600'>Объем памяти:</span>
//               <div className='flex gap-2 mt-1'>
//                 {product.memory.map((mem) => (
//                   <button
//                     key={mem}
//                     className={`px-3 py-1 border rounded-md ${
//                       mem === product.selectedMemory
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-white text-gray-700 border-gray-300'
//                     }`}
//                   >
//                     {mem}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* Prices */}
//             <div className='flex items-center gap-3 mb-1'>
//               <span className='text-lg font-bold text-red-600'>
//                 {product.price.toLocaleString()} лей
//               </span>
//               <span className='text-sm line-through text-gray-400'>
//                 {product.oldPrice.toLocaleString()} лей
//               </span>
//               <span className='bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded'>
//                 -{product.discount}%
//               </span>
//             </div>
//             <div className='flex gap-2 mb-4'>
//               <button className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded'>
//                 В корзину
//               </button>
//               <button className='border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50'>
//                 Купить
//               </button>
//             </div>
//             {/* Description */}
//           </div>
//         </div>
//       </Container>
//       <div className=' bg-gray-light py-10 '>
//         <Container>
//           <h2 className='text-center  text-2xl font-bold text-black  '>
//             Характеристики
//           </h2>
//           <div className='grid  grid-cols-1 md:grid-cols-2 gap-4 mt-5 '>
//             <div className=' max-w-[685px] '>
//               <ProductInfoBlock title='Основные' items={specs} />
//             </div>
//             <div className='max-w-[685px]'>
//               <ProductInfoBlock title='Основные' items={specs} />
//             </div>
//             <div className='max-w-[685px]'>
//               <ProductInfoBlock title='Основные' items={specs} />
//             </div>
//             <div className='max-w-[685px]'>
//               <ProductInfoBlock title='Основные' items={specs} />
//             </div>
//           </div>
//         </Container>
//       </div>
//     </main>
//   );
// }
import { prisma } from '@/prisma/prisma-client';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Преобразуем id в число, если в БД int
  const productId = parseInt(id, 10);
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      variants: {
        include: {
          optionValues: {
            include: { optionValue: { include: { option: true } } },
          },
          specifications: { include: { group: true } },
        },
      },
    },
  });
  console.log(product, 'product1');
  if (!product) return <p>Товар не найден</p>;

  return <ProductView product={product} />;
}
