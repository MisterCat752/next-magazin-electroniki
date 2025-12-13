import React from 'react';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { signOut } from 'next-auth/react';
import { LogOut } from './logOut';
interface Props {
  className?: string;
}
const sidebarItems = [
  { label: 'Личный кабинет', link: '/profile' },
  { label: 'Мои заказы', link: '/profile/orders' },
  { label: 'Настройки', link: '/profile/settings' },
  { label: 'Список избраных', link: '/profile/favorites' },
];
export const ProfileSideBar: React.FC<Props> = async ({ className }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className={cn(className, 'text-white')}>
      <h1 className='text-2xl my-4 font-bold'>Профиль пользователя</h1>

      <div className='flex gap-2'>
        <div className='rounded-full  overflow-hidden'>
          <img src='/user.jpeg' className='w-full h-full' />
        </div>

        <div className=''>
          <p>Email3: {session?.user?.email}</p>
          <p>ID: {session?.user?.id}</p>
        </div>
      </div>
      {sidebarItems.map((item) => (
        <div
          key={item.link}
          className='p-4  text-[17px] font-bold hover:text-green transition-all duration-[0.3s] cursor-pointer'
        >
          <Link href={item.link}>{item.label}</Link>
        </div>
      ))}
      <div className='p-4'>
        <LogOut />
      </div>
    </div>
  );
};
