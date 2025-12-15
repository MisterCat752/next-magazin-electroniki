export default function ProductSpecifications({
  activeVariant,
}: {
  activeVariant: any;
}) {
  if (!activeVariant) {
    return (
      <p className='text-white mt-4'>
        Выберите характеристики, чтобы увидеть спецификации
      </p>
    );
  }
  const groupedSpecs: Record<string, any[]> = {};

  activeVariant.specifications.forEach((spec: any) => {
    if (!groupedSpecs[spec.group]) groupedSpecs[spec.group] = [];
    groupedSpecs[spec.group].push(spec);
  });

  return (
    <div className='w-full mt-8'>
      <h2 className='text-xl font-semibold mb-3'>Характеристики</h2>
      <div className='grid grid-cols-2 gap-4'>
        {Object.entries(groupedSpecs).map(([group, specs]) => (
          <div key={group} className='  bg-gray-dark p-4 rounded-2xl'>
            <h3 className='font-bold text-green  mb-2'>{group}</h3>
            <ul>
              {specs.map((s: any) => (
                <li key={s.name}>
                  <span className='text-gray-400'>{s.name}: </span>
                  <span className='text-white'>{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
