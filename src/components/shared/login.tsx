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
} from '../ui';
import { User } from 'lucide-react';
import RegisterForm from './register/RegisterForm';
import { LoginForm } from './register/LoginForm';

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className={cn(className, '')}>
      <Dialog>
        <DialogTrigger asChild>
          <User className='text-white hover:text-green cursor-pointer' />
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] py-5 border-none text-white bg-[#1c1c1e]'>
          <DialogHeader className='mt-15'>
            <DialogTitle>Войдите в свой акаунт</DialogTitle>
          </DialogHeader>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          {/* <RegisterForm />
          <LoginForm /> */}
          {/* <div className='grid mt-5 gap-4'>
              <div className='grid gap-3 '>
                <Input
                  id='name-1'
                  name='email'
                  type='email'
                  placeholder='Эл.почта'
                  className=' text-white py-5 px-8 bg-gray-medium'
                />
              </div>
              <div className='grid gap-3'>
                <Input
                  id='username-1'
                  name='password'
                  type='password'
                  placeholder='Пароль'
                  className='text-white py-5 px-8 bg-gray-medium'
                />
              </div>
            </div> */}
          {/* <Button className='w-full bg-green mt-10 text-black' type='submit'>
              Войдите в свой акаунт
            </Button> */}
          <Button
            onClick={() => setIsLogin((prev) => !prev)}
            className='w-full bg-green mt-10  py-[24px] px-[16px] text-[16px] text-center rounded text-black font-semibold'
          >
            {isLogin ? 'Зарегистрироваться' : 'Войдите в свой акаунт'}
          </Button>

          <p className='text-[13px] text-gray-medium text-center font-bold my-5'>
            Аутентификация другими методами
          </p>

          <DialogFooter className='flex flex-col gap-3 '>
            <div className='flex bg-gray-medium   py-2 px-8 items-center justify-center gap-2 w-full max-w-[425px]'>
              <p className=' '>Google</p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
