'use client';
import React, { useState, useRef, useEffect } from 'react';

interface OrderItemProps {
  id: number;
  variantId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface OrderTableProps {
  id: string; // UUID
  totalPrice: number;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
  items: OrderItemProps[];
}

export const OrderTable: React.FC<OrderTableProps> = ({
  id,
  totalPrice,
  createdAt,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, items]);

  return (
    <div className='mt-6'>
      {/* Order Card */}
      <div
        className={`bg-gray-dark-light rounded-xl text-white shadow-md transition-shadow duration-300 ${
          isOpen ? 'shadow-xl' : 'shadow-md'
        }`}
      >
        {/* Header */}
        <div
          className='flex flex-col md:flex-row justify-between md:items-center p-6 cursor-pointer select-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='flex items-center gap-3'>
            <span
              className={`block w-3 h-3 border-r-2 border-b-2 border-gray-400 transform transition-transform duration-300 ${
                isOpen ? 'rotate-45' : '-rotate-45'
              }`}
            />
            <div>
              <p className='font-semibold text-lg'>Order</p>
              <p className='text-sm text-gray-400 mt-1'>UUID: {id}</p>
              <p className='text-sm text-gray-400 mt-1'>
                Items: {items.length}
              </p>
            </div>
          </div>

          <div className='text-right mt-3 md:mt-0'>
            <p className='font-bold text-lg'>{totalPrice} Mdl</p>
            <p className='text-sm text-gray-400'>
              {new Date(createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Items List */}
        <div
          ref={contentRef}
          style={{
            maxHeight: maxHeight,
            transition: 'max-height 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <div className='border-t border-gray-700 pt-4 px-6 pb-6 space-y-2'>
            {items.map((item) => (
              <div
                key={item.id}
                className='flex justify-between items-center bg-gray-dark p-3 rounded-md transition-colors duration-200 hover:bg-gray-dark-light'
              >
                <div className='flex flex-col'>
                  <p className='text-sm font-medium'>
                    Product: {item.productName}
                  </p>
                  <p className='text-xs text-gray-400'>
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className='font-semibold'>{item.price} Mdl</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
