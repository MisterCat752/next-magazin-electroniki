import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login', // редирект если не авторизован
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: ['/profile/:path*'], // защищаем /profile и все его подмаршруты
};
