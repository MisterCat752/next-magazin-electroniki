import buildSpecs from '../../buildSpec';
import { buildVariant } from './helper';

// ======================
// Samsung Galaxy S24 256GB
// ======================
export const buildSamsungGalaxyS24_256GbVariants = (
  sections: any,
  model: string,
) => [
  buildVariant({
    memory: '8 GB',
    storage: '256 GB',
    color: 'Black',
    sim: 'Dual SIM',
    price: 12039,
    modelName: `Galaxy S24 ${model}`,
    sections,
  }),
];

// ======================
// Samsung Galaxy S25 FE 256GB
// ======================
export const buildSamsungGalaxy256GbS25FEVariants = (
  sections: any,
  model: string,
) => [
  buildVariant({
    memory: '8 GB',
    storage: '256 GB',
    color: 'Dark Blue',
    sim: 'Dual SIM',
    price: 12099,
    modelName: `Galaxy S25 FE ${model}`,
    sections,
  }),
];

// ======================
// Samsung Galaxy S25 FE 512GB
// ======================
export const buildSamsungGalaxy512GbS25FEVariants = (
  sections: any,
  model: string,
) => [
  buildVariant({
    memory: '8 GB',
    storage: '512 GB',
    color: 'Dark Blue',
    sim: 'Dual SIM',
    price: 12099,
    modelName: `Galaxy S25 FE ${model}`,
    sections,
  }),
];

// ======================
// Samsung Galaxy S25 256GB
// ======================
export const buildSamsungGalaxy256GbS25Variants = (
  sections: any,
  model: string,
) => [
  buildVariant({
    memory: '8 GB',
    storage: '256 GB',
    color: 'Dark Blue',
    sim: 'Dual SIM',
    price: 14099,
    modelName: `Galaxy S25 ${model}`,
    sections,
  }),
];

// ======================
// Samsung Galaxy S25 512GB
// ======================
export const buildSamsungGalaxy512GbS25Variants = (
  sections: any,
  model: string,
) => [
  buildVariant({
    memory: '8 GB',
    storage: '512 GB',
    color: 'Dark Blue',
    sim: 'Dual SIM',
    price: 15099,
    modelName: `Galaxy S25 ${model}`,
    sections,
  }),
];

// A Variants
export const buildSamsungGalaxy256GbA56Variants = (
  sections: any,
  model: string,
) =>
  buildVariant({
    memory: '8 GB',
    storage: '256 GB',
    color: 'Gray',
    sim: 'Dual SIM',
    price: 7369,
    modelName: `Galaxy A56 ${model}`,
    sections,
  });

export const buildSamsungGalaxy256GbA36Variants = (
  sections: any,
  model: string,
) =>
  buildVariant({
    memory: '8 GB',
    storage: '256 GB',
    color: 'Black',
    sim: 'Dual SIM',
    price: 5849,
    modelName: `Galaxy A36 ${model}`,
    sections,
  });

export const buildSamsungGalaxy256GbS25UltraVariants = (
  sections: any,
  model: string,
) =>
  buildVariant({
    memory: '16 GB',
    storage: '512 GB',
    color: 'Gray',
    sim: 'Dual SIM',
    price: 18888,
    modelName: `Galaxy S25 Ultra ${model}`,
    sections,
  });
