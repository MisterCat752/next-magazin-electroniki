import { Button } from '@/components/ui';
import { useCartStore } from '@/store/cartStore';

interface Option {
  name: string;
  value: string;
}

interface Variant {
  id: number;
  price: number;
  options: Option[];
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  variants: Variant[];
}

interface ProductOptionsProps {
  product: Product;
  activeVariant: Variant | null;
  allOptions: { name: string; values: string[] }[];
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
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className='max-w-[305px]'>
      <h1 className='text-2xl font-semibold'>
        {activeVariant
          ? `${activeVariant.options.map((o) => o.value).join(' ')} ${product.name}`
          : product.name}
      </h1>

      {allOptions.map((opt) => (
        <div key={opt.name}>
          <p className='font-medium mb-1'>{opt.name}</p>
          <div className='flex gap-2 flex-wrap'>
            {opt.values.map((v) => {
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
        {activeVariant
          ? `${activeVariant.price.toLocaleString()} лей`
          : 'Выберите характеристики'}
      </p>

      <Button
        onClick={() =>
          activeVariant &&
          addToCart({
            id: product.id,
            variantId: activeVariant.id,
            name: product.name,
            price: activeVariant.price,
            imageUrl: product.imageUrl,
          })
        }
        className='bg-green mt-2 py-[24px] px-[16px] w-[281px] text-[16px] text-center rounded text-black font-semibold'
      >
        Купить
      </Button>
    </div>
  );
}
