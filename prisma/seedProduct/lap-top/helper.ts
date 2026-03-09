// helpers.ts
export const display156 = (sections: any) => [
  {
    name: 'Screen Size',
    value: '15.6"',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Resolution Type',
    value: 'Full HD',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Type',
    value: 'IPS',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '1920 x 1080',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Refresh Rate',
    value: '144 Hz',
    groupId: sections.displayGroup.id,
  },
];

export const display173 = (sections: any) => [
  {
    name: 'Screen Size',
    value: '17.3"',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Resolution Type',
    value: 'Full HD',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Type',
    value: 'IPS',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Display Resolution',
    value: '1920 x 1080',
    groupId: sections.displayGroup.id,
  },
  {
    name: 'Refresh Rate',
    value: '144 Hz',
    groupId: sections.displayGroup.id,
  },
];

export const connectivityDefault = (sections: any) => [
  { name: 'Wi-Fi', value: 'Yes', groupId: sections.connectivity.id },
  {
    name: 'Wi-Fi Version',
    value: '802.11 ax',
    groupId: sections.connectivity.id,
  },
  { name: 'Bluetooth', value: 'Yes', groupId: sections.connectivity.id },
  {
    name: 'Bluetooth Version',
    value: 'v5.3',
    groupId: sections.connectivity.id,
  },
  { name: 'HDMI', value: '1', groupId: sections.connectivity.id },
  { name: 'RJ-45', value: '1', groupId: sections.connectivity.id },
  { name: 'USB 3.2', value: '3', groupId: sections.connectivity.id },
  { name: 'USB Type-C', value: '1', groupId: sections.connectivity.id },
  { name: '3.5 mm Jack', value: 'Yes', groupId: sections.connectivity.id },
];

export const multimediaDefault = (sections: any) => [
  { name: 'Webcam', value: '720p', groupId: sections.multimedia.id },
  { name: 'Microphone', value: 'Yes', groupId: sections.multimedia.id },
];

export const baseAsus = (
  sections: any,
  model: string,
  color: string,
  series: string,
) => [
  { name: 'Brand', value: 'Asus', groupId: sections.baseGroup.id },
  { name: 'Model', value: model, groupId: sections.baseGroup.id },
  { name: 'Color', value: color, groupId: sections.baseGroup.id },
  { name: 'Series', value: series, groupId: sections.baseGroup.id },
];

export const softwareFreedos = (sections: any) => [
  {
    name: 'Operating System',
    value: 'FreeDOS',
    groupId: sections.software.id,
  },
];

export const memory = (sections: any, ram: string, ssd: string) => [
  { name: 'RAM', value: ram, groupId: sections.memory.id },
  { name: 'RAM Type', value: 'DDR5', groupId: sections.memory.id },
  { name: 'Storage Type', value: 'SSD', groupId: sections.memory.id },
  { name: 'SSD Capacity', value: ssd, groupId: sections.memory.id },
];

export const cpuRyzen7 = (sections: any) => [
  { name: 'CPU Type', value: 'Ryzen 7', groupId: sections.procesor.id },
  { name: 'Core Count', value: '8', groupId: sections.procesor.id },
  { name: 'CPU', value: 'Ryzen 7 7435HS', groupId: sections.procesor.id },
  { name: 'CPU Manufacturer', value: 'AMD', groupId: sections.procesor.id },
];

export const gpu = (sections: any, model: string, vram: string) => [
  { name: 'Graphics Type', value: 'Discrete', groupId: sections.graphic.id },
  { name: 'VRAM', value: vram, groupId: sections.graphic.id },
  { name: 'GPU Manufacturer', value: 'NVIDIA', groupId: sections.graphic.id },
  { name: 'GPU Model', value: model, groupId: sections.graphic.id },
];
