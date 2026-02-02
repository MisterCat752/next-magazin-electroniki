import buildSpecs from '../../lap-top/buildSpec';

// Iphone12
const iphone12BaseSpecs = (sections: any, model: string) => [
  // 📱 ОСНОВНЫЕ
  { name: 'Бренд', value: 'Apple', groupId: sections.baseGroup.id },
  {
    name: 'Модель',
    value: `iPhone 12 ${model}`,
    groupId: sections.baseGroup.id,
  },
  { name: 'Материал корпуса', value: 'Стекло', groupId: sections.baseGroup.id },
  { name: 'Материал рамки', value: 'Алюминий', groupId: sections.baseGroup.id },
  {
    name: 'Размеры',
    value: '146.7 x 71.5 x 7.4 мм',
    groupId: sections.baseGroup.id,
  },
  { name: 'Вес', value: '164 г', groupId: sections.baseGroup.id },

  // ⚙️ ПРОЦЕССОР
  { name: 'Модель CPU', value: 'A14 Bionic', groupId: sections.procesor.id },
  { name: 'Производитель CPU', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Количество ядер', value: '6', groupId: sections.procesor.id },
  {
    name: 'Максимальная частота',
    value: 'до 3.1 ГГц',
    groupId: sections.procesor.id,
  },
  { name: 'Литография', value: '5 нм', groupId: sections.procesor.id },

  // 🎮 ГРАФИКА
  {
    name: 'Модель видеокарты',
    value: 'Apple GPU (4-core)',
    groupId: sections.graphic.id,
  },

  // 🖥 ДИСПЛЕЙ
  {
    name: 'Диагональ дисплея',
    value: '6.1"',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Тип дисплея',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Разрешение дисплея',
    value: '2532 x 1170',
    groupId: sections.displayGroup.id,
  },
  { name: 'HDR', value: 'HDR10', groupId: sections.displayGroup.id },

  // 🤖 SOFTWARE
  { name: 'Операционная система', value: 'iOS', groupId: sections.software.id },

  // 📸 КАМЕРЫ
  {
    name: 'Основная камера',
    value: '12 Мп + 12 Мп',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Фронтальная камера',
    value: '12 Мп',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Разрешение видео',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },

  // 🔋 ПИТАНИЕ
  {
    name: 'Ёмкость аккумулятора',
    value: '2815 мАч',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Быстрая зарядка',
    value: '20 Вт',
    groupId: sections.characteristics.id,
  },

  // 🛡 ЗАЩИТА
  { name: 'Степень защиты', value: 'IP68', groupId: sections.extra.id },
  { name: 'Face ID', value: 'Да', groupId: sections.extra.id },
];
type IphoneVariantConfig = {
  memory: string;
  ram: string;
  color: string;
  price: number;
};

// iphone 13

const iphone13BaseSpecs = (sections: any, model: string) => [
  // ======================
  // 📱 ОСНОВНЫЕ
  // ======================
  { name: 'Бренд', value: 'Apple', groupId: sections.baseGroup.id },
  {
    name: 'Модель',
    value: `iPhone 13 ${model}`,
    groupId: sections.baseGroup.id,
  },
  { name: 'Материал корпуса', value: 'Стекло', groupId: sections.baseGroup.id },
  { name: 'Материал рамки', value: 'Алюминий', groupId: sections.baseGroup.id },
  {
    name: 'Размеры',
    value: '146.7 x 71.5 x 7.65 мм',
    groupId: sections.baseGroup.id,
  },
  { name: 'Вес', value: '174 г', groupId: sections.baseGroup.id },

  // ======================
  // ⚙️ ПРОЦЕССОР
  // ======================
  { name: 'Модель CPU', value: 'A15 Bionic', groupId: sections.procesor.id },
  { name: 'Производитель CPU', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Количество ядер', value: '6', groupId: sections.procesor.id },
  {
    name: 'Максимальная частота',
    value: 'до 3.2 ГГц',
    groupId: sections.procesor.id,
  },
  { name: 'Литография', value: '5 нм', groupId: sections.procesor.id },

  // ======================
  // 🎮 ГРАФИКА
  // ======================
  {
    name: 'Модель видеокарты',
    value: 'Apple GPU (5-core)',
    groupId: sections.graphic.id,
  },

  // ======================
  // 🖥 ДИСПЛЕЙ
  // ======================
  {
    name: 'Диагональ дисплея',
    value: '6.1"',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Тип дисплея',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Разрешение дисплея',
    value: '2532 x 1170',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Плотность пикселей',
    value: '460 ppi',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'HDR',
    value: 'HDR10',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Защита дисплея',
    value: 'Ceramic Shield',
    groupId: sections.displayGroup.id,
  },

  // ======================
  // 🤖 SOFTWARE
  // ======================
  { name: 'Операционная система', value: 'iOS', groupId: sections.software.id },
  { name: 'Версия ОС', value: '15', groupId: sections.software.id },

  // ======================
  // 📸 КАМЕРЫ
  // ======================
  {
    name: 'Основная камера',
    value: '12 Мп + 12 Мп',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Фронтальная камера',
    value: '12 Мп',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Разрешение видео',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },
  { name: 'Вспышка', value: 'Да', groupId: sections.photoVideo.id },

  // ======================
  // 🔋 ПИТАНИЕ
  // ======================
  {
    name: 'Ёмкость аккумулятора',
    value: '3240 мАч',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Быстрая зарядка',
    value: '20 Вт',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Тип аккумулятора',
    value: 'Li-Ion',
    groupId: sections.characteristics.id,
  },

  // ======================
  // 🛡 ЗАЩИТА / ДАТЧИКИ
  // ======================
  { name: 'Степень защиты', value: 'IP68', groupId: sections.extra.id },
  { name: 'Face ID', value: 'Да', groupId: sections.extra.id },
  {
    name: 'Датчики',
    value:
      'Гироскоп, Барометр, Акселерометр, Датчик приближения, Датчик освещенности',
    groupId: sections.extra.id,
  },
];

// iphone 14
const iphone14BaseSpecs = (sections: any, model: string) => [
  // ======================
  // 📱 ОСНОВНЫЕ
  // ======================
  { name: 'Бренд', value: 'Apple', groupId: sections.baseGroup.id },
  {
    name: 'Модель',
    value: `iPhone 14 ${model}`,
    groupId: sections.baseGroup.id,
  },
  {
    name: 'Размеры',
    value: '146.7 x 71.5 x 7.8 мм',
    groupId: sections.baseGroup.id,
  },
  { name: 'Вес', value: '172 г', groupId: sections.baseGroup.id },

  // ======================
  // ⚙️ ПРОЦЕССОР
  // ======================
  { name: 'Модель CPU', value: 'A15 Bionic', groupId: sections.procesor.id },
  { name: 'Производитель CPU', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Количество ядер', value: '6', groupId: sections.procesor.id },
  {
    name: 'Максимальная частота',
    value: 'до 3.2 ГГц',
    groupId: sections.procesor.id,
  },
  { name: 'Литография', value: '5 нм', groupId: sections.procesor.id },

  // ======================
  // 🎮 ГРАФИКА
  // ======================
  {
    name: 'Модель видеокарты',
    value: 'Apple GPU (5-core graphics)',
    groupId: sections.graphic.id,
  },

  // ======================
  // 🖥 ДИСПЛЕЙ
  // ======================
  {
    name: 'Диагональ дисплея',
    value: '6.1"',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Тип дисплея',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Разрешение дисплея',
    value: '2532 x 1170',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Плотность пикселей',
    value: '460 ppi',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'HDR',
    value: 'HDR10',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Always on Display',
    value: 'Нет',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Защита дисплея',
    value: 'Ceramic Shield',
    groupId: sections.displayGroup.id,
  },

  // ======================
  // 🤖 SOFTWARE
  // ======================
  { name: 'Операционная система', value: 'iOS', groupId: sections.software.id },
  { name: 'Версия ОС', value: '16', groupId: sections.software.id },

  // ======================
  // 📸 ФОТО / ВИДЕО
  // ======================
  {
    name: 'Фронтальная камера',
    value: '12 Мп',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Основная камера',
    value: '12 Мп + 12 Мп',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Разрешение видео',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },
  { name: 'Вспышка', value: 'Да', groupId: sections.photoVideo.id },

  // ======================
  // 🔊 АУДИО
  // ======================
  {
    name: 'Аудиосистема',
    value: 'Стерео',
    groupId: sections.characteristics.id,
  },

  // ======================
  // 🔋 ПИТАНИЕ
  // ======================
  {
    name: 'Ёмкость аккумулятора',
    value: '3279 мАч',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Тип аккумулятора',
    value: 'Li-Ion',
    groupId: sections.characteristics.id,
  },

  // ======================
  // 📡 СВЯЗЬ
  // ======================
  { name: 'Bluetooth', value: 'v5.3', groupId: sections.connectivity.id },
  { name: 'Wi-Fi', value: '802.11 ax', groupId: sections.connectivity.id },
  { name: 'NFC', value: 'Да', groupId: sections.connectivity.id },
  { name: 'GPS', value: 'Да', groupId: sections.connectivity.id },
  { name: 'USB разъём', value: 'Lightning', groupId: sections.connectivity.id },
  { name: 'Разъём 3.5 мм', value: 'Нет', groupId: sections.connectivity.id },

  // ======================
  // 🛡 ДАТЧИКИ / ЗАЩИТА
  // ======================
  { name: 'Face ID', value: 'Да', groupId: sections.extra.id },
  { name: 'Гироскоп', value: 'Да', groupId: sections.extra.id },
  { name: 'Акселерометр', value: 'Да', groupId: sections.extra.id },
  { name: 'Барометр', value: 'Да', groupId: sections.extra.id },
  { name: 'Компас', value: 'Да', groupId: sections.extra.id },
  { name: 'Степень защиты', value: 'IP68', groupId: sections.extra.id },
];

const iphoneVariantSpecs = (
  sections: any,
  variant: {
    ram: string;
    memory: string;
    color: string;
  },
) => [
  // 🧠 ПАМЯТЬ
  { name: 'RAM', value: variant.ram, groupId: sections.memory.id },
  {
    name: 'Встроенная память',
    value: variant.memory,
    groupId: sections.memory.id,
  },
  {
    name: 'Слот для карты памяти',
    value: 'Нет',
    groupId: sections.memory.id,
  },

  // 🎨 ЦВЕТ
  { name: 'Цвет', value: variant.color, groupId: sections.baseGroup.id },

  // 📡 СЕТЬ
  { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },
  {
    name: 'Формат SIM',
    value: 'Nano-SIM',
    groupId: sections.connectivity.id,
  },
];

type IphoneVariant = {
  memory: string;
  ram: string;
  color: string;
  price: number;
};

type BuildIphoneVariantsArgs = {
  sections: any;
  model: string;
  variants: IphoneVariant[];
  baseSpecs: (sections: any, model: string) => any[];
};

export const buildIphoneVariants = ({
  sections,
  model,
  variants,
  baseSpecs,
}: BuildIphoneVariantsArgs) =>
  variants.map((variant) => ({
    memory: `${variant.ram}|${variant.memory}`,
    color: variant.color,
    sim: 'Single SIM',
    price: variant.price,

    specifications: buildSpecs({
      presets: [
        ...baseSpecs(sections, model),
        ...iphoneVariantSpecs(sections, variant),
      ],
    }),
  }));

export const buildIphone12Variants = (
  sections: any,
  model: string,
  variants: IphoneVariantConfig[],
) =>
  buildIphoneVariants({
    sections,
    model,
    variants,
    baseSpecs: iphone12BaseSpecs,
  });

export const buildIphone13Variants = (
  sections: any,
  model: string,
  variants: IphoneVariantConfig[],
) =>
  buildIphoneVariants({
    sections,
    model,
    variants,
    baseSpecs: iphone13BaseSpecs,
  });
export const buildIphone14Variants = (
  sections: any,
  model: string,
  variants: IphoneVariantConfig[],
) =>
  buildIphoneVariants({
    sections,
    model,
    variants,
    baseSpecs: iphone14BaseSpecs,
  });
