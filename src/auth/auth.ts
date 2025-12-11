// src/auth.ts
import NextAuth from 'next-auth';
import type { NextAuthOptions, Session, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/prisma/prisma-client';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: 'jwt',
  },

  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) throw new Error('Введите email и пароль');

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new Error('Пользователь не найден');

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('Неверный пароль');

        return {
          id: String(user.id),
          email: user.email,
          name: user.fullName,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user?: User }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
};

export default NextAuth(authOptions);
