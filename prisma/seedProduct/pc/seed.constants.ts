import buildSpecs from '../buildSpec';

// gaming pc
const gamingPcBaseSpecs = (sections: any) => [
  // ======================
  // 🖥 ОСНОВНЫЕ
  // ======================
  {
    name: 'Тип устройства',
    value: 'Игровой компьютер',
    groupId: sections.baseGroup.id,
  },

  // ======================
  // ⚙️ ПРОЦЕССОР
  // ======================
  {
    name: 'Модель CPU',
    value: 'AMD Ryzen 5 5500',
    groupId: sections.procesor.id,
  },
  { name: 'Количество ядер', value: '6', groupId: sections.procesor.id },
  { name: 'Количество потоков', value: '12', groupId: sections.procesor.id },
  { name: 'Базовая частота', value: '3.6 ГГц', groupId: sections.procesor.id },
  { name: 'Turbo частота', value: '4.2 ГГц', groupId: sections.procesor.id },
  { name: 'Кэш L3', value: '16 МБ', groupId: sections.procesor.id },
  { name: 'TDP', value: '65 Вт', groupId: sections.procesor.id },

  // ======================
  // 🎮 ВИДЕОКАРТА
  // ======================
  {
    name: 'Модель видеокарты',
    value: 'GeForce RTX 3060',
    groupId: sections.graphic.id,
  },
  { name: 'Объем видеопамяти', value: '12 ГБ', groupId: sections.graphic.id },
  { name: 'Тип памяти', value: 'GDDR6', groupId: sections.graphic.id },
  { name: 'Разрядность шины', value: '192 bit', groupId: sections.graphic.id },
  {
    name: 'Видео выходы',
    value: '1x HDMI, 3x DisplayPort',
    groupId: sections.graphic.id,
  },

  // ======================
  // 💾 ОПЕРАТИВНАЯ ПАМЯТЬ
  // ======================
  { name: 'Объем RAM', value: '16 ГБ', groupId: sections.memory.id },
  { name: 'Тип RAM', value: 'DDR4', groupId: sections.memory.id },
  { name: 'Частота RAM', value: '3200 МГц', groupId: sections.memory.id },
  { name: 'Конфигурация', value: '2 x 8 ГБ', groupId: sections.memory.id },
  {
    name: 'Модель RAM',
    value: 'Kingston FURY Beast',
    groupId: sections.memory.id,
  },

  // ======================
  // 💽 НАКОПИТЕЛЬ
  // ======================
  { name: 'Объем SSD', value: '512 ГБ', groupId: sections.memory.id },
  { name: 'Тип накопителя', value: 'M.2 NVMe', groupId: sections.memory.id },
  { name: 'Модель SSD', value: 'GOODRAM PX500', groupId: sections.memory.id },

  // ======================
  // 🧩 МАТЕРИНСКАЯ ПЛАТА
  // ======================
  {
    name: 'Модель',
    value: 'ASRock A520M-HDV',
    groupId: sections.motherboard.id,
  },
  { name: 'Чипсет', value: 'AMD A520', groupId: sections.motherboard.id },
  { name: 'Слоты RAM', value: '2', groupId: sections.motherboard.id },
  { name: 'Макс. объем RAM', value: '64 ГБ', groupId: sections.motherboard.id },
  { name: 'LAN', value: '1 Gbit', groupId: sections.motherboard.id },
  { name: 'Wi-Fi', value: 'Нет', groupId: sections.motherboard.id },

  // ======================
  // ❄️ ОХЛАЖДЕНИЕ
  // ======================

  // ======================
  // 🔌 ПИТАНИЕ / КОРПУС
  // ======================
  {
    name: 'Корпус',
    value: 'Gamemax Diamond CP BK',
    groupId: sections.power.id,
  },
  { name: 'Мощность БП', value: '700 Вт', groupId: sections.power.id },
  { name: 'Сертификат БП', value: 'Standard', groupId: sections.power.id },
  {
    name: 'Модель БП',
    value: 'Gamemax ECO Gamer GE-700',
    groupId: sections.power.id,
  },
  { name: 'Количество вентиляторов', value: '6', groupId: sections.power.id },
];

const pcVariantSpecs = (
  sections: any,
  variant: { ram: string; storage: string },
) => [
  { name: 'Объем RAM', value: variant.ram, groupId: sections.memory.id },
  { name: 'Объем SSD', value: variant.storage, groupId: sections.memory.id },
];

export const buildPcVariants = (
  sections: any,
  variants: { ram: string; storage: string; price: number }[],
) =>
  variants.map((variant) => ({
    memory: `${variant.ram}|${variant.storage}`,
    color: 'Чёрный',
    price: variant.price,

    specifications: buildSpecs({
      presets: [
        ...gamingPcBaseSpecs(sections),
        ...pcVariantSpecs(sections, variant),
      ],
    }),
  }));
