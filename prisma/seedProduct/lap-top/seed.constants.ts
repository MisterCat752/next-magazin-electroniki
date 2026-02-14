import buildSpecs from '../buildSpec';

export const buildA15Variants = (sections: any, model: string) => [
  {
    memory: '8 ГБ|512 ГБ',

    price: 11099,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение',
          value: '1920 x 1080 (Full HD)',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '1144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Яркость',
          value: '300 нит',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Контрастность',
          value: '1000:1',
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

    price: 15459,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение',
          value: '1920 x 1080 (Full HD)',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '1144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Яркость',
          value: '300 нит',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Контрастность',
          value: '1000:1',
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
// asus tuf
export const buildAsusTufA1716gb1tb2050Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 ГБ|1 ТБ',
    videoMemory: 'GeForce RTX 2050|4 ГБ',
    color: 'Черный',
    price: 14444,
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '17.3"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },

        // base
        {
          name: 'Размеры',
          value: '399 x 269 x 25 мм',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Вес',
          value: '2.6 кг',
          groupId: sections.baseGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA706NFR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Графитовый',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'TUF Gaming A17',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Пластик',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '1 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '16 МБ',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Ryzen 7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.10 ГГц - 4.50 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Zen 3+',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ryzen 7 7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'AMD',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '4 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 2050',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'RJ-45', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];

export const buildAsusTuf512gb3050A15Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 ГБ|512 ГБ',
    videoMemory: 'GeForce RTX 3050|4 ГБ',
    color: 'Черный',
    price: 15555,
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        {
          name: 'Размеры',
          value: '359 x 256 x 22.8 мм',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Вес',
          value: '2.3 кг',
          groupId: sections.baseGroup.id,
        },
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA506NCR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Графитовый',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'TUF Gaming A15',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Металл, Пластик',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '20 МБ',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Ryzen 7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.1 ГГц - 4.5 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ryzen 7 7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'AMD',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '4 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 3050',
          groupId: sections.graphic.id,
        },

        // connectivity
        {
          name: 'Wi-Fi',
          value: 'Да',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Bluetooth',
          value: 'Да',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'RJ-45', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'Да',
          groupId: sections.extra.id,
        },
        {
          name: 'Клавиатура',
          value: 'English',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];
export const buildAsusTu512gb4050fA15Fa507Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 ГБ|512 ГБ',
    videoMemory: 'GeForce RTX 4050|6 ГБ',
    color: 'Серый',
    price: 18888,
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA507NUR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Mecha',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'TUF Gaming A15',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '20 МБ',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Ryzen 7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.1 ГГц - 4.5 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Zen 3+',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ryzen 7 7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'AMD',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '6 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 4050',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'RJ-45', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Клавиатура',
          value: 'English',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];
export const buildAsusTufA17_1tb4050Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 ГБ|1 ТБ',
    videoMemory: 'GeForce RTX 4050|6 ГБ',
    color: 'Серый',
    price: 21990, // поставь нужную цену
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '17.3"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FA707NUR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Mecha',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'TUF Gaming A17',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Металл, Пластик',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        {
          name: 'Максимальный объём RAM',
          value: '32 ГБ',
          groupId: sections.memory.id,
        },
        { name: 'Тип RAM', value: 'GDDR6', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '1 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '12 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '6 нм',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Ryzen 7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.20 ГГц - 4.75 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Zen 3+',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ryzen 7 7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'AMD',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '6 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 4050',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'AMD Radeon Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.2',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Thunderbolt',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'RGB',
          groupId: sections.extra.id,
        },
        {
          name: 'Клавиатура',
          value: 'En/Ru',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },
        {
          name: 'Дисковод',
          value: 'NO ODD',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];

