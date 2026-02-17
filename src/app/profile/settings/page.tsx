'use client';

import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import DynamicForm, {
  FormField,
} from '@/components/shared/profile/DynamicForm';

export default function Page() {
  const { data: session, update } = useSession();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        body: formData,
      });

      if (!res.ok) throw new Error('Ошибка обновления');

      return res.json();
    },
    onSuccess: async (data) => {
      // обновляем session
      await update({ name: data.fullName, image: data.image });
    },
  });

  const fields: FormField[] = [
    {
      name: 'fullName',
      label: 'Имя',
      type: 'text',
      placeholder: 'Введите имя',
    },
    {
      name: 'avatar',
      label: 'Аватар',
      type: 'file',
    },
  ];

  if (!session) return null;

  return (
    <div className='p-8 bg-gray-dark w-full max-w-[800px] min-h-[500px] rounded-[16px]'>
      <DynamicForm
        fields={fields}
        defaultValues={{
          fullName: session.user?.name || '',
        }}
        submitLabel='Сохранить изменения'
        onSubmit={(formData) => mutation.mutate(formData)}
      />
      {session.user?.image && (
        <img
          src={session.user.image}
          alt='Аватар'
          className='w-32 h-32 mt-4 rounded-full'
        />
      )}
    </div>
  );
}
