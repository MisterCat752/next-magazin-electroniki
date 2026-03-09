import buildSpecs from '../buildSpec';

type SpecGroupId = {
  display: string;
  base: string;
  software: string;
  memory: string;
  processor: string;
  graphic: string;
  connectivity: string;
  extra: string;
  multimedia: string;
};

interface LaptopVariantParams {
  brand: string;
  series: string;
  modelCode: string;
  memory: string;
  storage: string;
  videoMemory: string;
  color: string;
  shade?: string;
  segment?: string;
  bodyMaterial?: string;
  os?: string;
  ai?: string;
  price: number;
  specs: Partial<
    SpecGroupId & {
      architecture?: string;
      integratedGraphics?: string;
      cpuCores?: string;
      cpuFreq?: string;
      cpuType?: string;
      cpuCache?: string;
      cpuModel?: string;
      cpuManufacturer?: string;
      gpuType?: string;
      gpuModel?: string;
      gpuVRAM?: string;
      gpuManufacturer?: string;
      ramType?: string;
      maxRam?: string;
      displaySize?: string;
      displayResolution?: string;
      displayType?: string;
      displayRefresh?: string;
      displayCoating?: string;
      wifiVer?: string;
      btVer?: string;
      usb3?: string;
      usbC?: string;
      thunderbolt?: string;
      hdmi?: string;
      rj45?: string;
      webcam?: string;
      mic?: string;
      kbBacklight?: string;
      numPad?: string;
    }
  >[];
}

export const buildLaptopVariant = (
  sections: any,
  params: LaptopVariantParams,
) => [
  {
    memory: `${params.memory}|${params.storage}`,
    videoMemory: params.videoMemory,
    color: params.color,
    price: params.price,
    specifications: buildSpecs({
      presets: [
        // Display
        {
          name: 'Screen Size',
          value: params.specs[0]?.displaySize || '',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Resolution Type',
          value: params.specs[0]?.displayResolution || '',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Type',
          value: params.specs[0]?.displayType || '',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Resolution',
          value: params.specs[0]?.displayResolution || '',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Refresh Rate',
          value: params.specs[0]?.displayRefresh || '',
          groupId: sections.displayGroup.id,
        },
        {
          name: 'Display Coating',
          value: params.specs[0]?.displayCoating || '',
          groupId: sections.displayGroup.id,
        },

        // Base
        { name: 'Brand', value: params.brand, groupId: sections.baseGroup.id },
        {
          name: 'Model',
          value: `${params.modelCode}`,
          groupId: sections.baseGroup.id,
        },
        { name: 'Color', value: params.color, groupId: sections.baseGroup.id },
        {
          name: 'Shade',
          value: params.shade || '',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Series',
          value: params.series,
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Segment',
          value: params.segment || 'Gaming',
          groupId: sections.baseGroup.id,
        },
        {
          name: 'Body Material',
          value: params.bodyMaterial || '',
          groupId: sections.baseGroup.id,
        },

        // Software
        {
          name: 'Operating System',
          value: params.os || 'FreeDOS',
          groupId: sections.software.id,
        },
        {
          name: 'Artificial Intelligence (AI)',
          value: params.ai || '',
          groupId: sections.software.id,
        },

        // Memory
        { name: 'RAM', value: params.memory, groupId: sections.memory.id },
        {
          name: 'Maximum RAM',
          value: params.specs[0]?.maxRam || '',
          groupId: sections.memory.id,
        },
        {
          name: 'RAM Type',
          value: params.specs[0]?.ramType || '',
          groupId: sections.memory.id,
        },
        { name: 'Storage Type', value: 'SSD', groupId: sections.memory.id },
        {
          name: 'SSD Capacity',
          value: params.storage,
          groupId: sections.memory.id,
        },

        // Processor
        {
          name: 'CPU Type',
          value: params.specs[0]?.cpuType || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'Cores',
          value: params.specs[0]?.cpuCores || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Frequency',
          value: params.specs[0]?.cpuFreq || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'Cache',
          value: params.specs[0]?.cpuCache || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU',
          value: params.specs[0]?.cpuType || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Model',
          value: params.specs[0]?.cpuModel || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'CPU Manufacturer',
          value: params.specs[0]?.cpuManufacturer || '',
          groupId: sections.procesor.id,
        },
        {
          name: 'Architecture',
          value: params.specs[0]?.architecture || '',
          groupId: sections.procesor.id,
        },

        // Graphic
        {
          name: 'GPU Type',
          value: params.specs[0]?.gpuType || 'Discrete',
          groupId: sections.graphic.id,
        },
        {
          name: 'VRAM',
          value: params.videoMemory.split('|')[1],
          groupId: sections.graphic.id,
        },
        {
          name: 'GPU Manufacturer',
          value: params.specs[0]?.gpuManufacturer || 'NVIDIA',
          groupId: sections.graphic.id,
        },
        {
          name: 'GPU Model',
          value: params.specs[0]?.gpuModel || params.videoMemory.split('|')[0],
          groupId: sections.graphic.id,
        },
        {
          name: 'gpuVRAM',
          value: params.specs[0]?.gpuVRAM || params.videoMemory.split('|')[0],
          groupId: sections.graphic.id,
        },
        {
          name: 'Integrated Graphics',
          value: params.specs[0]?.integratedGraphics || 'Intel UHD Graphics',
          groupId: sections.graphic.id,
        },

        // Connectivity
        { name: 'Wi-Fi', value: 'Yes', groupId: sections.connectivity.id },
        {
          name: 'Wi-Fi Version',
          value: params.specs[0]?.wifiVer || '',
          groupId: sections.connectivity.id,
        },
        { name: 'Bluetooth', value: 'Yes', groupId: sections.connectivity.id },
        {
          name: 'Bluetooth Version',
          value: params.specs[0]?.btVer || '',
          groupId: sections.connectivity.id,
        },
        {
          name: 'HDMI',
          value: params.specs[0]?.hdmi || '1',
          groupId: sections.connectivity.id,
        },
        {
          name: 'RJ-45',
          value: params.specs[0]?.rj45 || '',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB 3.2',
          value: params.specs[0]?.usb3 || '',
          groupId: sections.connectivity.id,
        },
        {
          name: 'USB Type-C',
          value: params.specs[0]?.usbC || '',
          groupId: sections.connectivity.id,
        },
        {
          name: 'Thunderbolt',
          value: params.specs[0]?.thunderbolt || '',
          groupId: sections.connectivity.id,
        },
        {
          name: '3.5 mm Jack',
          value: 'Yes',
          groupId: sections.connectivity.id,
        },

        // Extra
        {
          name: 'Keyboard Backlight',
          value: params.specs[0]?.kbBacklight || 'RGB',
          groupId: sections.extra.id,
        },
        {
          name: 'Numeric Keypad',
          value: params.specs[0]?.numPad || 'Yes',
          groupId: sections.extra.id,
        },

        // Multimedia
        {
          name: 'Webcam',
          value: params.specs[0]?.webcam || '',
          groupId: sections.multimedia.id,
        },
        {
          name: 'Microphone',
          value: params.specs[0]?.mic || 'Yes',
          groupId: sections.multimedia.id,
        },
      ],
    }),
  },
];
