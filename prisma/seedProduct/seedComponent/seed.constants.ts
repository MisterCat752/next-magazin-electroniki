import { create } from 'zustand';
// seedComponent/seed.constants.ts
import {
  displaySpecs,
  baseSpecs,
  memorySpecs,
  softwareSpecs,
  cameraSpecs,
} from './presets';
import buildSpecs from './lap-top/buildSpec';
export const SEED_SLIDER = [
  'https://darwin.md/media/783664/conversions/d57fvgh_1750333080606-preview-webp.png',
  'https://darwin.md/media/783665/conversions/7fgyhju_1750333096146-preview.png',
  'https://darwin.md/media/783666/conversions/87tdfvgh_1750333096158-preview-webp.png',
  'https://darwin.md/media/783667/conversions/6fvghj_1750333103641-preview-webp.png',
];
export const buildA15Variants = (sections: any, model: string) => [
  {
    memory: '8 ГБ|512 ГБ',
    color: 'Черный',
    price: 11099,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        { name: 'Модель', value: model, groupId: sections.baseGroup.id },
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        { name: 'SSD', value: '512 ГБ', groupId: sections.memory.id },
      ],
    }),
  },
];
export const buildA17Variants = (sections: any, model: string) => [
  {
    memory: '16 ГБ|1 ТБ',
    color: 'Синий',
    price: 15459,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '17.3"',
          groupId: sections.displayGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        { name: 'Модель', value: model, groupId: sections.baseGroup.id },
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'SSD', value: '1 ТБ', groupId: sections.memory.id },
        { name: 'GPU', value: 'RTX 4060', groupId: sections.baseGroup.id },
      ],
    }),
  },
];
export const SEED_VARIANTS = (sections: any, model = 'S22 FE') => [
  {
    memory: '8 ГБ|512 ГБ',
    color: 'Черный',
    price: 11099,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA506NFR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        { name: 'Память', value: '512 ГБ', groupId: sections.memory.id },
        { name: 'ОС', value: 'Android', groupId: sections.software.id },
      ],
    }),
  },
  {
    memory: '16 ГБ|1 ТБ',
    color: 'Синий',
    price: 13099,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA506NFR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Синий', groupId: sections.baseGroup.id },
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'Память', value: '1012 ГБ', groupId: sections.memory.id },
        { name: 'ОС', value: 'Android', groupId: sections.software.id },
      ],
    }),
  },

  {
    memory: '32 ГБ|512 ГБ',
    color: 'Синий',
    price: 15459,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA506NFR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Синий', groupId: sections.baseGroup.id },
        { name: 'RAM', value: '32 ГБ', groupId: sections.memory.id },
        { name: 'Память', value: '512 ГБ', groupId: sections.memory.id },
        { name: 'ОС', value: 'Android', groupId: sections.software.id },
      ],
    }),
  },
];
