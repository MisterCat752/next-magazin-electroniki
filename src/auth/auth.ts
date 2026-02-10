import NextAuth from 'next-auth';
import type { NextAuthOptions, Session, User as NextAuthUser } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/prisma/prisma-client';
import bcrypt from 'bcryptjs';
import type { User as PrismaUser } from '@prisma/client';
import { JWT } from 'next-auth/jwt';
// Расширяем JWT, добавляем id
interface MyJWT extends JWT {
  id: string;
}
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  session: { strategy: 'jwt' },

  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password)
          throw new Error('Введите email и пароль');

        const user: PrismaUser | null = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) throw new Error('Пользователь не найден');

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) throw new Error('Неверный пароль');

        return {
          id: String(user.id),
          email: user.email,
          name: user.fullName,
        } as NextAuthUser;
      },
    }),
  ],

  callbacks: {
    // JWT callback
    async jwt({ token, user }): Promise<MyJWT> {
      if (user) {
        token.id = user.id; // теперь id есть
      }
      return token as MyJWT;
    },

    // Session callback
    async session({ session, token }): Promise<Session> {
      if (session.user) {
        session.user.id = (token as MyJWT).id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
