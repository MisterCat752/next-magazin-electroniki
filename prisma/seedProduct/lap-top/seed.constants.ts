import buildSpecs from '../buildSpec';
import {
  baseAsus,
  connectivityDefault,
  cpuRyzen7,
  display156,
  display173,
  gpu,
  memory,
  multimediaDefault,
  softwareFreedos,
} from './helper';
import { buildLaptopVariant } from './newHelper';
export const buildA15Variants = (sections: any, model: string) => [
  {
    memory: '8 GB|512 GB',
    videoMemory: 'GeForce RTX 3060|8 GB',
    price: 11099,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Screen Size',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Resolution',
          value: '1920 x 1080 (Full HD)',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Type',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Refresh Rate',
          value: '144 Hz',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Brightness',
          value: '300 nits',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Contrast Ratio',
          value: '1000:1',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'GPU',
          value: 'RTX 3060',
          groupId: sections.graphic.id,
        },
        { name: 'Brand', value: 'Asus', groupId: sections.baseGroup.id },
        { name: 'Model', value: model, groupId: sections.baseGroup.id },
        { name: 'RAM', value: '8 GB', groupId: sections.memory.id },
        { name: 'SSD', value: '512 GB', groupId: sections.memory.id },
      ],
    }),
  },
];

export const buildA17Variants = (sections: any, model: string) => [
  {
    memory: '16 GB|1 TB',
    videoMemory: 'GeForce RTX 4060|8 GB',

    price: 15459,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Screen Size',
          value: '15.6"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Resolution',
          value: '1920 x 1080 (Full HD)',
          groupId: sections.displayGroup.id,
        },

        { name: 'Brand', value: 'Asus', groupId: sections.baseGroup.id },
        { name: 'Model', value: model, groupId: sections.baseGroup.id },

        { name: 'RAM', value: '16 GB', groupId: sections.memory.id },
        { name: 'SSD', value: '1 TB', groupId: sections.memory.id },

        {
          name: 'GPU',
          value: 'RTX 4060',
          groupId: sections.graphic.id,
        },
        {
          name: 'VRAM',
          value: '8 GB',
          groupId: sections.graphic.id,
        },
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
          name: 'Screen Size',
          value: '17.3"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Тип разрешения экрана',
          value: 'Full HD',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Type',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Resolution дисплея',
          value: '1920 x 1080',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Refresh Rate',
          value: '144 Гц',
          groupId: sections.displayGroup.id,
        },

        // base
        {
          name: 'Dimensions',
          value: '399 x 269 x 25 мм',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Weight',
          value: '2.6 кг',
          groupId: sections.baseGroup.id,
        },
        { name: 'Brand', value: 'Asus', groupId: sections.baseGroup.id },
        {
          name: 'Model',
          value: `FA706NFR ${model}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Color', value: 'Черный', groupId: sections.baseGroup.id },
        {
          name: 'Shade',
          value: 'Графитовый',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Series',
          value: 'TUF Gaming A17',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Body Material',
          value: 'Пластик',
          groupId: sections.baseGroup.id,
        },

        // software
        {
          name: 'Operating System',
          value: 'FreeDOS',
          groupId: sections.software.id,
        },

        // memory
        { name: 'RAM', value: '16 ГБ', groupId: sections.memory.id },
        { name: 'RAM Type', value: 'DDR5', groupId: sections.memory.id },
        { name: 'Storage Type', value: 'SSD', groupId: sections.memory.id },
        { name: 'SSD Capacity', value: '1 ТБ', groupId: sections.memory.id },

        // processor
        {
          name: 'Cache',
          value: '16 МБ',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Type',
          value: 'Ryzen 7',
          groupId: sections.procesor.id,
        },
        {
          name: 'Cores',
          value: '8',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Frequency',
          value: '3.10 ГГц - 4.50 ГГц',
          groupId: sections.procesor.id,
        },
        {
          name: 'Architecture',
          value: 'Zen 3+',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: 'Ryzen 7 7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'Model CPU',
          value: '7435HS',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Manufacturer',
          value: 'AMD',
          groupId: sections.procesor.id,
        },

        // graphic
        {
          name: 'GPU Type',
          value: 'Дискретная',
          groupId: sections.graphic.id,
        },
        {
          name: 'VRAM',
          value: '4 ГБ',
          groupId: sections.graphic.id,
        },
        {
          name: 'GPU Manufacturer',
          value: 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'Model видеокарты',
          value: 'GeForce RTX 2050',
          groupId: sections.graphic.id,
        },

        // connectivity
        { name: 'Wi-Fi', value: 'Yes', groupId: sections.connectivity.id },
        {
          name: 'Версия Wi-Fi',
          value: '802.11 ax',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Yes', groupId: sections.connectivity.id },
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
          name: '3.5 mm Jack',
          value: 'Yes',
          groupId: sections.connectivity.id,
        },

        // multimedia
        {
          name: 'Webcam',
          value: '720p',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Microphone',
          value: 'Yes',
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
    memory: '16 GB|512 GB',
    videoMemory: 'GeForce RTX 3050|4 GB',
    color: 'Black',
    price: 15555,
    specifications: buildSpecs({
      presets: [
        ...display156(sections),

        ...baseAsus(sections, `FA506NCR ${model}`, 'Black', 'TUF Gaming A15'),

        ...softwareFreedos(sections),

        ...memory(sections, '16 GB', '512 GB'),

        ...cpuRyzen7(sections),

        ...gpu(sections, 'GeForce RTX 3050', '4 GB'),

        ...connectivityDefault(sections),

        ...multimediaDefault(sections),
      ],
    }),
  },
];
export const buildAsusTu512gb4050fA15Fa507Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 GB|512 GB',
    videoMemory: 'GeForce RTX 4050|6 GB',
    color: 'Gray',
    price: 18888,
    specifications: buildSpecs({
      presets: [
        ...display156(sections),

        ...baseAsus(sections, `FA507NUR ${model}`, 'Gray', 'TUF Gaming A15'),

        { name: 'Shade', value: 'Mecha', groupId: sections.baseGroup.id },
        { name: 'Segment', value: 'Gaming', groupId: sections.baseGroup.id },

        ...softwareFreedos(sections),

        ...memory(sections, '16 GB', '512 GB'),

        ...cpuRyzen7(sections),

        { name: 'Cache', value: '20 MB', groupId: sections.procesor.id },
        {
          name: 'CPU Frequency',
          value: '3.1 GHz - 4.5 GHz',
          groupId: sections.procesor.id,
        },
        {
          name: 'Architecture',
          value: 'Zen 3+',
          groupId: sections.procesor.id,
        },

        ...gpu(sections, 'GeForce RTX 4050', '6 GB'),

        ...connectivityDefault(sections),

        { name: 'Keyboard', value: 'English', groupId: sections.extra.id },
        { name: 'Numeric Keypad', value: 'Yes', groupId: sections.extra.id },

        ...multimediaDefault(sections),
      ],
    }),
  },
];
export const buildAsusTufA17_1tb4050Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 GB|1 TB',
    videoMemory: 'GeForce RTX 4050|6 GB',
    color: 'Gray',
    price: 21990,
    specifications: buildSpecs({
      presets: [
        ...display173(sections),

        ...baseAsus(sections, `FA707NUR ${model}`, 'Gray', 'TUF Gaming A17'),

        { name: 'Shade', value: 'Mecha', groupId: sections.baseGroup.id },
        { name: 'Segment', value: 'Gaming', groupId: sections.baseGroup.id },
        {
          name: 'Body Material',
          value: 'Metal, Plastic',
          groupId: sections.baseGroup.id,
        },

        ...softwareFreedos(sections),

        ...memory(sections, '16 GB', '1 TB'),

        {
          name: 'Max RAM Capacity',
          value: '32 GB',
          groupId: sections.memory.id,
        },

        ...cpuRyzen7(sections),

        {
          name: 'Cache',
          value: '12 MB SmartCache',
          groupId: sections.procesor.id,
        },
        { name: 'Lithography', value: '6 nm', groupId: sections.procesor.id },
        {
          name: 'CPU Frequency',
          value: '3.20 GHz - 4.75 GHz',
          groupId: sections.procesor.id,
        },

        ...gpu(sections, 'GeForce RTX 4050', '6 GB'),

        {
          name: 'Integrated Graphics',
          value: 'AMD Radeon Graphics',
          groupId: sections.graphic.id,
        },

        ...connectivityDefault(sections),

        {
          name: 'Keyboard Backlight',
          value: 'RGB',
          groupId: sections.extra.id,
        },
        { name: 'Keyboard', value: 'En/Ru', groupId: sections.extra.id },
        { name: 'Numeric Keypad', value: 'Yes', groupId: sections.extra.id },
        { name: 'Optical Drive', value: 'NO ODD', groupId: sections.extra.id },

        ...multimediaDefault(sections),
      ],
    }),
  },
];

export const buildAsusTufF16_1tb4050Variants = (
  sections: any,
  model: string,
) => [
  {
    memory: '16 GB|1 TB',
    videoMemory: 'GeForce RTX 4050|6 GB',
    color: 'Gray',
    price: 21111,
    specifications: buildSpecs({
      presets: [
        {
          name: 'Screen Size',
          value: '16"',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Resolution Type',
          value: 'WUXGA',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Type',
          value: 'IPS',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Resolution',
          value: '1920 x 1200',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Refresh Rate',
          value: '144 Hz',
          groupId: sections.displayGroup.id,
        },

        ...baseAsus(sections, `FX607VU ${model}`, 'Gray', 'TUF Gaming F16'),

        { name: 'Shade', value: 'Mecha', groupId: sections.baseGroup.id },
        { name: 'Segment', value: 'Gaming', groupId: sections.baseGroup.id },
        {
          name: 'Body Material',
          value: 'Plastic, Aluminum',
          groupId: sections.baseGroup.id,
        },

        ...softwareFreedos(sections),

        ...memory(sections, '16 GB', '1 TB'),

        {
          name: 'Max RAM Capacity',
          value: '64 GB',
          groupId: sections.memory.id,
        },

        {
          name: 'CPU Type',
          value: 'Core i7',
          groupId: sections.procesor.id,
        },
        { name: 'Cores', value: '10', groupId: sections.procesor.id },
        { name: 'CPU', value: 'i7-13620H', groupId: sections.procesor.id },
        { name: 'Model CPU', value: '13620H', groupId: sections.procesor.id },
        {
          name: 'CPU Manufacturer',
          value: 'Intel',
          groupId: sections.procesor.id,
        },
        {
          name: 'Architecture',
          value: 'Raptor Lake',
          groupId: sections.procesor.id,
        },
        {
          name: 'Cache',
          value: '24 MB SmartCache',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Frequency',
          value: '3.60 GHz - 4.90 GHz',
          groupId: sections.procesor.id,
        },

        ...gpu(sections, 'GeForce RTX 4050', '6 GB'),

        {
          name: 'Integrated Graphics',
          value: 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        ...connectivityDefault(sections),

        {
          name: 'Keyboard Backlight',
          value: 'Yes',
          groupId: sections.extra.id,
        },
        { name: 'Numeric Keypad', value: 'Yes', groupId: sections.extra.id },

        ...multimediaDefault(sections),
      ],
    }),
  },
];

// Lenovo LOQ 3 24GB 3050
export const buildLoq24gb3050Variants = (sections: any, model: string) =>
  buildLaptopVariant(sections, {
    brand: 'Lenovo',
    series: 'LOQ 3',
    modelCode: `15IAX9 ${model}`,
    memory: '24 GB',
    storage: '512 GB',
    videoMemory: 'GeForce RTX 3050|6 GB',
    color: 'Gray',
    os: 'FreeDOS',
    price: 16990,
    specs: [
      {
        displaySize: '15.6"',
        displayResolution: '1920 x 1080',
        displayType: 'IPS',
        displayRefresh: '144 Hz',

        cpuType: 'Core i5',
        cpuCores: '8',
        cpuFreq: '3.10 GHz - 4.40 GHz',
        cpuCache: '12 MB SmartCache',
        cpuModel: '12450HX',
        cpuManufacturer: 'Intel',
        architecture: 'Alder Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 3050',
        gpuManufacturer: 'NVIDIA',
        ramType: 'DDR5',
      },
    ],
  });
// Lenovo LOQ 3 16GB 3050
export const buildLoq16gb3050Variants = (sections: any, model: string) =>
  buildLaptopVariant(sections, {
    brand: 'Lenovo',
    series: 'LOQ 3',
    modelCode: `15IAX9 ${model}`,
    memory: '16 GB',
    storage: '512 GB',
    videoMemory: 'GeForce RTX 3050|6 GB',
    color: 'Gray',
    shade: 'Luna',
    bodyMaterial: 'Plastic',
    segment: 'Gaming',
    os: 'FreeDOS',
    price: 13333,
    specs: [
      {
        displaySize: '15.6"',
        displayResolution: '1920 x 1080',
        displayType: 'IPS',
        displayRefresh: '144 Hz',
        displayCoating: 'Anti-glare',
        cpuType: 'Core i5',
        cpuCores: '8',
        cpuFreq: '3.10 GHz - 4.40 GHz',
        cpuCache: '12 MB SmartCache',
        cpuModel: '12450HX',
        cpuManufacturer: 'Intel',
        architecture: 'Alder Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 3050',
        gpuManufacturer: 'NVIDIA',
        integratedGraphics: 'Intel UHD Graphics',
        ramType: 'DDR5',
      },
    ],
  });

// Lenovo LOQ 3 24GB 4050
export const buildLoq24gb4050Variants = (sections: any, model: string) =>
  buildLaptopVariant(sections, {
    brand: 'Lenovo',
    series: 'LOQ 3',
    modelCode: `15IAX9 ${model}`,
    memory: '24 GB',
    storage: '512 GB',
    videoMemory: 'GeForce RTX 4050|6 GB',
    color: 'Gray',
    shade: 'Luna',
    os: 'FreeDOS',
    price: 18990,
    specs: [
      {
        displaySize: '15.6"',
        displayResolution: '1920 x 1080',
        displayType: 'IPS',
        displayRefresh: '144 Hz',
        displayCoating: 'Anti-glare',
        cpuType: 'Core i5',
        cpuCores: '8',
        cpuFreq: '3.10 GHz - 4.40 GHz',
        cpuCache: '12 MB SmartCache',
        cpuModel: '12450HX',
        cpuManufacturer: 'Intel',
        architecture: 'Alder Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 4050',
        gpuManufacturer: 'NVIDIA',
        ramType: 'DDR5',
      },
    ],
  });
// Lenovo LOQ 3
export const buildLenovoLoq3_1tb4060Variants = (sections: any, model: string) =>
  buildLaptopVariant(sections, {
    brand: 'Lenovo',
    series: 'LOQ 3',
    modelCode: `15IRX9 ${model}`,
    memory: '24 GB',
    storage: '1 TB',
    videoMemory: 'GeForce RTX 4060|8 GB',
    color: 'Gray',
    shade: 'Luna',
    segment: 'Gaming',
    bodyMaterial: 'Plastic, Aluminum',
    os: 'FreeDOS',
    price: 0,
    specs: [
      {
        displaySize: '15.6"',
        displayResolution: '2560 x 1440',
        displayType: 'IPS',
        displayRefresh: '165 Hz',
        displayCoating: 'Anti-glare',
        cpuType: 'Core i7',
        cpuCores: '20',
        cpuFreq: '3.60 GHz - 4.90 GHz',
        cpuCache: '24 MB SmartCache',
        cpuModel: '13650HX',
        cpuManufacturer: 'Intel',
        architecture: 'Raptor Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 4060',
        gpuManufacturer: 'NVIDIA',
        integratedGraphics: 'Intel UHD Graphics',
        ramType: 'DDR5',
        maxRam: '32 GB',
      },
    ],
  });

// Asus ROG SCAR 18
export const buildAsusRogScar18_2tb5080Variants = (
  sections: any,
  model: string,
) =>
  buildLaptopVariant(sections, {
    brand: 'Asus',
    series: 'ROG Strix SCAR 18',
    modelCode: `G835LW ${model}`,
    memory: '32 GB',
    storage: '2 TB',
    videoMemory: 'GeForce RTX 5080|16 GB',
    color: 'Black',
    segment: 'Gaming',
    bodyMaterial: 'Plastic, Metal',
    os: 'FreeDOS',
    ai: 'Intel AI Boost',
    price: 73333,
    specs: [
      {
        displaySize: '18"',
        displayResolution: '2560 x 1600',
        displayType: 'Mini LED',
        displayRefresh: '240 Hz',
        cpuType: 'Core Ultra 9',
        cpuCores: '24',
        cpuFreq: '2.10 GHz - 5.40 GHz',
        cpuCache: '44 MB',
        cpuModel: '275HX',
        cpuManufacturer: 'Intel',
        architecture: 'Arrow Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 5080',
        gpuManufacturer: 'NVIDIA',
        integratedGraphics: 'Intel Graphics',
        ramType: 'DDR5',
      },
    ],
  });
// Lenovo Legion Pro 5
export const buildLenovoLegionPro5_1tb5070Variants = (
  sections: any,
  model: string,
) =>
  buildLaptopVariant(sections, {
    brand: 'Lenovo',
    series: 'Legion Pro 5',
    modelCode: `16IRX10 ${model}`,
    memory: '32 GB',
    storage: '1 TB',
    videoMemory: 'GeForce RTX 5070|8 GB',
    color: 'Black',
    shade: 'Eclipse',
    segment: 'Gaming',
    bodyMaterial: 'Plastic, Aluminum',
    os: 'FreeDOS',
    price: 36990,
    specs: [
      {
        displaySize: '16"',
        displayResolution: '2560 x 1600',
        displayType: 'IPS',
        cpuType: 'Core i9',
        cpuCores: '24',
        cpuFreq: '2.20 GHz - 5.80 GHz',
        architecture: 'Raptor Lake',
        cpuModel: '14900HX',
        cpuManufacturer: 'Intel',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 5070',
        gpuVRAM: '8 GB',
        integratedGraphics: 'Intel UHD Graphics',
        ramType: 'DDR5',
      },
    ],
  });

// Lenovo Legion 5
export const buildLenovoLegion5_24gb5060Variants = (
  sections: any,
  model: string,
) =>
  buildLaptopVariant(sections, {
    brand: 'Lenovo',
    series: 'Legion 5',
    modelCode: `83LY007MRK ${model}`,
    memory: '24 GB',
    storage: '512 GB',
    videoMemory: 'GeForce RTX 5060|8 GB',
    color: 'Black',
    shade: 'Eclipse',
    segment: 'Gaming',
    bodyMaterial: 'Plastic, Aluminum',
    os: 'FreeDOS',
    ai: 'Intel AI Boost',
    price: 18888,
    specs: [
      {
        displaySize: '15.3"',
        displayResolution: '1920 x 1080',
        displayType: 'IPS',
        displayRefresh: '165 Hz',
        displayCoating: 'Anti-glare',
        cpuType: 'Core i7',
        cpuCores: '14',
        cpuFreq: '3.60 GHz - 4.90 GHz',
        cpuCache: '24 MB SmartCache',
        cpuModel: '13650HX',
        cpuManufacturer: 'Intel',
        architecture: 'Raptor Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 5060',
        gpuManufacturer: 'NVIDIA',
        integratedGraphics: 'Intel UHD Graphics',
        ramType: 'DDR5',
      },
    ],
  });

// HP Omen 5090
export const buildHpOmen5090v64gb = (sections: any, model: string) =>
  buildLaptopVariant(sections, {
    brand: 'HP',
    series: 'Omen Max',
    modelCode: `16-ah0017c ${model}`,
    memory: '64 GB',
    storage: '2 TB',
    videoMemory: 'GeForce RTX 5090|24 GB',
    color: 'Black',
    shade: 'Shadow',
    segment: 'Gaming',
    bodyMaterial: 'Plastic, Aluminum',
    os: 'FreeDOS',
    ai: 'Intel AI Boost',
    price: 84990,
    specs: [
      {
        displaySize: '16"',
        displayResolution: '2560 x 1600',
        displayType: 'OLED',
        displayRefresh: '240 Hz',
        displayCoating: 'Anti-glare',
        cpuType: 'Core Ultra 9',
        cpuCores: '24',
        cpuFreq: '2.10 GHz - 5.40 GHz',
        cpuCache: '36 MB Intel Smart Cache',
        cpuModel: '275HX',
        cpuManufacturer: 'Intel',
        architecture: 'Arrow Lake',
        gpuType: 'Discrete',
        gpuModel: 'GeForce RTX 5090',
        gpuManufacturer: 'NVIDIA',
        integratedGraphics: 'Intel Graphics',
        ramType: 'DDR5',
      },
    ],
  });
