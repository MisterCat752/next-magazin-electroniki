import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  session?: any;
}
const sidebarItems = [
  { label: 'Личный кабинет', link: '/profile' },
  { label: 'Мои заказы', link: '/profile/orders' },
  { label: 'Список сравнений', link: '/profile/comparisons' },
  { label: 'Список избраных', link: '/profile/wishlist' },
];
export const ProfileSideBar: React.FC<Props> = ({ className, session }) => {
  return (
    <div className={cn(className, 'text-white')}>
      {sidebarItems.map((item) => (
        <div
          key={item.link}
          className='p-4  text-[17px] font-bold hover:bg-gray-dark-medium'
        >
          <a href={item.link}>{item.label}</a>
        </div>
      ))}
      <h1 className='text-2xl font-bold'>Профиль пользователя</h1>
      <p>Имя: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <p>ID: {session?.user?.id}</p>
    </div>
  );
};
