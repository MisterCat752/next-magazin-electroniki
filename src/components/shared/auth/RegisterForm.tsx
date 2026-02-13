'use client';
import { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, fullName }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
    } else {
      setSuccess('Регистрация успешна!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-sm'>
      <input
        type='text'
        placeholder='Имя'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className='border p-2 rounded'
      />
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
        Зарегистрироваться
      </button>
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}
    </form>
  );
}