export const buildAsusTufF16_1tb4050Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 ГБ|1 ТБ',
    videoMemory: 'GeForce RTX 4050|6 ГБ',
    color: 'Серый',
    price: 21111,
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '16"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'WUXGA',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1200',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `FX607VU ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Mecha',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'TUF Gaming F16',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Пластик, Алюминий',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        {
          name: 'Максимальный объём RAM',
          value: '64 ГБ',
          groupId: sections.memory.id,
        },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '1 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '24 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Core i7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '10',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.60 ГГц - 4.90 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Raptor Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'i7-13620H',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '13620H',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '6 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 4050',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'RJ-45', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Thunderbolt',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'Да',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];

// lenovo loq
export const buildLoq24gb3050Variants = (sections: any, model: string) => [
  {
    memory: '24 ГБ|512 ТБ',
    videoMemory: 'GeForce RTX 3050|6 ГБ',
    color: 'Серый',
    price: 16990,
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц"',
          groupId: sections.displayGroup.id,
        },

        // basegroup
        {
          name: 'Размеры',
          value: '360 x 259 x 24 мм',
          groupId: sections.baseGroup.id,
        },

        { name: 'Бренд', value: 'Lenovo', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `15IAX9 ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        { name: 'Линия', value: 'LOQ 3', groupId: sections.baseGroup.id },

        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '24 ГБ', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },

        //  procesor
        {
          name: 'Кэш',
          value: '12 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        { name: 'Тип CPU', value: 'Core i5', groupId: sections.procesor.id },
        { name: 'Тип CPU', value: 'Core i5', groupId: sections.procesor.id },
        {
          name: 'Частота процессора',
          value: '3.10 ГГц - 4.40 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Alder Lake',
          groupId: sections.procesor.id,
        },
        { name: 'CPU', value: 'i5-12450HX', groupId: sections.procesor.id },
        { name: 'Модель CPU', value: '12450HX', groupId: sections.procesor.id },
        {
          name: 'Производитель CPU ',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        //  graphic
        {
          name: 'Тип видеокарты ',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти ',
          value: '6 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты ',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 3050',
          groupId: sections.graphic.id,
        },
      ],
    }),
  },
];
export const buildLoq16gb3050Variants = (sections: any, model: string) => [
  {
    memory: '16 ГБ|512 ГБ',
    videoMemory: 'GeForce RTX 3050|6 ГБ',
    color: 'Серый',
    price: 13333,
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        {
          name: 'Размеры',
          value: '360 x 259 x 24 мм',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Вес',
          value: '2.38 кг',
          groupId: sections.baseGroup.id,
        },
        { name: 'Бренд', value: 'Lenovo', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `15IAX9 ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        { name: 'Оттенок', value: 'Luna', groupId: sections.baseGroup.id },
        { name: 'Линия', value: 'LOQ 3', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Пластик',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '12 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        { name: 'Тип CPU', value: 'Core i5', groupId: sections.procesor.id },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.10 ГГц - 4.40 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Alder Lake',
          groupId: sections.procesor.id,
        },
        { name: 'CPU', value: 'i5-12450HX', groupId: sections.procesor.id },
        {
          name: 'Модель CPU',
          value: '12450HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '6 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 3050',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.2',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        {
          name: 'DisplayPort',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'RGB',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];

export const buildLoq24gb4050Variants = (sections: any, model: string) => [
  {
    memory: '24 ГБ|512 ГБ',
    videoMemory: 'GeForce RTX 4050|6 ГБ',
    color: 'Серый',
    price: 18990, // если будет — подставишь
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },

        // base group
        {
          name: 'Размеры',
          value: '360 x 259 x 24 мм',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Вес',
          value: '2.38 кг',
          groupId: sections.baseGroup.id,
        },
        { name: 'Бренд', value: 'Lenovo', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `15IAX9 ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        { name: 'Оттенок', value: 'Luna', groupId: sections.baseGroup.id },
        { name: 'Линия', value: 'LOQ 3', groupId: sections.baseGroup.id },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '24 ГБ', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '12 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        { name: 'Тип CPU', value: 'Core i5', groupId: sections.procesor.id },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.10 ГГц - 4.40 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Alder Lake',
          groupId: sections.procesor.id,
        },
        { name: 'CPU', value: 'i5-12450HX', groupId: sections.procesor.id },
        {
          name: 'Модель CPU',
          value: '12450HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '6 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 4050',
          groupId: sections.graphic.id,
        },
      ],
    }),
  },
];
export const buildLenovoLoq3_1tb4060Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '24 ГБ|1 ТБ',
    videoMemory: 'GeForce RTX 4060|8 ГБ',
    color: 'Серый',
    price: 0, // поставь нужную цену
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'WQHD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2560 x 1440',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '165 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Lenovo', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `15IRX9 ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Серый', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Luna',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'LOQ 3',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Пластик, Алюминий',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '24 ГБ', groupId: sections.memory.id },
        {
          name: 'Максимальный объём RAM',
          value: '32 ГБ',
          groupId: sections.memory.id,
        },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '1 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '24 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Core i7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '20',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.60 ГГц - 4.90 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Raptor Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'i7-13650HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '13650HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '8 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 4060',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.2',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'RGB',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '1080p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
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

// rog
export const buildAsusRogScar18_2tb5080Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '32 ГБ|2 ТБ',
    videoMemory: 'GeForce RTX 5080|16 ГБ',
    color: 'Черный',
    price: 73333, // поставь нужную цену
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '18"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'WQXGA',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Mini LED',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2560 x 1600',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '240 Гц',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `G835LW ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Off',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'ROG Strix SCAR 18',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },
        {
          name: 'Искусственный интеллект (AI)',
          value: 'Intel AI Boost',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '32 ГБ', groupId: sections.memory.id },
        {
          name: 'Максимальный объём RAM',
          value: '64 ГБ',
          groupId: sections.memory.id,
        },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '2 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '44 МБ',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Core Ultra 9',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '24',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '2.10 ГГц - 5.40 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Arrow Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ultra 9 275HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '275HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '16 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 5080',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 be',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.4',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'RJ-45', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Thunderbolt',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Материал корпуса',
          value: 'Пластик, Металл',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];

