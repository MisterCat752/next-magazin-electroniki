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

      if (!res.ok) throw new Error('Update failed');

      return res.json();
    },
    onSuccess: async (data) => {
      await update({ name: data.fullName, image: data.image });
    },
  });

  const fields: FormField[] = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your name',
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Enter your address',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      placeholder: 'Enter your phone number',
    },
  ];

  if (!session) return null;

  return (
    <div className='p-8 bg-gray-dark w-full max-w-[800px] min-h-[500px] rounded-[16px]'>
      <h1 className='text-2xl font-semibold text-white mb-6'>Edit Profile</h1>

      <DynamicForm
        fields={fields}
        defaultValues={{
          fullName: session.user?.name || '',
          address: session.user?.address || '',
          phone: session.user?.phone || '',
        }}
        submitLabel='Save Changes'
        onSubmit={(formData) => mutation.mutate(formData)}
      />
    </div>
  );
}
