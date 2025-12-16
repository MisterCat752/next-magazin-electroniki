import { buildSamsungFESpecs } from '../../buildSamsungFESpecs';

// products/samsung.constants.ts
export const NOTEBOOK_FE_SLIDER = [
  '/phones/sams1.webp',
  '/phones/sams2.webp',
  '/phones/sams3.webp',
  'https://darwin.md/media/808040/conversions/db88izxcxg_1756187833241-preview-webp.png',
];

export const NOTEBOOK_FE_VARIANTS = (sections: any, model = 'S22 FE') => [
  {
    memory: '256 ГБ',
    color: 'Черный',
    sim: 'Dual SIM',
    price: 12099,
    specifications: buildSamsungFESpecs({
      sections,
      model,
      memory: '256 ГБ',
      color: 'Черный1',
    }),
  },
  {
    memory: '512 ГБ',
    color: 'Синий',
    sim: 'Dual SIM',
    price: 13399,
    specifications: [
      {
        name: 'Диагональ экрана',
        value: '6.7"',
        groupId: sections.displayGroup.id,
      },
      { name: 'Цвет', value: 'Синий', groupId: sections.baseGroup.id },
      { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
    ],
  },
];
