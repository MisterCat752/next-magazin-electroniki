import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName } = await req.json();

    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: 'Введите все данные' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Пользователь уже существует' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, fullName, password: hashedPassword },
    });

    return NextResponse.json({
      message: 'Пользователь создан',
      userId: user.id,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
