import { Button } from '@/components/ui';

interface ProductOptionsProps {
  product: any;
  activeVariant: any;
  allOptions: any[];
  selectedOptions: Record<string, string>;
  availableValues: Record<string, Set<string>>;
  onSelect: (name: string, value: string) => void;
}

export default function ProductOptions({
  product,
  activeVariant,
  allOptions,
  selectedOptions,
  availableValues,
  onSelect,
}: ProductOptionsProps) {
  return (
    <div className='max-w-[305px]'>
      <h1 className='text-2xl font-semibold'>
        {activeVariant.options.map((o: any) => o.value).join(' ')}{' '}
        {product.name}
      </h1>

      {allOptions.map((opt) => (
        <div key={opt.name}>
          <p className='font-medium mb-1'>{opt.name}</p>
          <div className='flex gap-2 flex-wrap'>
            {opt.values.map((v: string) => {
              const isActive = selectedOptions[opt.name] === v;
              const isAvailable = availableValues[opt.name]?.has(v);

              return (
                <button
                  key={v}
                  onClick={() => onSelect(opt.name, v)}
                  disabled={!isAvailable}
                  className={`px-3 py-1 rounded border transition ${
                    isActive
                      ? 'bg-green-500 text-white border-green-600'
                      : isAvailable
                      ? 'bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600'
                      : 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed'
                  }`}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <p className='text-xl font-bold mt-40'>
        {activeVariant.price.toLocaleString()} лей
      </p>

      <Button className='bg-green mt-2  py-[24px] px-[16px]  w-[281px] text-[16px] text-center rounded text-black font-semibold'>
        Купить
      </Button>
    </div>
  );
}
