'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from '../../ui';
import { User } from 'lucide-react';
import RegisterForm from './RegisterForm';
import { LoginForm } from './LoginForm';
import { useSession } from 'next-auth/react';
import { stat } from 'fs';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const { data: session, status } = useSession();
  return (
    <div className={cn(className, '')}>
      {status === 'authenticated' ? (
        <Link href='/profile'>
          <User className='text-white hover:text-green cursor-pointer' />
        </Link>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <User className='text-white hover:text-green cursor-pointer' />
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px] py-5 border-none text-white bg-[#1c1c1e]'>
            <DialogHeader className='mt-15'>
              <DialogTitle>Войдите в свой акаунт</DialogTitle>
            </DialogHeader>

            {isLogin ? <LoginForm /> : <RegisterForm />}

            <Button
              onClick={() => setIsLogin((prev) => !prev)}
              className='w-full bg-green mt-10  py-[24px] px-[16px] text-[16px] text-center rounded text-black font-semibold'
            >
              {isLogin ? 'Зарегистрироваться' : 'Войдите в свой акаунт'}
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
