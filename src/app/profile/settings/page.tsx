import { cn } from '@/lib/utils';
import DynamicForm, {
  FormField,
} from '@/components/shared/profile/DynamicForm';

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
  ];
  return (
    <div
      className={cn(
        className,
        'p-8 bg-gray-dark w-full max-w-[800px] min-h-[500px] rounded-[16px] ',
      )}
    >
      <DynamicForm fields={fields} submitLabel='Сохранить изменения' />
    </div>
  );
}
