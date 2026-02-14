import buildSpecs from '../../buildSpec';

// S Variants
// 24
export const buildSamsungGalaxyS24_256GbVariants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|256 ГБ',
    color: 'Черный',
    sim: 'Dual SIM',
    price: 12039,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '16.2 x 7 x 0.7 см',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '167 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy S24 ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Алюминий',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал задней панели',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '256 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Модель CPU',
          value: 'Exynos 2400',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '10',
          groupId: sections.procesor.id,
        },
        {
          name: 'Максимальная частота',
          value: 'до 3.2 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель видеокарты',
          value: 'Xclipse 940',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ / СЕТЬ
        // ======================
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connection.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connection.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connection.id },
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        {
          name: 'USB разъем',
          value: 'USB Type-C',
          groupId: sections.connection.id,
        },

        // ======================
        // 📶 МОБИЛЬНАЯ СЕТЬ
        // ======================
        { name: 'eSIM', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Количество SIM',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
        { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.2"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Dynamic AMOLED',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2340 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Яркость',
          value: '2600 нит',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android',
          groupId: sections.software.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Основная камера',
          value: '50 Мп + 10 Мп + 12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Разрешение видео',
          value: '8K 30fps',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Вспышка',
          value: 'LED Flash',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '4000 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: '25 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Беспроводная зарядка',
          value: '15 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Обратная беспроводная зарядка',
          value: '4.5 Вт',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🛡 ЗАЩИТА
        // ======================
        {
          name: 'Степень защиты',
          value: 'IP68',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];

// 25
export const buildSamsungGalaxy256GbS25FEVariants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|256 ГБ',
    color: 'Тёмно-синий',
    sim: 'Dual SIM',
    price: 12099,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '161.3 x 76.6 x 7.4 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy S25 FE ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Тёмно-синий', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '256 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Модель CPU',
          value: 'Exynos 2400',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Максимальная частота',
          value: '3.2 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель видеокарты',
          value: 'Samsung Xclipse 940',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ / СЕТЬ
        // ======================
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connection.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connection.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connection.id },
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'GPS', value: 'Да', groupId: sections.connection.id },
        {
          name: 'USB разъем',
          value: 'USB Type-C 3.2',
          groupId: sections.connection.id,
        },

        // ======================
        // 📶 МОБИЛЬНАЯ СЕТЬ
        // ======================
        { name: 'eSIM', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Количество SIM',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
        { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Dynamic AMOLED 2X',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1080 x 2340',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android 15',
          groupId: sections.software.id,
        },
        { name: 'Оболочка', value: 'One UI 7', groupId: sections.software.id },
        {
          name: 'Искусственный интеллект',
          value: 'Galaxy AI',
          groupId: sections.software.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Основная камера',
          value: '50 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Сверхширокая камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Телефото камера',
          value: '8 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Разрешение видео',
          value: '8K 30fps',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '4900 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: '45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Тип аккумулятора',
          value: 'Li-Ion',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🛡 ЗАЩИТА
        // ======================
        {
          name: 'Степень защиты',
          value: 'IP68',
          groupId: sections.extra.id,
        },
        {
          name: 'Материал рамки',
          value: 'Алюминий',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];
export const buildSamsungGalaxy512GbS25FEVariants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|512 ГБ',
    color: 'Тёмно-синий',
    sim: 'Dual SIM',
    price: 12099,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '161.3 x 76.6 x 7.4 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy S25 FE ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Тёмно-синий', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '512 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Модель CPU',
          value: 'Exynos 2400',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Максимальная частота',
          value: '3.2 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель видеокарты',
          value: 'Samsung Xclipse 940',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ / СЕТЬ
        // ======================
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connection.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connection.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connection.id },
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'GPS', value: 'Да', groupId: sections.connection.id },
        {
          name: 'USB разъем',
          value: 'USB Type-C 3.2',
          groupId: sections.connection.id,
        },

        // ======================
        // 📶 МОБИЛЬНАЯ СЕТЬ
        // ======================
        { name: 'eSIM', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Количество SIM',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
        { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Dynamic AMOLED 2X',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1080 x 2340',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android 15',
          groupId: sections.software.id,
        },
        { name: 'Оболочка', value: 'One UI 7', groupId: sections.software.id },
        {
          name: 'Искусственный интеллект',
          value: 'Galaxy AI',
          groupId: sections.software.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Основная камера',
          value: '50 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Сверхширокая камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Телефото камера',
          value: '8 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Разрешение видео',
          value: '8K 30fps',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '4900 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: '45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Тип аккумулятора',
          value: 'Li-Ion',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🛡 ЗАЩИТА
        // ======================
        {
          name: 'Степень защиты',
          value: 'IP68',
          groupId: sections.extra.id,
        },
        {
          name: 'Материал рамки',
          value: 'Алюминий',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];
export const buildSamsungGalaxy256GbS25Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|256 ГБ',
    color: 'Тёмно-синий',
    sim: 'Dual SIM',
    price: 14099,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '161.3 x 76.6 x 7.4 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy S25   ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Тёмно-синий', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '256 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Модель CPU',
          value: 'Exynos 2400',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Максимальная частота',
          value: '3.2 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель видеокарты',
          value: 'Samsung Xclipse 940',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ / СЕТЬ
        // ======================
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connection.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connection.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connection.id },
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'GPS', value: 'Да', groupId: sections.connection.id },
        {
          name: 'USB разъем',
          value: 'USB Type-C 3.2',
          groupId: sections.connection.id,
        },

        // ======================
        // 📶 МОБИЛЬНАЯ СЕТЬ
        // ======================
        { name: 'eSIM', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Количество SIM',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
        { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Dynamic AMOLED 2X',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1080 x 2340',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android 15',
          groupId: sections.software.id,
        },
        { name: 'Оболочка', value: 'One UI 7', groupId: sections.software.id },
        {
          name: 'Искусственный интеллект',
          value: 'Galaxy AI',
          groupId: sections.software.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Основная камера',
          value: '50 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Сверхширокая камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Телефото камера',
          value: '8 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Разрешение видео',
          value: '8K 30fps',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '4900 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: '45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Тип аккумулятора',
          value: 'Li-Ion',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🛡 ЗАЩИТА
        // ======================
        {
          name: 'Степень защиты',
          value: 'IP68',
          groupId: sections.extra.id,
        },
        {
          name: 'Материал рамки',
          value: 'Алюминий',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];
export const buildSamsungGalaxy512GbS25Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|512 ГБ',
    color: 'Тёмно-синий',
    sim: 'Dual SIM',
    price: 15099,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '161.3 x 76.6 x 7.4 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy S25   ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Тёмно-синий', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '512 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Модель CPU',
          value: 'Exynos 2400',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Максимальная частота',
          value: '3.2 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель видеокарты',
          value: 'Samsung Xclipse 940',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ / СЕТЬ
        // ======================
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connection.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connection.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connection.id },
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'GPS', value: 'Да', groupId: sections.connection.id },
        {
          name: 'USB разъем',
          value: 'USB Type-C 3.2',
          groupId: sections.connection.id,
        },

        // ======================
        // 📶 МОБИЛЬНАЯ СЕТЬ
        // ======================
        { name: 'eSIM', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Количество SIM',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
        { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Dynamic AMOLED 2X',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1080 x 2340',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android 15',
          groupId: sections.software.id,
        },
        { name: 'Оболочка', value: 'One UI 7', groupId: sections.software.id },
        {
          name: 'Искусственный интеллект',
          value: 'Galaxy AI',
          groupId: sections.software.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Основная камера',
          value: '50 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Сверхширокая камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Телефото камера',
          value: '8 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Разрешение видео',
          value: '8K 30fps',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '4900 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: '45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Тип аккумулятора',
          value: 'Li-Ion',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🛡 ЗАЩИТА
        // ======================
        {
          name: 'Степень защиты',
          value: 'IP68',
          groupId: sections.extra.id,
        },
        {
          name: 'Материал рамки',
          value: 'Алюминий',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];
export const buildSamsungGalaxy256GbS25UltraVariants = (
  sections: any,
  model: string,
) => [
  {
    memory: '12 ГБ|256 ГБ',
    color: 'Синий',
    sim: 'Dual SIM',
    price: 17099,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '161.3 x 76.6 x 7.4 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy  S25 Ultra   ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Синий', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '12 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '256 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Модель CPU',
          value: 'Exynos 2400',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Максимальная частота',
          value: '3.2 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Литография',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель видеокарты',
          value: 'Samsung Xclipse 940',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ / СЕТЬ
        // ======================
        { name: 'Wi-Fi', value: 'Да', groupId: sections.connection.id },
        {
          name: 'Версия Bluetooth',
          value: 'v5.3',
          groupId: sections.connection.id,
        },
        { name: 'Bluetooth', value: 'Да', groupId: sections.connection.id },
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'GPS', value: 'Да', groupId: sections.connection.id },
        {
          name: 'USB разъем',
          value: 'USB Type-C 3.2',
          groupId: sections.connection.id,
        },

        // ======================
        // 📶 МОБИЛЬНАЯ СЕТЬ
        // ======================
        { name: 'eSIM', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Количество SIM',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Формат SIM',
          value: 'Nano-SIM',
          groupId: sections.connectivity.id,
        },
        { name: 'Сеть 2G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 3G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 4G', value: 'Да', groupId: sections.connectivity.id },
        { name: 'Сеть 5G', value: 'Да', groupId: sections.connectivity.id },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Dynamic AMOLED 2X',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '1080 x 2340',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android 15',
          groupId: sections.software.id,
        },
        { name: 'Оболочка', value: 'One UI 7', groupId: sections.software.id },
        {
          name: 'Искусственный интеллект',
          value: 'Galaxy AI',
          groupId: sections.software.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Основная камера',
          value: '50 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Сверхширокая камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Телефото камера',
          value: '8 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Разрешение видео',
          value: '8K 30fps',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '4900 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: '45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Тип аккумулятора',
          value: 'Li-Ion',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🛡 ЗАЩИТА
        // ======================
        {
          name: 'Степень защиты',
          value: 'IP68',
          groupId: sections.extra.id,
        },
        {
          name: 'Материал рамки',
          value: 'Алюминий',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];

// A Variants

export const buildSamsungGalaxy256GbA56Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|256 ГБ',
    color: 'Серый',
    sim: 'Dual SIM',
    price: 7369,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '162 x 77 x 7 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '198 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy A56 ${model}`,
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Серия',
          value: 'Samsung Galaxy A',
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Grey', groupId: sections.baseGroup.id },
        { name: 'Оттенок', value: 'Lightgray', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Алюминий',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал задней панели',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '256 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Процессор',
          value: 'Exynos 1580',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Samsung',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '1.9 – 2.9 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Технологический процесс',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель GPU',
          value: 'Xclipse 540',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ И СЕТЬ
        // ======================
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'eSIM', value: 'Да', groupId: sections.connection.id },
        { name: 'Поддержка 5G', value: 'Да', groupId: sections.connection.id },
        { name: 'Поддержка 4G', value: 'Да', groupId: sections.connection.id },
        { name: 'Поддержка 3G', value: 'Да', groupId: sections.connection.id },
        { name: 'Сеть GSM', value: 'Да', groupId: sections.connection.id },

        {
          name: 'Беспроводные подключения',
          value: 'Wi-Fi 802.11ax, Bluetooth 5.4',
          groupId: sections.connectivity.id,
        },
        { name: 'USB Type-C', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Аудио разъём 3.5 мм',
          value: 'Нет',
          groupId: sections.connectivity.id,
        },
        {
          name: 'SIM Card',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Super AMOLED',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2340 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Плотность пикселей',
          value: '385 ppi',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'HDR',
          value: 'HDR10+',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Яркость',
          value: '1900 нит',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+, Mohs level 5',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Количество основных камер',
          value: '3',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Основная камера',
          value: '50 Мп + 12 Мп + 5 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Видео',
          value: '4K 30fps',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Характеристики основной камеры',
          value: '50 Мп, f/1.8',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Характеристики фронтальной камеры',
          value: '12 Мп, f/2.2',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Вспышка',
          value: 'LED Flash',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android',
          groupId: sections.software.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '5000 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: 'До 45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Беспроводная зарядка',
          value: 'Нет',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Обратная беспроводная зарядка',
          value: 'Нет',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🧭 ДАТЧИКИ И ЗАЩИТА
        // ======================
        { name: 'Гироскоп', value: 'Да', groupId: sections.extra.id },
        {
          name: 'Датчик приближения',
          value: 'Да',
          groupId: sections.extra.id,
        },
        { name: 'Акселерометр', value: 'Да', groupId: sections.extra.id },
        {
          name: 'Сканер отпечатка пальца',
          value: 'Да',
          groupId: sections.extra.id,
        },
        {
          name: 'Навигация',
          value: 'GPS, GALILEO, GLONASS, BDS, QZSS',
          groupId: sections.extra.id,
        },
        {
          name: 'Степень защиты',
          value: 'IP67',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];
export const buildSamsungGalaxy256GbA36Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '8 ГБ|256 ГБ',
    color: 'Черный',
    sim: 'Dual SIM',
    price: 5849,

    specifications: buildSpecs({
      presets: [
        // ======================
        // 📱 ОСНОВНЫЕ
        // ======================
        {
          name: 'Размеры',
          value: '162.9 x 78.2 x 7.4 мм',
          groupId: sections.baseGroup.id,
        },
        { name: 'Вес', value: '195 г', groupId: sections.baseGroup.id },
        { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
        {
          name: 'Модель',
          value: `Galaxy A36 ${model}`,
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Серия',
          value: 'Samsung Galaxy A',
          groupId: sections.baseGroup.id,
        },
        { name: 'Цвет', value: 'Черный', groupId: sections.baseGroup.id },
        { name: 'Оттенок', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Материал корпуса',
          value: 'Пластик',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Материал задней панели',
          value: 'Стекло',
          groupId: sections.baseGroup.id,
        },
        { name: 'Блок питания', value: 'Нет', groupId: sections.baseGroup.id },

        // ======================
        // 🧠 ПАМЯТЬ
        // ======================
        { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },
        {
          name: 'Встроенная память',
          value: '256 ГБ',
          groupId: sections.memory.id,
        },
        {
          name: 'Слот для карты памяти',
          value: 'Нет',
          groupId: sections.memory.id,
        },

        // ======================
        // ⚙️ ПРОЦЕССОР
        // ======================
        {
          name: 'Процессор',
          value: 'Snapdragon 6 Gen 3',
          groupId: sections.procesor.id,
        },
        {
          name: 'Модель CPU',
          value: 'Qualcomm SM6475-AB',
          groupId: sections.procesor.id,
        },
        {
          name: 'Производитель CPU',
          value: 'Qualcomm',
          groupId: sections.procesor.id,
        },
        {
          name: 'Количество ядер',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'Частота процессора',
          value: '1.8 – 2.4 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Технологический процесс',
          value: '4 нм',
          groupId: sections.procesor.id,
        },

        // ======================
        // 🎮 ГРАФИКА
        // ======================
        {
          name: 'Модель GPU',
          value: 'Adreno 710',
          groupId: sections.graphic.id,
        },

        // ======================
        // 📡 СВЯЗЬ И СЕТЬ
        // ======================
        { name: 'NFC', value: 'Да', groupId: sections.connection.id },
        { name: 'eSIM', value: 'Да', groupId: sections.connection.id },
        { name: 'Поддержка 5G', value: 'Да', groupId: sections.connection.id },
        { name: 'Поддержка 4G', value: 'Да', groupId: sections.connection.id },
        { name: 'Поддержка 3G', value: 'Да', groupId: sections.connection.id },
        { name: 'Сеть GSM', value: 'Да', groupId: sections.connection.id },

        {
          name: 'Беспроводные подключения',
          value: 'Wi-Fi 802.11ax, Bluetooth 5.4',
          groupId: sections.connectivity.id,
        },
        { name: 'USB Type-C', value: 'Да', groupId: sections.connectivity.id },
        {
          name: 'Аудио разъём 3.5 мм',
          value: 'Нет',
          groupId: sections.connectivity.id,
        },
        {
          name: 'SIM Card',
          value: 'Dual SIM',
          groupId: sections.connectivity.id,
        },

        // ======================
        // 🖥 ДИСПЛЕЙ
        // ======================
        {
          name: 'Диагональ дисплея',
          value: '6.7"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип дисплея',
          value: 'Super AMOLED',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Разрешение дисплея',
          value: '2340 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Плотность пикселей',
          value: '385 ppi',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Частота обновления',
          value: '120 Гц',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Яркость',
          value: '1900 нит',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Защита дисплея',
          value: 'Gorilla Glass Victus+, Mohs level 5',
          groupId: sections.displayGroup.id,
        },

        // ======================
        // 📸 КАМЕРЫ
        // ======================
        {
          name: 'Количество основных камер',
          value: '3',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Основная камера',
          value: '50 Мп + 8 Мп + 5 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Фронтальная камера',
          value: '12 Мп',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Видео',
          value: '4K 30fps',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Характеристики основной камеры',
          value: '50 Мп, f/1.8',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Характеристики фронтальной камеры',
          value: '12 Мп, f/2.2',
          groupId: sections.photoVideo.id,
        },
        {
          name: 'Вспышка',
          value: 'LED Flash',
          groupId: sections.photoVideo.id,
        },

        // ======================
        // 🤖 SOFTWARE
        // ======================
        {
          name: 'Операционная система',
          value: 'Android',
          groupId: sections.software.id,
        },

        // ======================
        // 🔋 ПИТАНИЕ
        // ======================
        {
          name: 'Ёмкость аккумулятора',
          value: '5000 мАч',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Быстрая зарядка',
          value: 'До 45 Вт',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Беспроводная зарядка',
          value: 'Нет',
          groupId: sections.characteristics.id,
        },
        {
          name: 'Обратная беспроводная зарядка',
          value: 'Нет',
          groupId: sections.characteristics.id,
        },

        // ======================
        // 🧭 ДАТЧИКИ И ЗАЩИТА
        // ======================
        { name: 'Гироскоп', value: 'Да', groupId: sections.extra.id },
        {
          name: 'Датчик приближения',
          value: 'Да',
          groupId: sections.extra.id,
        },
        { name: 'Акселерометр', value: 'Да', groupId: sections.extra.id },
        {
          name: 'Сканер отпечатка пальца',
          value: 'Да',
          groupId: sections.extra.id,
        },
        {
          name: 'Биометрия',
          value: 'Лицо и отпечаток пальца',
          groupId: sections.extra.id,
        },
        {
          name: 'Навигация',
          value: 'GPS, GALILEO, GLONASS, BDS, QZSS',
          groupId: sections.extra.id,
        },
        {
          name: 'Степень защиты',
          value: 'IP67',
          groupId: sections.extra.id,
        },
      ],
    }),
  },
];
