import buildSpecs from '../../buildSpec';

type VariantParams = {
  memory: string;
  storage: string;
  color: string;
  sim: string;
  price: number;
  modelName: string;
  sections: any;
};

const commonSpecs = (params: VariantParams) => [
  // ======================
  // 📱 GENERAL
  // ======================
  {
    name: 'Dimensions',
    value: params.modelName.includes('S25')
      ? '161.3 x 76.6 x 7.4 mm'
      : params.modelName.includes('A36')
        ? '162.9 x 78.2 x 7.4 mm'
        : '162 x 77 x 7 mm', // A56
    groupId: params.sections.baseGroup.id,
  },
  {
    name: 'Weight',
    value: params.modelName.includes('A36')
      ? '195 g'
      : params.modelName.includes('A56')
        ? '198 g'
        : '190 g',
    groupId: params.sections.baseGroup.id,
  },
  { name: 'Brand', value: 'Samsung', groupId: params.sections.baseGroup.id },
  {
    name: 'Model',
    value: params.modelName,
    groupId: params.sections.baseGroup.id,
  },
  { name: 'Color', value: params.color, groupId: params.sections.baseGroup.id },
  {
    name: 'Body material',
    value: params.modelName.includes('A36') ? 'Plastic' : 'Aluminium',
    groupId: params.sections.baseGroup.id,
  },

  // ======================
  // 🧠 MEMORY
  // ======================
  { name: 'RAM', value: params.memory, groupId: params.sections.memory.id },
  {
    name: 'Internal storage',
    value: params.storage,
    groupId: params.sections.memory.id,
  },
  { name: 'Memory card slot', value: 'No', groupId: params.sections.memory.id },

  // ======================
  // ⚙️ PROCESSOR
  // ======================
  {
    name: 'CPU model',
    value: params.modelName.includes('A36')
      ? 'Snapdragon 6 Gen 3'
      : params.modelName.includes('A56')
        ? 'Exynos 1580'
        : 'Exynos 2400', // S25 Ultra
    groupId: params.sections.procesor.id,
  },
  {
    name: 'CPU manufacturer',
    value: params.modelName.includes('A36') ? 'Qualcomm' : 'Samsung',
    groupId: params.sections.procesor.id,
  },
  {
    name: 'Cores',
    value: params.modelName.includes('S25') ? '10' : '8',
    groupId: params.sections.procesor.id,
  },
  {
    name: 'Max frequency',
    value: params.modelName.includes('A36')
      ? '1.8 – 2.4 GHz'
      : params.modelName.includes('A56')
        ? '1.9 – 2.9 GHz'
        : '3.2 GHz',
    groupId: params.sections.procesor.id,
  },
  { name: 'Lithography', value: '4 nm', groupId: params.sections.procesor.id },

  // ======================
  // 🎮 GRAPHICS
  // ======================
  {
    name: 'GPU model',
    value: params.modelName.includes('A36')
      ? 'Adreno 710'
      : params.modelName.includes('A56')
        ? 'Xclipse 540'
        : 'Xclipse 940', // S25 Ultra
    groupId: params.sections.graphic.id,
  },

  // ======================
  // 📡 CONNECTIVITY
  // ======================
  { name: 'Wi-Fi', value: 'Yes', groupId: params.sections.connection.id },
  {
    name: 'Bluetooth version',
    value: params.modelName.includes('A36') ? '5.4' : '5.3',
    groupId: params.sections.connection.id,
  },
  { name: 'Bluetooth', value: 'Yes', groupId: params.sections.connection.id },
  { name: 'NFC', value: 'Yes', groupId: params.sections.connection.id },
  {
    name: 'USB port',
    value: 'USB Type-C',
    groupId: params.sections.connection.id,
  },

  // ======================
  // 📶 MOBILE NETWORK
  // ======================
  { name: 'eSIM', value: 'Yes', groupId: params.sections.connectivity.id },
  {
    name: 'SIM count',
    value: params.sim,
    groupId: params.sections.connectivity.id,
  },
  {
    name: 'SIM type',
    value: 'Nano-SIM',
    groupId: params.sections.connectivity.id,
  },
  { name: '2G', value: 'Yes', groupId: params.sections.connectivity.id },
  { name: '3G', value: 'Yes', groupId: params.sections.connectivity.id },
  { name: '4G', value: 'Yes', groupId: params.sections.connectivity.id },
  { name: '5G', value: 'Yes', groupId: params.sections.connectivity.id },

  // ======================
  // 🖥 DISPLAY
  // ======================
  {
    name: 'Display size',
    value: params.modelName.includes('S25') ? '6.2"' : '6.7"',
    groupId: params.sections.displayGroup.id,
  },
  {
    name: 'Display type',
    value: params.modelName.includes('A36')
      ? 'Super AMOLED'
      : params.modelName.includes('S25')
        ? 'Dynamic AMOLED'
        : 'Dynamic AMOLED 2X',
    groupId: params.sections.displayGroup.id,
  },
  {
    name: 'Resolution',
    value: '2340 x 1080',
    groupId: params.sections.displayGroup.id,
  },
  {
    name: 'Refresh rate',
    value: '120 Hz',
    groupId: params.sections.displayGroup.id,
  },
  { name: 'HDR', value: 'HDR10+', groupId: params.sections.displayGroup.id },
  {
    name: 'Display protection',
    value: 'Gorilla Glass Victus+',
    groupId: params.sections.displayGroup.id,
  },

  // ======================
  // 🤖 SOFTWARE
  // ======================
  { name: 'OS', value: 'Android 15', groupId: params.sections.software.id },
  {
    name: 'UI',
    value: params.modelName.includes('S25') ? 'One UI 7' : '',
    groupId: params.sections.software.id,
  },
  {
    name: 'AI',
    value: params.modelName.includes('S25') ? 'Galaxy AI' : '',
    groupId: params.sections.software.id,
  },

  // ======================
  // 📸 CAMERA
  // ======================
  {
    name: 'Main camera',
    value: params.modelName.includes('A36')
      ? '50 + 8 + 5 MP'
      : params.modelName.includes('A56')
        ? '50 + 12 + 5 MP'
        : '50 + 10 + 12 MP',
    groupId: params.sections.photoVideo.id,
  },
  {
    name: 'Front camera',
    value: '12 MP',
    groupId: params.sections.photoVideo.id,
  },
  {
    name: 'Video resolution',
    value: params.modelName.includes('S25') ? '8K 30fps' : '4K 30fps',
    groupId: params.sections.photoVideo.id,
  },

  // ======================
  // 🔋 BATTERY
  // ======================
  {
    name: 'Battery capacity',
    value: params.modelName.includes('S25') ? '4900 mAh' : '5000 mAh',
    groupId: params.sections.characteristics.id,
  },
  {
    name: 'Fast charging',
    value: params.modelName.includes('S25') ? '45 W' : 'Up to 45 W',
    groupId: params.sections.characteristics.id,
  },
  {
    name: 'Wireless charging',
    value: params.modelName.includes('S25') ? '15 W' : 'No',
    groupId: params.sections.characteristics.id,
  },

  // ======================
  // 🧭 SENSORS & PROTECTION
  // ======================
  { name: 'Gyroscope', value: 'Yes', groupId: params.sections.extra.id },
  { name: 'Proximity sensor', value: 'Yes', groupId: params.sections.extra.id },
  { name: 'Accelerometer', value: 'Yes', groupId: params.sections.extra.id },
  {
    name: 'Fingerprint scanner',
    value: 'Yes',
    groupId: params.sections.extra.id,
  },
  {
    name: 'Navigation',
    value: 'GPS, GALILEO, GLONASS, BDS, QZSS',
    groupId: params.sections.extra.id,
  },
  {
    name: 'Protection level',
    value: 'IP67',
    groupId: params.sections.extra.id,
  },
];
export const buildVariant = (params: VariantParams) => {
  const specs =
    buildSpecs({
      presets: commonSpecs(params).filter((s) => s.value),
    }) || [];

  return [
    {
      memory: `${params.memory}|${params.storage}`,
      color: params.color,
      sim: params.sim,
      price: params.price,
      specifications: specs, // гарантированно массив
    },
  ];
};
