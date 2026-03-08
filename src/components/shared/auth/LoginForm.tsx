'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        toast.success('Successfully logged in!');
        router.push('/profile');
      }
    } catch (err: any) {
      setError(err.message || 'Server error');
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 max-w-sm w-full'
      >
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border p-2 rounded ${!email && error ? 'border-red-500' : ''}`}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`border p-2 rounded ${!password && error ? 'border-red-500' : ''}`}
        />
        <button
          type='submit'
          className='bg-blue-500 mt-5 text-white p-2 rounded'
        >
          Sign In
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  );
}
