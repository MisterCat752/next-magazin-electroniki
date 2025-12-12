'use client';
import React from 'react';
import { Container } from '@/components/layout/container';
import Link from 'next/link';

interface Props {
  className?: string;
  session?: any;
}

export const ProfileContent: React.FC<Props> = ({ className, session }) => {
  return (
    <main className='bg-[#000] w-full py-10 flex gap-4    justify-between '>
      <Container className='w-full'>
        <div className='flex items-center gap-2 mb-5'>
          <Link
            href='/'
            className='  text-gray-medium font-semibold text-[15px] hover:text-green transition-all duration-[0.3s] '
          >
            Главная
          </Link>
          <span className='text-white'>|</span>
          <p className=' text-white font-semibold text-[15px]'>
            Личный кабинет
          </p>
        </div>
        <h2 className='text-white font-bold text-2xl mb-5'>
          Детали вашего профиля
        </h2>
        <div className='bg-gray-dark w-full max-w-[800px] min-h-[500px] rounded-[16px] p-8'>
          <div className=''>
            <p className='text-white font-extrabold text-[20px]'>
              Имя : {session?.user?.email}
            </p>
            <p className='text-white font-extrabold text-[20px]'>
              Email : {session?.user?.name}
            </p>
            <p className='text-white font-extrabold text-[20px]'>
              ID: {session?.user?.id}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};
