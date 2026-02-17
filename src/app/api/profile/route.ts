import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth';
import { prisma } from '@/prisma/prisma-client';
import fs from 'fs';
import path from 'path';

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData();

  const fullName = formData.get('fullName') as string;
  const avatar = formData.get('avatar') as File | null;

  let imageUrl = session.user.image;

  if (avatar && avatar.size > 0) {
    const bytes = await avatar.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${avatar.name}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, buffer);

    imageUrl = `/uploads/${fileName}`;
  }

  const updatedUser = await prisma.user.update({
    where: { id: Number(session.user.id) },
    data: {
      fullName,
      image: imageUrl,
    },
  });

  return NextResponse.json(updatedUser);
}
