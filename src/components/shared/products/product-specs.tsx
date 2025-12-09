export default function ProductSpecifications({
  activeVariant,
}: {
  activeVariant: any;
}) {
  const groupedSpecs: Record<string, any[]> = {};
  activeVariant.specifications.forEach((spec: any) => {
    if (!groupedSpecs[spec.group.name]) groupedSpecs[spec.group.name] = [];
    groupedSpecs[spec.group.name].push(spec);
  });

  return (
    <div className='w-full mt-8'>
      <h2 className='text-xl font-semibold mb-3'>Характеристики</h2>
      <div className='grid grid-cols-2 gap-4'>
        {Object.entries(groupedSpecs).map(([group, specs]) => (
          <div key={group} className='border p-3 rounded bg-neutral-800'>
            <h3 className='font-bold text-green-400 mb-2'>{group}</h3>
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
