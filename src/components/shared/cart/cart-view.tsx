'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/container';
import { Button, Input } from '@/components/ui';
import { CartProduct } from './cart-product';
import { CartSum } from './cart-sum';
import { useCartStore, CartItem } from '@/store/cartStore';
import { useHydrated } from '@/hooks/use-hydrated';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

interface Props {
  className?: string;
}

export const CartView: React.FC<Props> = ({ className }) => {
  const hydrated = useHydrated();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((s) => s.totalPrice());

  // Для формы
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!hydrated) return null;

  const handlePlaceOrder = async () => {
    if (!firstName || !lastName || !phone || !email) {
      alert('Заполните все поля');
      return;
    }

    const orderData = {
      fullName: `${firstName} ${lastName}`,
      email,
      phone,
      totalPrice: total,
      items: items.map((i: any) => ({
        variantId: i.variantId, // ✅ только id
        quantity: i.count,
        price: i.price,
      })),
    };

    try {
      console.log('Заказ:', items, orderData);
      const res = await axios.post('/api/order', orderData); // передаем напрямую

      if (res.status === 200) {
        alert('Заказ успешно размещён');
        // Очистить корзину
        useCartStore.getState().clearCart();
      } else {
        alert('Ошибка при размещении заказа');
      }
    } catch (err) {
      console.error(err);
      alert('Ошибка сети');
    }
  };

  return (
    <div className={cn(className, 'min-h-[100vh] py-20 pb-100 bg-[#000]')}>
      <Container>
        <h1 className='text-2xl font-bold text-white'>Корзина</h1>

        <div className='flex mt-10 gap-10 justify-between'>
          {/* Список товаров */}
          <div className='flex flex-col gap-7 w-full'>
            {items.map((item) => (
              <CartProduct
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                id={item.id}
                count={item.count}
              />
            ))}
          </div>

          {/* Форма заказа */}
          <div className='bg-gray-dark p-13 w-full rounded-2xl'>
            <div className='flex gap-3'>
              <div className='w-full'>
                <Input
                  className='text-[12px] bg-gray-medium text-white py-4 px-5'
                  type='text'
                  placeholder='Имя*'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  className='text-[12px] mt-3 bg-gray-medium text-white py-4 px-5'
                  type='text'
                  placeholder='Фамилия*'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='w-full'>
                <Input
                  className='text-[12px] bg-gray-medium text-white py-4 px-5'
                  type='text'
                  placeholder='Номер телефона*'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  className='text-[12px] mt-3 bg-gray-medium text-white py-4 px-5'
                  type='email'
                  placeholder='Email*'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className='mt-20'>
              <Button
                className='bg-[#C8FB57] py-[26px] px-[18px] w-full max-w-[220px]'
                onClick={handlePlaceOrder}
              >
                Разместить заказ
              </Button>
            </div>
          </div>
        </div>

        {/* Сумма заказа */}
        <div className='mt-10 max-w-[623px] bg-gray-dark p-13 w-full rounded-2xl'>
          <CartSum
            bonusReceived={942}
            productCost={total}
            discount={0}
            deliveryCost={0}
            appliedBonus={0}
            currency='лей'
          />
        </div>
      </Container>
    </div>
  );
};
