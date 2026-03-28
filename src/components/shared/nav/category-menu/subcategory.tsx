import React from 'react';
import Link from 'next/link';
import { NestedList } from './nested-list';
import { Category } from '@/hooks/useCatalogMenu';
import { reverseSafe } from '@/lib/reverse';
export function SubCategories({ current }: { current: Category | null }) {
  if (!current?.children?.length) return <div />;

  return (
    <>
      {reverseSafe(current.children).map((sub: Category) => (
        <div key={sub.id}>
          <Link
            href={`/category/${sub.slug}`}
            className='font-bold mb-2 text-green'
          >
            {sub.name}
          </Link>

          <ul className='space-y-1'>
            {reverseSafe(sub.children).map((child: Category) => (
              <NestedList key={child.id} node={child} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
