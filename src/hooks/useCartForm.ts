'use client';
import { useState, useEffect } from 'react';
import { useCartStore, CartItem } from '@/store/cartStore';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

interface Errors {
  firstName: boolean;
  lastName: boolean;
  phone: boolean;
  email: boolean;
}

export const useCartForm = () => {
  const { data: session } = useSession();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((s) => s.totalPrice());

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Errors>({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    if (session?.user) {
      const nameParts = session.user.name?.split(' ') || [];
      setFirstName(nameParts[0] || '');
      setLastName(nameParts[1] || '');
      setPhone(session.user.phone || '');
      setEmail(session.user.email || '');
    }
  }, [session]);

  const validate = () => {
    const newErrors: Errors = {
      firstName: !firstName,
      lastName: !lastName,
      phone: !phone,
      email: !email,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handlePlaceOrder = async () => {
    if (!validate()) {
      toast.error('Please fill in all required fields');
      return;
    }

    const orderData = {
      fullName: `${firstName} ${lastName}`,
      email,
      phone,
      totalPrice: total,
      items: items.map((i: CartItem) => ({
        variantId: i.variantId,
        quantity: i.count,
        price: i.price,
      })),
    };

    try {
      const res = await axios.post('/api/order', orderData);
      if (res.status === 200) {
        toast.success(
          'Order placed successfully! We will contact you shortly.',
          { duration: 5000 },
        );
        useCartStore.getState().clearCart();
      } else {
        toast.error('Error placing order');
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error');
    }
  };

  return {
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
  };
};
