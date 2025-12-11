import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth';
import { ProfileContent } from '@/components/shared/profile/profile-content';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className='pt-20'>
      <ProfileContent session={session} />
    </div>
  );
}
