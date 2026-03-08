'use client';
import React from 'react';
import { Input, Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useCartForm } from '@/hooks/useCartForm';

export const CartForm = () => {
  const {
    firstName,
    lastName,
    phone,
    email,
    errors,
    setFirstName,
    setLastName,
    setPhone,
    setEmail,
    handlePlaceOrder,
  } = useCartForm();

  return (
    <div className='bg-gray-dark p-6 lg:p-13 w-full rounded-2xl h-fit'>
      <div className='flex flex-col gap-3'>
        <Input
          className={cn(
            'text-[12px] bg-gray-medium text-white py-4 px-5 w-full',
            errors.firstName && 'border border-red-500',
          )}
          type='text'
          placeholder='First name*'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          className={cn(
            'text-[12px] bg-gray-medium text-white py-4 px-5 w-full',
            errors.lastName && 'border border-red-500',
          )}
          type='text'
          placeholder='Last name*'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          className={cn(
            'text-[12px] bg-gray-medium text-white py-4 px-5 w-full',
            errors.phone && 'border border-red-500',
          )}
          type='text'
          placeholder='Phone number*'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          className={cn(
            'text-[12px] bg-gray-medium text-white py-4 px-5 w-full',
            errors.email && 'border border-red-500',
          )}
          type='email'
          placeholder='Email*'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='mt-8'>
        <Button
          className='bg-[#C8FB57] py-[26px] px-[18px] w-full text-black'
          onClick={handlePlaceOrder}
        >
          Place order
        </Button>
      </div>
    </div>
  );
};
