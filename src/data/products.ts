import { IProduct } from '@/types';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy S25+, 12GB/512Гб, Мятный',
    price: 120,
    image: '/xiamo.webp',
  },
  { id: 2, name: 'Футболка', price: 40, image: '/xiamo.webp' },
  { id: 3, name: 'Рюкзак', price: 80, image: '/xiamo.webp' },
  { id: 4, name: 'Кепка', price: 20, image: '/xiamo.webp' },
  { id: 5, name: 'Часы', price: 200, image: '/xiamo.webp' },
  { id: 6, name: 'Куртка', price: 160, image: '/xiamo.webp' },
];

export const products2 = [
  {
    id: 1,
    name: 'Смартфон SuperPhone X',
    price: 7999,
    oldPrice: 9999,
    discount: 20,
    code: 'SPX-123',
    images: [
      '/categories/avto.webp',
      '/categories/gaming.webp',
      '/categories/krasota.webp',
      '/categories/pc-laptop.webp',
    ],
  },
  {
    id: 2,
    name: 'Наушники BassBoost 3000',
    price: 1299,
    images: [
      'https://via.placeholder.com/400x400?text=Главное+изображение',
      'https://via.placeholder.com/400x400?text=Фото+1',
    ],
    code: 'BB3000',
  },
];
