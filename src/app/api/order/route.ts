// app/api/order/route.ts
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';
interface OrderItem {
  variantId: string;
  quantity: number;
  price: number;
}

interface OrderBody {
  fullName: string;
  email: string;
  phone: string;
  totalPrice: number;
  items: OrderItem[];
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, totalPrice, items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Нет товаров для заказа' },
        { status: 400 },
      );
    }

    // Валидация
    for (const item of items) {
      if (!item.variantId || !item.quantity || !item.price) {
        return NextResponse.json(
          { error: 'Некорректные данные в заказе' },
          { status: 400 },
        );
      }
    }

    const order = await prisma.order.create({
      data: {
        fullName,
        email,
        phone,
        totalPrice,
        items: {
          create: items.map((item: OrderItem) => ({
            quantity: item.quantity,
            price: item.price,
            productVariant: { connect: { id: item.variantId } },
          })),
        },
      },
      include: { items: true },
    });

    return NextResponse.json(order);
  } catch (err) {
    console.error('Ошибка при создании заказа:', err);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
