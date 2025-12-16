import { create } from 'zustand';
// seedComponent/seed.constants.ts
import buildSpecs from './createSpec';
import {
  displaySpecs,
  baseSpecs,
  memorySpecs,
  softwareSpecs,
  cameraSpecs,
} from './presets';
export const SEED_SLIDER = [
  '/pc/asus1.jpeg',
  '/pc/asus2.webp',
  '/pc/asus3.webp',
  '/pc/asus3.webp',
];

export const SEED_VARIANTS = (sections: any, model = 'S22 FE') => [
  {
    memory: '16 ГБ|512 ГБ',
    color: 'Черный',
    price: 12099,
    specifications: buildSpecs({
      presets: [
        displaySpecs(sections),
        baseSpecs(sections, model, 'Черный'),
        memorySpecs(sections, '512 ГБ', '8 ГБ'),
        softwareSpecs(sections),
        cameraSpecs(sections),
      ],
    }),
  },

  {
    memory: '32 ГБ|512 ГБ',
    color: 'Синий',
    price: 13399,
    specifications: buildSpecs({
      presets: [
        displaySpecs(sections),
        baseSpecs(sections, model, 'Синий'),
        memorySpecs(sections, '512 ГБ', '32 ГБ'), // 💥 отличие в одной строке
        softwareSpecs(sections),
        cameraSpecs(sections),
      ],
    }),
  },
];
