'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { signOut } from 'next-auth/react';
import { LogOut } from './logOut';
import { useFilterStore } from '@/store/filterStore';
import { X } from 'lucide-react';
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
  const toggleProfile = useFilterStore((s) => s.toggleProfile);
  return (
    <div
      className={cn(
        className,
        'text-white w-[300px] min-h-[900px] p-5 rounded-[16px] bg-gray-dark transition-all duration-300',

        profileSideBar ? 'hidden lg:block' : 'fixed top-20 left-0   z-50  ',
        'text-white w-[300px] min-h-[900px] p-5 rounded-[16px]   ',
      )}
    >
      <h1 className='text-2xl my-4 font-bold'>Профиль пользователя</h1>
      <X
        className='absolute top-5 right-5'
        onClick={toggleProfile}
        size={28}
        strokeWidth={3}
      />

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
