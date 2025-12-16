// specs/presets.ts
interface SpecInput {
  name: string;
  value: string | number;
  groupId: number; // или 'base' | 'display' и потом преобразовывать через map
}

export const displaySpecs = (sections: any): SpecInput[] => [
  {
    name: 'Диагональ экрана',
    value: '6.7"',
    groupId: sections.displayGroup.id,
  },
];

export const baseSpecs = (
  sections: any,
  model: string,
  color: string
): SpecInput[] => [
  { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
  {
    name: 'Модель',
    value: `FA506NFR ${model}`,
    groupId: sections.baseGroup.id,
  },
  { name: 'Цвет', value: color, groupId: sections.baseGroup.id },
  { name: 'Вес', value: '2.3 кг', groupId: sections.baseGroup.id },
  { name: 'Линия', value: 'TUF Gaming A15', groupId: sections.baseGroup.id },
  { name: 'Код модели', value: 'HN021', groupId: sections.baseGroup.id },
  { name: 'Оттенок', value: 'Графитовый', groupId: sections.baseGroup.id },
  {
    name: 'Размеры',
    value: '359 x 256 x 22.8 мм',
    groupId: sections.baseGroup.id,
  },
];

export const memorySpecs = (
  sections: any,
  memory: string,
  ram = '8 ГБ'
): SpecInput[] => [
  { name: 'Память', value: memory, groupId: sections.memory.id },
  { name: 'RAM', value: ram, groupId: sections.memory.id },
  { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
  { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },
  { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
];

export const softwareSpecs = (sections: any): SpecInput[] => [
  {
    name: 'Операционная система',
    value: 'Android',
    groupId: sections.software.id,
  },
  { name: 'Оболочка ОС', value: 'One UI', groupId: sections.software.id },
  { name: 'Версия оболочки ОС', value: '7', groupId: sections.software.id },
  {
    name: 'Искусственный интеллект (AI)',
    value: 'Galaxy AI',
    groupId: sections.software.id,
  },
];

export const cameraSpecs = (sections: any): SpecInput[] => [
  {
    name: 'Фронтальная камера',
    value: '12 Мп',
    groupId: sections.photoVideo.id,
  },
  { name: 'Основная камера', value: '50 Мп', groupId: sections.photoVideo.id },
  { name: 'Количество камер', value: '3', groupId: sections.photoVideo.id },
];
