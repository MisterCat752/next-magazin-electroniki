'use client';

import { useState, useEffect } from 'react';

export type FormField = {
  name: string;
  label: string;
  type: string; // "text" | "file" | "email" и т.д.
  placeholder?: string;
  required?: boolean;
};

type DynamicFormProps = {
  fields: FormField[];
  defaultValues?: Record<string, string>;
  submitLabel?: string;
  onSubmit?: (formData: FormData) => void; // теперь FormData
};

export default function DynamicForm({
  fields,
  defaultValues = {},
  submitLabel = 'Отправить',
  onSubmit,
}: DynamicFormProps) {
  const [values, setValues] = useState<Record<string, string | File>>({});

  useEffect(() => {
    const initialState = fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: defaultValues[field.name] || '',
      }),
      {},
    );
    setValues(initialState);
  }, [fields, defaultValues]);

  const handleChange = (name: string, value: string | File) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value);
      }
    });

    onSubmit?.(formData);
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

          {field.type === 'file' ? (
            <input
              id={field.name}
              type='file'
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleChange(field.name, file);
              }}
              className='bg-[#404040] text-gray rounded-[14px] py-4 px-[14px]'
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={(values[field.name] as string) || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className='bg-[#404040] text-gray rounded-[14px] py-4 px-[14px]'
            />
          )}
        </div>
      ))}

      <button
        type='submit'
        className='bg-green text-black py-[24px] px-[16px] text-[16px] text-center rounded font-semibold'
      >
        {submitLabel}
      </button>
    </form>
  );
}
