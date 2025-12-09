import React from 'react';

export function Footer() {
  return (
    <footer className='bg-[#043652] text-white w-full py-12'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 px-6'>
        {/* Покупателям */}
        <div>
          <h2 className='font-bold text-xl mb-4'>Покупателям</h2>
          <ul className='space-y-2 text-base'>
            <li>Акции</li>
            <li>Конкурсы</li>
            <li>Доставка</li>
            <li>Способ оплаты</li>
            <li>Ultra Credit</li>
            <li>Подарочные сертификаты</li>
            <li>Возврат товара</li>
            <li>Политика конфиденциальности</li>
            <li>iPhone 16 pro и iPhone 16 Pro Max</li>
            <li>iPhone 16 и iPhone 16 Plus</li>
          </ul>
        </div>
        {/* О нас */}
        <div>
          <h2 className='font-bold text-xl mb-4'>О нас</h2>
          <ul className='space-y-2 text-base mb-6'>
            <li>Вакансии</li>
            <li>Контакты</li>
          </ul>
          <div>
            <div className='font-bold text-lg'>Showroom Ultra.md</div>
            <div>
              г. Кишинёв,
              <br />
              ул. Колумна 170
            </div>
            <div className='mt-2'>+373-6000-0000</div>
          </div>
        </div>
        {/* Соц сети */}
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-xl mb-4'>Мы в соц. сетях</h2>
          <div className='flex space-x-6 mb-6'>
            {/* Используйте SVG или импортируйте иконки, ниже — пример с emoji */}
            <a
              href='#'
              className='bg-white text-[#043652] w-10 h-10 flex items-center justify-center rounded-full text-2xl shadow hover:scale-105 transition'
            >
              <span>🌐</span>
            </a>
            <a
              href='#'
              className='bg-white text-[#043652] w-10 h-10 flex items-center justify-center rounded-full text-2xl shadow hover:scale-105 transition'
            >
              <span>▶️</span>
            </a>
            <a
              href='#'
              className='bg-white text-[#043652] w-10 h-10 flex items-center justify-center rounded-full text-2xl shadow hover:scale-105 transition'
            >
              <span>📸</span>
            </a>
          </div>
          <div className='bg-gray-100 rounded-xl px-6 py-4 min-w-[190px] flex items-center gap-3'>
            {/* Apple logo SVG */}
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='#043652'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16.7 7.2c-1.1 0-2.3.7-3.1.7-.8 0-2-.7-3.1-.7-2.5 0-5.5 2.1-5.5 6.1s2.2 7.8 5.8 7.8c.9 0 1.7-.6 2.8-.6 1.1 0 1.8.6 2.8.6 3.7 0 5.8-4.7 5.8-7.8-.1-4-3-6.1-5.5-6.1zm-2.7-2c.6-.7 1-1.7.9-2.7-1 0-2.2.7-2.9 1.6-.6.7-1.1 1.7-.9 2.6h.1c1 .1 2.1-.6 2.8-1.5z' />
            </svg>
            <span className='text-[#043652] font-medium text-base leading-tight'>
              Authorized
              <br />
              Reseller
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
