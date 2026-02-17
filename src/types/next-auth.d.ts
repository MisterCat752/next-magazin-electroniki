import NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      image?: string | null;
      address?: string | null;
      phone?: string | null;
    } & DefaultSession['user'];
  }
  export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    address?: string | null;
    phone?: string | null;
    image?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role?: string;
    image?: string | null;
    address?: string | null;
    phone?: string | null;
  }
}
