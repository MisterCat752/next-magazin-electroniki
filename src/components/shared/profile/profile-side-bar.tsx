'use client';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LogOut } from './logOut';
import { useFilterStore } from '@/store/filterStore';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation'; // ⭐ добавили
import { useSession } from 'next-auth/react';

interface Props {
  className?: string;
  session?: {
    user: {
      name: string;
      email: string;
    };
  };
}

const sidebarItems = [
  { label: 'Личный кабинет', link: '/profile' },
  { label: 'Мои заказы', link: '/profile/orders' },
  { label: 'Настройки', link: '/profile/settings' },
  { label: 'Список избраных', link: '/profile/favorites' },
];

export const ProfileSideBar: React.FC<Props> = ({ className }) => {
  const profileSideBar = useFilterStore((s) => s.profileSideBar);
  const toggleProfile = useFilterStore((s) => s.toggleProfile);
  const pathname = usePathname();
  useEffect(() => {
    if (!profileSideBar) {
      toggleProfile();
    }
  }, [pathname]);

  return (
    <div
      className={cn(
        className,
        'text-white p-5 bg-gray-dark transition-all duration-300',
        profileSideBar
          ? 'hidden lg:block lg:w-[300px] lg:relative lg:rounded-[16px]'
          : 'fixed top-0 left-0 w-full h-screen z-150 rounded-none',
      )}
    >
      <h1 className='text-2xl my-4 font-bold'>Профиль пользователя</h1>

      <X
        className='absolute block lg:hidden top-5 right-5 cursor-pointer'
        onClick={toggleProfile}
        size={28}
        strokeWidth={3}
      />

      {sidebarItems.map((item) => (
        <div
          key={item.link}
          className='p-4 text-[17px] font-bold hover:text-green transition-all duration-[0.3s] cursor-pointer'
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
