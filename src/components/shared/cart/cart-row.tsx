type RowProps = {
  label: React.ReactNode;
  value: React.ReactNode;
  isNegative?: boolean;
};

export function Row({ label, value, isNegative }: RowProps) {
  return (
    <div className='flex items-center justify-between text-sm md:text-base'>
      <div className='text-gray-300'>{label}</div>
      <div
        className={`font-medium ${isNegative ? 'text-red-500' : 'text-gray-100'}`}
      >
        {value}
      </div>
    </div>
  );
}
