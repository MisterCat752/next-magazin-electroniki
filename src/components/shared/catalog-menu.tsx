'use client';

import React, { useEffect, useState } from 'react';

type Category = {
  id: string;
  name: string;
  slug?: string;
  parentId?: string | null;
  children?: Category[];
};

const promoImages = ['/images/promo1.png', '/images/promo2.png'];

function IconBySlug(slug?: string) {
  if (!slug)
    return (
      <svg width={24} height={24} viewBox='0 0 24 24'>
        <rect width='20' height='14' x='2' y='5' rx='2' fill='#222' />
      </svg>
    );

  const s = slug.toLowerCase();
  if (
    s.includes('phone') ||
    s.includes('smart') ||
    s.includes('android') ||
    s.includes('ios')
  )
    return (
      <svg width={24} height={24} viewBox='0 0 24 24'>
        <rect x='8' y='2' width='8' height='18' rx='2' fill='#222' />
        <circle cx='12' cy='20' r='0.9' fill='#fff' />
      </svg>
    );

  if (s.includes('laptop') || s.includes('notebook'))
    return (
      <svg width={24} height={24} viewBox='0 0 24 24'>
        <rect x='3' y='6' width='18' height='12' rx='2' fill='#222' />
      </svg>
    );

  return (
    <svg width={24} height={24} viewBox='0 0 24 24'>
      <rect x='3' y='6' width='18' height='12' rx='2' fill='#222' />
    </svg>
  );
}

export function CatalogMenu() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadCategories() {
    setLoading(true);
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data);
      if (data.length) setHovered(data[0].id);
    } catch (e) {
      console.error('Failed to load categories', e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (open && categories.length === 0) loadCategories();
  }, [open]);

  const current = categories.find((c) => c.id === hovered) ?? null;

  // Рекурсивный компонент для произвольной вложенности
  const NestedList: React.FC<{ node: Category }> = ({ node }) => {
    return (
      <li>
        <a
          href={`http://localhost:3000/category/${node.slug}`}
          className='cursor-pointer hover:underline'
        >
          {node.name}
        </a>
        {node.children && node.children.length > 0 && (
          <ul className='ml-4 mt-1 space-y-1'>
            {node.children.map((ch) => (
              <NestedList key={ch.id} node={ch} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <button
        className='flex items-center gap-2 px-4 py-2 bg-[#043652] text-white rounded'
        onClick={() => setOpen((v) => !v)}
      >
        <svg width={24} height={24}>
          <rect x='4' y='8' width='16' height='2' rx='1' fill='#fff' />
          <rect x='4' y='14' width='16' height='2' rx='1' fill='#fff' />
        </svg>
        <span className='font-bold'>Каталог</span>
      </button>

      {open && (
        <div
          className='absolute inset-x-0 mx-auto top-36 max-w-[1200px] w-full h-[480px] bg-white shadow-2xl z-30 flex'
          // очищаем hovered при уходе мыши
          onMouseLeave={() => setHovered(null)}
        >
          <div className='w-[320px] border-r border-gray-300 h-full bg-gray-50 overflow-y-auto'>
            {loading && (
              <div className='px-5 py-3 text-sm text-gray-500'>Загрузка...</div>
            )}

            {categories.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => setHovered(cat.id)}
                className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition
                  ${
                    hovered === cat.id
                      ? 'bg-white border-l-4 border-[#043652] font-bold'
                      : 'hover:bg-gray-100'
                  }`}
              >
                <span>{IconBySlug(cat.slug)}</span>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>

          <div className='flex-1 flex flex-row h-full'>
            <div className='flex-1 px-7 py-7 overflow-y-auto grid grid-cols-3 gap-8'>
              {!current ? (
                <div className='text-gray-500'>Нет подкатегорий</div>
              ) : current.children && current.children.length === 0 ? (
                <div className='text-gray-500'>Нет подкатегорий</div>
              ) : (
                // для каждого второго уровня показываем колонку, а внутри рекурсивно рендерим всех потомков
                current.children!.map((sub) => (
                  <div key={sub.id}>
                    <div className='font-bold mb-2'>{sub.name}</div>

                    <ul className='space-y-1'>
                      {sub.children && sub.children.length > 0 ? (
                        sub.children.map((child) => (
                          <NestedList key={child.id} node={child} />
                        ))
                      ) : (
                        <li className='text-gray-500'>Нет дочерних</li>
                      )}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
