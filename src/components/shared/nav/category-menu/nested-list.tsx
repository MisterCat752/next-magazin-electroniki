import { Category } from '@/hooks/useCatalogMenu';
import Link from 'next/link';

export const NestedList: React.FC<{ node: Category }> = ({ node }) => (
  <li>
    <Link
      href={`/category/${node.slug}`}
      className='cursor-pointer text-white hover:text-green transition duration-200'
    >
      {node.name}
    </Link>

    {node.children && node.children.length > 0 && (
      <ul className='ml-4 mt-1 space-y-1'>
        {node.children.map((ch) => (
          <NestedList key={ch.id} node={ch} />
        ))}
      </ul>
    )}
  </li>
);
