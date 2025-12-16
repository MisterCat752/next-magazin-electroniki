'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    toast.success('Successfully logined in!');

    if (res?.error) {
      setError(res.error);
    } else {
      console.log('Успешный вход');
      router.push('/profile'); // редирект после успешного входа
    }
  };

  return (
    <div className='flex justify-center items-center  '>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 max-w-sm w-full'
      >
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-2 rounded'
        />
        <input
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border p-2 rounded'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Войти
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  );
}
