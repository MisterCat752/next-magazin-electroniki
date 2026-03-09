import buildSpecs from '../../buildSpec';

const iphone12BaseSpecs = (sections: any, model: string) => [
  // 📱 GENERAL
  { name: 'Brand', value: 'Apple', groupId: sections.baseGroup.id },
  {
    name: 'Model',
    value: `iPhone 12 ${model}`,
    groupId: sections.baseGroup.id,
  },
  { name: 'Body Material', value: 'Glass', groupId: sections.baseGroup.id },
  { name: 'Frame Material', value: 'Aluminum', groupId: sections.baseGroup.id },
  {
    name: 'Dimensions',
    value: '146.7 x 71.5 x 7.4 mm',
    groupId: sections.baseGroup.id,
  },
  { name: 'Weight', value: '164 g', groupId: sections.baseGroup.id },

  // ⚙️ CPU
  { name: 'CPU Model', value: 'A14 Bionic', groupId: sections.procesor.id },
  { name: 'CPU Manufacturer', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Number of Cores', value: '6', groupId: sections.procesor.id },
  {
    name: 'Max Frequency',
    value: 'up to 3.1 GHz',
    groupId: sections.procesor.id,
  },
  { name: 'Lithography', value: '5 nm', groupId: sections.procesor.id },

  // 🎮 GRAPHICS
  {
    name: 'GPU Model',
    value: 'Apple GPU (4-core)',
    groupId: sections.graphic.id,
  },

  // 🖥 DISPLAY
  { name: 'Display Size', value: '6.1"', groupId: sections.displayGroup.id },
  {
    name: 'Display Type',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '2532 x 1170',
    groupId: sections.displayGroup.id,
  },
  { name: 'HDR', value: 'HDR10', groupId: sections.displayGroup.id },

  // 🤖 SOFTWARE
  { name: 'Operating System', value: 'iOS', groupId: sections.software.id },

  // 📸 CAMERA
  {
    name: 'Main Camera',
    value: '12 MP + 12 MP',
    groupId: sections.photoVideo.id,
  },
  { name: 'Front Camera', value: '12 MP', groupId: sections.photoVideo.id },
  {
    name: 'Video Resolution',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },

  // 🔋 POWER
  {
    name: 'Battery Capacity',
    value: '2815 mAh',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Fast Charging',
    value: '20 W',
    groupId: sections.characteristics.id,
  },

  // 🛡 PROTECTION
  {
    name: 'Water & Dust Resistance',
    value: 'IP68',
    groupId: sections.extra.id,
  },
  { name: 'Face ID', value: 'Yes', groupId: sections.extra.id },
];

type IphoneVariantConfig = {
  memory: string;
  ram: string;
  color: string;
  price: number;
};

// iPhone 13
const iphone13BaseSpecs = (sections: any, model: string) => [
  // 📱 GENERAL
  { name: 'Brand', value: 'Apple', groupId: sections.baseGroup.id },
  {
    name: 'Model',
    value: `iPhone 13 ${model}`,
    groupId: sections.baseGroup.id,
  },
  { name: 'Body Material', value: 'Glass', groupId: sections.baseGroup.id },
  { name: 'Frame Material', value: 'Aluminum', groupId: sections.baseGroup.id },
  {
    name: 'Dimensions',
    value: '146.7 x 71.5 x 7.65 mm',
    groupId: sections.baseGroup.id,
  },
  { name: 'Weight', value: '174 g', groupId: sections.baseGroup.id },

  // ⚙️ CPU
  { name: 'CPU Model', value: 'A15 Bionic', groupId: sections.procesor.id },
  { name: 'CPU Manufacturer', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Number of Cores', value: '6', groupId: sections.procesor.id },
  {
    name: 'Max Frequency',
    value: 'up to 3.2 GHz',
    groupId: sections.procesor.id,
  },
  { name: 'Lithography', value: '5 nm', groupId: sections.procesor.id },

  // 🎮 GRAPHICS
  {
    name: 'GPU Model',
    value: 'Apple GPU (5-core)',
    groupId: sections.graphic.id,
  },

  // 🖥 DISPLAY
  { name: 'Display Size', value: '6.1"', groupId: sections.displayGroup.id },
  {
    name: 'Display Type',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '2532 x 1170',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Pixel Density',
    value: '460 ppi',
    groupId: sections.displayGroup.id,
  },
  { name: 'HDR', value: 'HDR10', groupId: sections.displayGroup.id },
  {
    name: 'Display Protection',
    value: 'Ceramic Shield',
    groupId: sections.displayGroup.id,
  },

  // 🤖 SOFTWARE
  { name: 'Operating System', value: 'iOS', groupId: sections.software.id },
  { name: 'OS Version', value: '15', groupId: sections.software.id },

  // 📸 CAMERA
  {
    name: 'Main Camera',
    value: '12 MP + 12 MP',
    groupId: sections.photoVideo.id,
  },
  { name: 'Front Camera', value: '12 MP', groupId: sections.photoVideo.id },
  {
    name: 'Video Resolution',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },
  { name: 'Flash', value: 'Yes', groupId: sections.photoVideo.id },

  // 🔋 POWER
  {
    name: 'Battery Capacity',
    value: '3240 mAh',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Fast Charging',
    value: '20 W',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Battery Type',
    value: 'Li-Ion',
    groupId: sections.characteristics.id,
  },

  // 🛡 PROTECTION / SENSORS
  {
    name: 'Water & Dust Resistance',
    value: 'IP68',
    groupId: sections.extra.id,
  },
  { name: 'Face ID', value: 'Yes', groupId: sections.extra.id },
  {
    name: 'Sensors',
    value:
      'Gyroscope, Barometer, Accelerometer, Proximity Sensor, Light Sensor',
    groupId: sections.extra.id,
  },
];

// iPhone 14
const iphone14BaseSpecs = (sections: any, model: string) => [
  { name: 'Brand', value: 'Apple', groupId: sections.baseGroup.id },
  {
    name: 'Model',
    value: `iPhone 14 ${model}`,
    groupId: sections.baseGroup.id,
  },
  {
    name: 'Dimensions',
    value: '146.7 x 71.5 x 7.8 mm',
    groupId: sections.baseGroup.id,
  },
  { name: 'Weight', value: '172 g', groupId: sections.baseGroup.id },

  { name: 'CPU Model', value: 'A15 Bionic', groupId: sections.procesor.id },
  { name: 'CPU Manufacturer', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Number of Cores', value: '6', groupId: sections.procesor.id },
  {
    name: 'Max Frequency',
    value: 'up to 3.2 GHz',
    groupId: sections.procesor.id,
  },
  { name: 'Lithography', value: '5 nm', groupId: sections.procesor.id },

  {
    name: 'GPU Model',
    value: 'Apple GPU (5-core graphics)',
    groupId: sections.graphic.id,
  },

  { name: 'Display Size', value: '6.1"', groupId: sections.displayGroup.id },
  {
    name: 'Display Type',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '2532 x 1170',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Pixel Density',
    value: '460 ppi',
    groupId: sections.displayGroup.id,
  },
  { name: 'HDR', value: 'HDR10', groupId: sections.displayGroup.id },
  { name: 'Always on Display', value: 'No', groupId: sections.displayGroup.id },
  {
    name: 'Display Protection',
    value: 'Ceramic Shield',
    groupId: sections.displayGroup.id,
  },

  { name: 'Operating System', value: 'iOS', groupId: sections.software.id },
  { name: 'OS Version', value: '16', groupId: sections.software.id },

  { name: 'Front Camera', value: '12 MP', groupId: sections.photoVideo.id },
  {
    name: 'Main Camera',
    value: '12 MP + 12 MP',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Video Resolution',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },
  { name: 'Flash', value: 'Yes', groupId: sections.photoVideo.id },

  {
    name: 'Audio System',
    value: 'Stereo',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Battery Capacity',
    value: '3279 mAh',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Battery Type',
    value: 'Li-Ion',
    groupId: sections.characteristics.id,
  },

  { name: 'Bluetooth', value: 'v5.3', groupId: sections.connectivity.id },
  { name: 'Wi-Fi', value: '802.11 ax', groupId: sections.connectivity.id },
  { name: 'NFC', value: 'Yes', groupId: sections.connectivity.id },
  { name: 'GPS', value: 'Yes', groupId: sections.connectivity.id },
  { name: 'USB Port', value: 'Lightning', groupId: sections.connectivity.id },
  { name: '3.5mm Jack', value: 'No', groupId: sections.connectivity.id },

  { name: 'Face ID', value: 'Yes', groupId: sections.extra.id },
  { name: 'Gyroscope', value: 'Yes', groupId: sections.extra.id },
  { name: 'Accelerometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Barometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Compass', value: 'Yes', groupId: sections.extra.id },
  {
    name: 'Water & Dust Resistance',
    value: 'IP68',
    groupId: sections.extra.id,
  },
];

// iPhone 15
const iphone15BaseSpecs = (sections: any) => [
  // 📱 GENERAL
  { name: 'Brand', value: 'Apple', groupId: sections.baseGroup.id },
  { name: 'Model', value: 'iPhone 15', groupId: sections.baseGroup.id },
  {
    name: 'Dimensions',
    value: '147.6 x 71.6 x 7.8 mm',
    groupId: sections.baseGroup.id,
  },
  { name: 'Weight', value: '171 g', groupId: sections.baseGroup.id },
  { name: 'Model Code', value: 'MTP03RX/A', groupId: sections.baseGroup.id },

  // 💾 MEMORY
  { name: 'RAM', value: '6 GB', groupId: sections.memory.id },
  { name: 'Internal Storage', value: '128 GB', groupId: sections.memory.id },

  // ⚙️ CPU
  { name: 'CPU Model', value: 'A16 Bionic', groupId: sections.procesor.id },
  { name: 'CPU Manufacturer', value: 'Apple', groupId: sections.procesor.id },
  {
    name: 'Max Frequency',
    value: 'up to 3.46 GHz',
    groupId: sections.procesor.id,
  },
  { name: 'Lithography', value: '4 nm', groupId: sections.procesor.id },

  // 🎮 GRAPHICS
  {
    name: 'GPU Model',
    value: 'Apple GPU (5-core graphics)',
    groupId: sections.graphic.id,
  },

  // 🖥 DISPLAY
  { name: 'Display Size', value: '6.1"', groupId: sections.displayGroup.id },
  {
    name: 'Display Type',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '2556 x 1179',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Pixel Density',
    value: '460 ppi',
    groupId: sections.displayGroup.id,
  },

  // 🤖 SOFTWARE
  { name: 'Operating System', value: 'iOS', groupId: sections.software.id },
  { name: 'OS Version', value: '17', groupId: sections.software.id },

  // 📸 CAMERA
  { name: 'Front Camera', value: '12 MP', groupId: sections.photoVideo.id },
  {
    name: 'Number of Main Cameras',
    value: '2',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Main Camera',
    value: '48 MP + 12 MP',
    groupId: sections.photoVideo.id,
  },
  {
    name: 'Video Resolution',
    value: '4K 24fps',
    groupId: sections.photoVideo.id,
  },
  { name: 'Flash', value: 'Yes', groupId: sections.photoVideo.id },

  // 🔊 AUDIO
  {
    name: 'Audio System',
    value: 'Stereo',
    groupId: sections.characteristics.id,
  },

  // 🔋 POWER
  {
    name: 'Battery Capacity',
    value: '3349 mAh',
    groupId: sections.characteristics.id,
  },

  // 📡 CONNECTIVITY
  { name: 'Bluetooth', value: 'v5.3', groupId: sections.connectivity.id },
  { name: 'Wi-Fi', value: '802.11 ax', groupId: sections.connectivity.id },
  { name: 'NFC', value: 'Yes', groupId: sections.connectivity.id },
  { name: 'GPS', value: 'Yes', groupId: sections.connectivity.id },
  {
    name: 'USB Port',
    value: 'USB Type-C 2.0',
    groupId: sections.connectivity.id,
  },
  { name: '3.5mm Jack', value: 'No', groupId: sections.connectivity.id },

  // 📶 NETWORK / SIM
  { name: 'eSIM', value: 'Yes', groupId: sections.connectivity.id },
  {
    name: 'Network Generation',
    value: '5G',
    groupId: sections.connectivity.id,
  },
  {
    name: 'Number of SIMs',
    value: 'Single SIM',
    groupId: sections.connectivity.id,
  },
  { name: 'SIM Size', value: 'Nano-SIM', groupId: sections.connectivity.id },

  // 🛡 SENSORS / BODY
  { name: 'Face ID', value: 'Yes', groupId: sections.extra.id },
  { name: 'Accelerometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Gyroscope', value: 'Yes', groupId: sections.extra.id },
  { name: 'Proximity Sensor', value: 'Yes', groupId: sections.extra.id },
  { name: 'Compass', value: 'Yes', groupId: sections.extra.id },
  { name: 'Barometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Body Material', value: 'Ceramic', groupId: sections.extra.id },
  { name: 'Frame Material', value: 'Aluminum', groupId: sections.extra.id },
  {
    name: 'Water & Dust Resistance',
    value: 'IP68',
    groupId: sections.extra.id,
  },
];

// iPhone 16
const iphone16BaseSpecs = (sections: any) => [
  // 📱 GENERAL
  { name: 'Brand', value: 'Apple', groupId: sections.baseGroup.id },
  { name: 'Model', value: 'iPhone 16', groupId: sections.baseGroup.id },
  {
    name: 'Dimensions',
    value: '147.6 x 71.6 x 7.8 mm',
    groupId: sections.baseGroup.id,
  },
  { name: 'Weight', value: '170 g', groupId: sections.baseGroup.id },
  { name: 'Color', value: 'White', groupId: sections.baseGroup.id },
  { name: 'Model Code', value: 'MYE93HX/A', groupId: sections.baseGroup.id },

  // 💾 MEMORY
  { name: 'RAM', value: '8 GB', groupId: sections.memory.id },
  { name: 'Internal Storage', value: '128 GB', groupId: sections.memory.id },
  { name: 'Memory Card Slot', value: 'No', groupId: sections.memory.id },

  // ⚙️ CPU
  { name: 'CPU Model', value: 'A18 Bionic', groupId: sections.procesor.id },
  { name: 'CPU Manufacturer', value: 'Apple', groupId: sections.procesor.id },
  { name: 'Number of Cores', value: '6', groupId: sections.procesor.id },
  { name: 'Lithography', value: '3 nm', groupId: sections.procesor.id },

  // 🎮 GRAPHICS
  {
    name: 'GPU Model',
    value: 'Apple GPU (5-core graphics)',
    groupId: sections.graphic.id,
  },

  // 🖥 DISPLAY
  { name: 'Display Size', value: '6.1"', groupId: sections.displayGroup.id },
  {
    name: 'Display Type',
    value: 'Super Retina XDR OLED',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '2556 x 1179',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Pixel Density',
    value: '460 ppi',
    groupId: sections.displayGroup.id,
  },
  { name: 'Refresh Rate', value: '60 Hz', groupId: sections.displayGroup.id },
  {
    name: 'Always on Display',
    value: 'Yes',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Protection',
    value: 'Ceramic Shield glass',
    groupId: sections.displayGroup.id,
  },

  // 🤖 SOFTWARE
  { name: 'Operating System', value: 'iOS', groupId: sections.software.id },
  { name: 'OS Version', value: '18', groupId: sections.software.id },
  {
    name: 'Artificial Intelligence (AI)',
    value: 'Apple Intelligence',
    groupId: sections.software.id,
  },

  // 📸 CAMERA
  { name: 'Front Camera', value: '12 MP', groupId: sections.photoVideo.id },
  {
    name: 'Number of Main Cameras',
    value: '2',
    groupId: sections.photoVideo.id,
  },
  { name: 'Main Camera', value: '48 MP', groupId: sections.photoVideo.id },
  {
    name: 'Ultra Wide Camera',
    value: '12 MP',
    groupId: sections.photoVideo.id,
  },
  { name: 'Telephoto Camera', value: '12 MP', groupId: sections.photoVideo.id },
  {
    name: 'Video Resolution',
    value: '4K 60fps',
    groupId: sections.photoVideo.id,
  },
  { name: 'Flash', value: 'Yes', groupId: sections.photoVideo.id },

  // 🔊 AUDIO
  {
    name: 'Audio System',
    value: 'Stereo',
    groupId: sections.characteristics.id,
  },

  // 🔋 POWER
  {
    name: 'Battery Capacity',
    value: '3561 mAh',
    groupId: sections.characteristics.id,
  },
  {
    name: 'Battery Type',
    value: 'Li-Ion',
    groupId: sections.characteristics.id,
  },

  // 📡 CONNECTIVITY
  { name: 'Bluetooth', value: 'v5.3', groupId: sections.connectivity.id },
  { name: 'Wi-Fi', value: '802.11 be', groupId: sections.connectivity.id },
  { name: 'NFC', value: 'Yes', groupId: sections.connectivity.id },
  { name: 'GPS', value: 'Yes', groupId: sections.connectivity.id },
  {
    name: 'USB Port',
    value: 'USB Type-C 2.0',
    groupId: sections.connectivity.id,
  },
  { name: '3.5mm Jack', value: 'No', groupId: sections.connectivity.id },

  // 📶 NETWORK / SIM
  { name: 'eSIM', value: 'Yes', groupId: sections.connectivity.id },
  {
    name: 'Network Generation',
    value: '5G',
    groupId: sections.connectivity.id,
  },
  {
    name: 'Number of SIMs',
    value: 'Single SIM',
    groupId: sections.connectivity.id,
  },
  { name: 'SIM Size', value: 'Nano-SIM', groupId: sections.connectivity.id },

  // 🛡 SENSORS / BODY
  { name: 'Face ID', value: 'Yes', groupId: sections.extra.id },
  { name: 'Accelerometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Gyroscope', value: 'Yes', groupId: sections.extra.id },
  { name: 'Proximity Sensor', value: 'Yes', groupId: sections.extra.id },
  { name: 'Light Sensor', value: 'Yes', groupId: sections.extra.id },
  { name: 'Compass', value: 'Yes', groupId: sections.extra.id },
  { name: 'Barometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Pedometer', value: 'Yes', groupId: sections.extra.id },
  { name: 'Body Material', value: 'Ceramic', groupId: sections.extra.id },
  { name: 'Frame Material', value: 'Aluminum', groupId: sections.extra.id },
  {
    name: 'Water & Dust Resistance',
    value: 'IP68',
    groupId: sections.extra.id,
  },
];

//  iphone 17

// iPhone variant specs
const iphoneVariantSpecs = (
  sections: any,
  variant: { ram: string; memory: string; color: string },
) => [
  { name: 'RAM', value: variant.ram, groupId: sections.memory.id },
  { name: 'Storage', value: variant.memory, groupId: sections.memory.id },
  { name: 'Memory Card Slot', value: 'No', groupId: sections.memory.id },
  { name: 'Color', value: variant.color, groupId: sections.baseGroup.id },
  { name: '5G Network', value: 'Yes', groupId: sections.connectivity.id },
  { name: 'SIM Type', value: 'Nano-SIM', groupId: sections.connectivity.id },
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
export const buildIphone15Variants = (
  sections: any,
  model: string,
  variants: IphoneVariantConfig[],
) =>
  buildIphoneVariants({
    sections,
    model,
    variants,
    baseSpecs: iphone15BaseSpecs,
  });
export const buildIphone16Variants = (
  sections: any,
  model: string,
  variants: IphoneVariantConfig[],
) =>
  buildIphoneVariants({
    sections,
    model,
    variants,
    baseSpecs: iphone16BaseSpecs,
  });
