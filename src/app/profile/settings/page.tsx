import React from 'react';
import { cn } from '@/lib/utils';
import DynamicForm, {
  FormField,
} from '@/components/shared/profile/DynamicForm';
import { OpenSideButton } from '@/components/shared/profile/open-side-button';

interface Props {
  className?: string;
}

export default async function Page({ className }: Props) {
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
  return (
    <div
      className={cn(
        className,
        'p-8 bg-gray-dark w-full max-w-[800px] min-h-[500px] rounded-[16px] '
      )}
    >
      <OpenSideButton />
      <DynamicForm fields={fields} submitLabel='Сохранить изменения' />
    </div>
  );
}
