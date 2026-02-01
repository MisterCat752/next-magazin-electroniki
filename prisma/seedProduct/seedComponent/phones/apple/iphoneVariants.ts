import buildSpecs from '../../lap-top/buildSpec';

// export const buildAppleIphone12_128GbVariants = (
//   sections: any,
//   model: string,
// ) => [
//   {
//     memory: '4 ГБ|128 ГБ',
//     color: 'Черный',
//     sim: 'Single SIM',
//     price: 8799,

//     specifications: buildSpecs({
//       presets: [
//         // ======================
//         // 📱 ОСНОВНЫЕ
//         // ======================
//         {
//           name: 'Размеры',
//           value: '146.7 x 71.5 x 7.4 мм',
//           groupId: sections.baseGroup.id,
//         },
//         { name: 'Вес', value: '164 г', groupId: sections.baseGroup.id },
//         { name: 'Бренд', value: 'Apple', groupId: sections.baseGroup.id },
//         {
//           name: 'Модель',
//           value: `iPhone 12 ${model}`,
//           groupId: sections.baseGroup.id,
//         },
//         { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
//         {
//           name: 'Материал корпуса',
//           value: 'Стекло',
//           groupId: sections.baseGroup.id,
//         },
//         {
//           name: 'Материал рамки',
//           value: 'Алюминий',
//           groupId: sections.baseGroup.id,
//         },

//         // ======================
//         // 🧠 ПАМЯТЬ
//         // ======================
//         { name: 'RAM', value: '4 ГБ', groupId: sections.memory.id },
//         {
//           name: 'Встроенная память',
//           value: '128 ГБ',
//           groupId: sections.memory.id,
//         },
//         {
//           name: 'Слот для карты памяти',
//           value: 'Нет',
//           groupId: sections.memory.id,
//         },

//         // ======================
//         // ⚙️ ПРОЦЕССОР
//         // ======================
//         {
//           name: 'Модель CPU',
//           value: 'A14 Bionic',
//           groupId: sections.procesor.id,
//         },
//         {
//           name: 'Производитель CPU',
//           value: 'Apple',
//           groupId: sections.procesor.id,
//         },
//         {
//           name: 'Количество ядер',
//           value: '6',
//           groupId: sections.procesor.id,
//         },
//         {
//           name: 'Максимальная частота',
//           value: 'до 3.1 ГГц',
//           groupId: sections.procesor.id,
//         },
//         {
//           name: 'Литография',
//           value: '5 нм',
//           groupId: sections.procesor.id,
//         },

//         // ======================
//         // 🎮 ГРАФИКА
//         // ======================
//         {
//           name: 'Модель видеокарты',
//           value: 'Apple GPU (4-core)',
//           groupId: sections.graphic.id,
//         },

//         // ======================
//         // 📡 СВЯЗЬ
//         // ======================
//         {
//           name: 'Wi-Fi',
//           value: '802.11 ax',
//           groupId: sections.connection.id,
//         },
//         {
//           name: 'Bluetooth',
//           value: 'Да',
//           groupId: sections.connection.id,
//         },
//         {
//           name: 'Версия Bluetooth',
//           value: 'v5.0',
//           groupId: sections.connection.id,
//         },
//         { name: 'NFC', value: 'Да', groupId: sections.connection.id },
//         { name: 'GPS', value: 'Да', groupId: sections.connection.id },
//         {
//           name: 'USB разъем',
//           value: 'Lightning',
//           groupId: sections.connection.id,
//         },
//         {
//           name: 'Разъём 3.5 мм',
//           value: 'Нет',
//           groupId: sections.connection.id,
//         },

//         // ======================
//         // 📶 МОБИЛЬНАЯ СЕТЬ
//         // ======================
//         {
//           name: 'Количество SIM',
//           value: 'Single SIM',
//           groupId: sections.connectivity.id,
//         },
//         {
//           name: 'Формат SIM',
//           value: 'Nano-SIM',
//           groupId: sections.connectivity.id,
//         },
//         { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
//         { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
//         { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
//         { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

