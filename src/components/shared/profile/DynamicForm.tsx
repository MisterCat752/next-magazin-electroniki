'use client';
import { useState } from 'react';

export type FormField = {
  name: string; // ключ значения
  label: string;
  type: string; // "text" | "email" | "password" | "number" | и т.д.
  placeholder?: string;
  required?: boolean;
};

type DynamicFormProps = {
  fields: FormField[];
  submitLabel?: string;
};

export default function DynamicForm({
  fields,

  submitLabel = 'Отправить',
}: DynamicFormProps) {
  const initialState = fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: '' }),
    {}
  );
  const [values, setValues] = useState<Record<string, string>>(initialState);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 max-w-md w-full'
    >
      {fields.map((field) => (
        <div key={field.name} className='flex flex-col gap-1'>
          <label
            htmlFor={field.name}
            className='font-medium text-gray mb-1 ml-2'
          >
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={values[field.name]}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className='   bg-[#404040]  text-gray rounded-[14px] py-4 px-[14px]  '
          />
        </div>
      ))}
      <button
        type='submit'
        className='bg-green text-black  py-[24px] px-[16px] text-[16px] text-center rounded font-semibold'
      >
        {submitLabel}
      </button>
    </form>
  );
}
