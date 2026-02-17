import NextAuth from 'next-auth';
import type {
  NextAuthOptions,
  Session,
  User as NextAuthUser,
  User,
} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/prisma/prisma-client';
import bcrypt from 'bcryptjs';
import type { User as PrismaUser } from '@prisma/client';
import { JWT } from 'next-auth/jwt';
// Расширяем JWT, добавляем id
interface MyJWT extends JWT {
  id: string;
  role?: string;
  image?: string | null;
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
          image: user.image,
          role: user.role,
          address: user.address,
          phone: user.phone,
        } as NextAuthUser;
      },
    }),
  ],

  callbacks: {
    // JWT callback
    async jwt({ token, user, trigger, session }): Promise<MyJWT> {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.image = user.image;
        token.address = (user as User).address || null;
        token.phone = (user as User).phone || null;
      }
      if (trigger === 'update' && session) {
        if (session.name) token.name = session.name;
        if (session.image) token.image = session.image;
        if (session.address) token.address = session.address;
        if (session.phone) token.phone = session.phone;
      }
      return token as MyJWT;
    },

    // Session callback
    async session({ session, token }): Promise<Session> {
      if (session.user) {
        session.user.id = (token as MyJWT).id;
        session.user.role = token.role;
        session.user.name = token.name as string;
        session.user.image = token.image;
        session.user.address = token.address;
        session.user.phone = token.phone;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