//         // ======================
//         // 🖥 ДИСПЛЕЙ
//         // ======================
//         {
//           name: 'Диагональ дисплея',
//           value: '6.1"',
//           groupId: sections.displayGroup.id,
//         },
//         {
//           name: 'Тип дисплея',
//           value: 'Super Retina XDR OLED',
//           groupId: sections.displayGroup.id,
//         },
//         {
//           name: 'Разрешение дисплея',
//           value: '2532 x 1170',
//           groupId: sections.displayGroup.id,
//         },
//         {
//           name: 'Плотность пикселей',
//           value: '460 ppi',
//           groupId: sections.displayGroup.id,
//         },
//         {
//           name: 'HDR',
//           value: 'HDR10',
//           groupId: sections.displayGroup.id,
//         },

//         // ======================
//         // 🤖 SOFTWARE
//         // ======================
//         {
//           name: 'Операционная система',
//           value: 'iOS',
//           groupId: sections.software.id,
//         },
//         {
//           name: 'Версия ОС',
//           value: '14.1',
//           groupId: sections.software.id,
//         },

//         // ======================
//         // 📸 КАМЕРЫ
//         // ======================
//         {
//           name: 'Основная камера',
//           value: '12 Мп + 12 Мп',
//           groupId: sections.photoVideo.id,
//         },
//         {
//           name: 'Фронтальная камера',
//           value: '12 Мп',
//           groupId: sections.photoVideo.id,
//         },
//         {
//           name: 'Разрешение видео',
//           value: '4K 60fps',
//           groupId: sections.photoVideo.id,
//         },
//         {
//           name: 'Вспышка',
//           value: 'Да',
//           groupId: sections.photoVideo.id,
//         },

//         // ======================
//         // 🔋 ПИТАНИЕ
//         // ======================
//         {
//           name: 'Ёмкость аккумулятора',
//           value: '2815 мАч',
//           groupId: sections.characteristics.id,
//         },
//         {
//           name: 'Быстрая зарядка',
//           value: '20 Вт',
//           groupId: sections.characteristics.id,
//         },
//         {
//           name: 'Тип аккумулятора',
//           value: 'Li-Ion',
//           groupId: sections.characteristics.id,
//         },

//         // ======================
//         // 🛡 ЗАЩИТА / ДАТЧИКИ
//         // ======================
//         {
//           name: 'Степень защиты',
//           value: 'IP68',
//           groupId: sections.extra.id,
//         },
//         {
//           name: 'Face ID',
//           value: 'Да',
//           groupId: sections.extra.id,
//         },
//         {
//           name: 'Датчики',
//           value: 'Гироскоп, Барометр, Компас, Акселерометр',
//           groupId: sections.extra.id,
//         },
//       ],
//     }),
//   },
// ];

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

export const buildIphone12Variants = (
  sections: any,
  model: string,
  variants: IphoneVariantConfig[],
) =>
  variants.map((variant) => ({
    memory: `${variant.ram}|${variant.memory}`,
    color: variant.color,
    sim: 'Single SIM',
    price: variant.price,

    specifications: buildSpecs({
      presets: [
        ...iphone12BaseSpecs(sections, model),

        // 🧠 ПАМЯТЬ (вариативная)
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
      ],
    }),
  }));

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
type Iphone13VariantConfig = {
  memory: string;
  ram: string;
  color: string;
  price: number;
};

export const buildIphone13Variants = (
  sections: any,
  model: string,
  variants: Iphone13VariantConfig[],
) =>
  variants.map((variant) => ({
    memory: `${variant.ram}|${variant.memory}`,
    color: variant.color,
    sim: 'Single SIM',
    price: variant.price,

    specifications: buildSpecs({
      presets: [
        ...iphone13BaseSpecs(sections, model),

        // ======================
        // 🧠 ПАМЯТЬ (вариативная)
        // ======================
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

        // ======================
        // 🎨 ЦВЕТ
        // ======================
        { name: 'Цвет', value: variant.color, groupId: sections.baseGroup.id },

        // ======================
        // 📶 СЕТЬ
        // ======================
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
      ],
    }),
  }));
