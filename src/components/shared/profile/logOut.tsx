'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

export const LogOut: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const hendleLogOut = () => {
    signOut();
    router.push('/');
    console.log('User logged out');
  };
  return (
    <Button
      variant='outline'
      onClick={() => hendleLogOut()}
      className='border-green text-green bg-gray-dark-medium hover:text-black hover:bg-green transition-all duration-[0.3s] cursor-pointer'
    >
      {' '}
      Выйти
    </Button>
  );
};