// legion
export const buildLenovoLegionPro5_1tb5070Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '32 ГБ|1 ТБ',
    videoMemory: 'GeForce RTX 5070|8 ГБ',
    color: 'Черный',
    price: 36990, // поставь нужную цену
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '16"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'WQXGA',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2560 x 1600',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Lenovo', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `16IRX10 ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Eclipse',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'Legion Pro 5',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Пластик, Алюминий',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '32 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '1 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Тип CPU',
          value: 'Core i9',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '24',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '2.20 ГГц - 5.80 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Raptor Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'i9-14900HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '14900HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '8 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 5070',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 be',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.4',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        {
          name: 'USB 3.2',
          value: '3',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'White Backlit',
          groupId: sections.extra.id,
        },
        {
          name: 'Клавиатура',
          value: 'Russian',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];
export const buildLenovoLegion5_24gb5060Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '24 ГБ|512 ГБ',
    videoMemory: 'GeForce RTX 5060|8 ГБ',
    color: 'Черный',
    price: 0, // укажи цену
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '15.3"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '165 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'Lenovo', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `83LY007MRK ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Eclipse',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'Legion 5',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Пластик, Алюминий',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },
        {
          name: 'Искусственный интеллект (AI)',
          value: 'Intel AI Boost',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '24 ГБ', groupId: sections.memory.id },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '512 ГБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '24 МБ SmartCache',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Core i7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '14',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '3.60 ГГц - 4.90 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Raptor Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'i7-13650HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '13650HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '8 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 5060',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.2',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'USB 3.2', value: '3', groupId: sections.connectivity.id },
        {
          name: 'USB Type-C',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'RGB',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];

// hp
export const buildHpOmen5090v64gb = (sections: any, model: string) => [
  {
    memory: '64 ГБ|2 ТБ',
    videoMemory: 'GeForce RTX 5090|24 ГБ',
    color: 'Черный',
    price: 84990, // укажи цену
    specifications: buildSpecs({
      presets: [
        // display
        {
          name: 'Диагональ экрана',
          value: '16"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: '2.5 К',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'OLED',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2560 x 1600',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '240 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Покрытие дисплея',
          value: 'Антибликовое',
          groupId: sections.displayGroup.id,
        },

        // base
        { name: 'Бренд', value: 'HP', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `16-ah0017c ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Оттенок',
          value: 'Тень',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Линия',
          value: 'Omen Max',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Сегмент',
          value: 'Игровой',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал корпуса',
          value: 'Пластик, Алюминий',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Операционная система',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },
        {
          name: 'Искусственный интеллект (AI)',
          value: 'Intel AI Boost',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '64 ГБ', groupId: sections.memory.id },
        {
          name: 'Максимальный объём RAM',
          value: '64 ГБ',
          groupId: sections.memory.id,
        },
        { name: 'Тип RAM', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Тип накопителя', value: 'SSD', groupId: sections.memory.id },
        { name: 'Объём SSD', value: '2 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Кэш',
          value: '36 MB Intel Smart Cache',
          groupId: sections.procesor.id,
        },
        {
          name: 'Тип CPU',
          value: 'Core Ultra 9',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '24',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '2.10 ГГц - 5.40 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Архитектура',
          value: 'Arrow Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ultra 9 275HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: '275HX',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Intel',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'Тип видеокарты',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'Объём видеопамяти',
          value: '24 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'Производитель видеокарты',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Модель видеокарты',
          value: 'GeForce RTX 5090',
          groupId: sections.graphic.id,
        },
        {
          name: 'Встроенная графика',
          value: 'Intel Graphics',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 be',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.4',
          groupId: sections.connectivity.id,
        },
        { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
        { name: 'USB 3.2', value: '2', groupId: sections.connectivity.id },
        {
          name: 'USB Type-C',
          value: '2',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Разъём 3.5 мм',
          value: 'Да',
          groupId: sections.connectivity.id,
        },

        // extra
        {
          name: 'Подсветка клавиатуры',
          value: 'RGB',
          groupId: sections.extra.id,
        },
        {
          name: 'Цифровая клавиатура',
          value: 'Да',
          groupId: sections.extra.id,
        },

        // multimedia
        {
          name: 'Web камера',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Микрофон',
          value: 'Да',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];
