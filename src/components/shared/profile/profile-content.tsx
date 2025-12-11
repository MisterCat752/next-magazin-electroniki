'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { ProfileSideBar } from './profile-side-bar';
import DynamicForm, { FormField } from './DynamicForm';
import { Container } from '@/components/layout/container';
interface Props {
  className?: string;
  session?: any;
}

export const ProfileContent: React.FC<Props> = ({ className, session }) => {
  const fields: FormField[] = [
    {
      name: 'name',
      label: 'Имя',
      type: 'text',
      placeholder: 'Введите имя',
    },
    {
      name: ' surname',
      label: 'Фамилия',
      type: 'text ',
      placeholder: ' Введите фамилию',
    },
    {
      name: ' phone',
      label: 'Номер телефона',
      type: 'text ',
      placeholder: ' Введите Номер телефона',
    },
  ];
  const handleSubmit = async (values: Record<string, string>) => {};
  return (
    <div className={cn(className)}>
      <main className='bg-[#000] py-10 flex gap-4    justify-between '>
        <div className='w-[300px] min-h-[900px] p-5 bg-gray-dark-medium '>
          <ProfileSideBar session={session} />
        </div>
        <Container className='w-full'>
          <div className='bg-gray-dark w-full max-w-[800px] min-h-[500px] rounded-md p-8'>
            <DynamicForm
              fields={fields}
              onSubmit={handleSubmit}
              submitLabel='Войти'
            />
            ;
          </div>
        </Container>
      </main>
    </div>
  );
};
