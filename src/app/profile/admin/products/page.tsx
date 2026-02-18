'use client';

import { useCatalogProducts } from '@/hooks/useCatalogProducts';

export default function ProductsAdminPage() {
  const { products, totalPages, page, setPage, isLoading } =
    useCatalogProducts('');
  async function handleDelete(id: number) {
    await fetch(`/api/admin/products/${id}`, {
      method: 'DELETE',
    });

    window.location.reload();
  }
  return (
    <div className='w-full'>
      <h1 className='text-white text-2xl mb-6'>Управление продуктами</h1>

      <div className='bg-gray-900 rounded-xl overflow-hidden'>
        <table className='w-full text-left text-white'>
          <thead className='bg-gray-800'>
            <tr>
              <th className='p-4'>ID</th>
              <th className='p-4'>Название</th>
              <th className='p-4'>Цена</th>
              <th className='p-4'>Варианты</th>
              <th className='p-4'>Действия</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p: any) => (
              <tr key={p.id} className='border-b border-gray-700'>
                <td className='p-4'>{p.id}</td>
                <td className='p-4'>{p.name}</td>
                <td className='p-4'>{p.price} ₽</td>
                <td className='p-4'>{p.variants.length}</td>
                <td className='p-4 flex gap-2'>
                  <button className='bg-blue-600 px-3 py-1 rounded'>
                    Редактировать
                  </button>
                  <button className='bg-red-600 px-3 py-1 rounded'>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex gap-2 mt-6'>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
