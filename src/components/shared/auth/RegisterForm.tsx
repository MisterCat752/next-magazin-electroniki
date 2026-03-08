'use client';
import { useState } from 'react';
import axios from 'axios';

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

    if (!fullName || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post('/api/register', {
        email,
        password,
        fullName,
      });
      setSuccess('Registration successful!');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-sm'>
      <input
        type='text'
        placeholder='Full Name'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className={`border p-2 rounded ${!fullName && error ? 'border-red-500' : ''}`}
      />
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
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
        Register
      </button>
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}
    </form>
  );
}
