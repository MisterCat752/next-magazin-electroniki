'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { signOut } from 'next-auth/react';
import { LogOut } from './logOut';
import { useFilterStore } from '@/store/filterStore';
interface Props {
  className?: string;
  session?: any;
}
const sidebarItems = [
  { label: 'Личный кабинет', link: '/profile' },
  { label: 'Мои заказы', link: '/profile/orders' },
  { label: 'Настройки', link: '/profile/settings' },
  { label: 'Список избраных', link: '/profile/favorites' },
];
export const ProfileSideBar: React.FC<Props> = ({ className, session }) => {
  const profileSideBar = useFilterStore((s) => s.profileSideBar);
  return (
    <div
      className={cn(
        className,
        profileSideBar ? 'hidden lg:block' : '',
        'text-white w-[300px] min-h-[900px] p-5 rounded-[16px] bg-gray-dark-medium '
      )}
    >
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
