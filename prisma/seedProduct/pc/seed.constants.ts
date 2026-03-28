import buildSpecs from '../buildSpec';

const gamingPcBaseSpecs = (sections: any) => [
  // ======================
  // 🖥 BASE
  // ======================
  {
    name: 'Device Type',
    value: 'Gaming PC',
    groupId: sections.baseGroup.id,
  },

  // ======================
  // ⚙️ PROCESSOR
  // ======================
  {
    name: 'CPU Model',
    value: 'AMD Ryzen 5 5500',
    groupId: sections.procesor.id,
  },
  { name: 'Core Count', value: '6', groupId: sections.procesor.id },
  { name: 'Thread Count', value: '12', groupId: sections.procesor.id },
  { name: 'Base Frequency', value: '3.6 GHz', groupId: sections.procesor.id },
  { name: 'Turbo Frequency', value: '4.2 GHz', groupId: sections.procesor.id },
  { name: 'L3 Cache', value: '16 MB', groupId: sections.procesor.id },
  { name: 'TDP', value: '65 W', groupId: sections.procesor.id },

  // ======================
  // 🎮 GRAPHICS CARD
  // ======================
  {
    name: 'GPU Model',
    value: 'GeForce RTX 3060',
    groupId: sections.graphic.id,
  },
  { name: 'Video Memory', value: '12 GB', groupId: sections.graphic.id },
  { name: 'Memory Type', value: 'GDDR6', groupId: sections.graphic.id },
  { name: 'Bus Width', value: '192 bit', groupId: sections.graphic.id },
  {
    name: 'Video Outputs',
    value: '1x HDMI, 3x DisplayPort',
    groupId: sections.graphic.id,
  },

  // ======================
  // 💾 RAM
  // ======================
  { name: 'RAM Size', value: '16 GB', groupId: sections.memory.id },
  { name: 'RAM Type', value: 'DDR4', groupId: sections.memory.id },
  { name: 'RAM Frequency', value: '3200 MHz', groupId: sections.memory.id },
  { name: 'Configuration', value: '2 x 8 GB', groupId: sections.memory.id },
  {
    name: 'RAM Model',
    value: 'Kingston FURY Beast',
    groupId: sections.memory.id,
  },

  // ======================
  // 💽 STORAGE
  // ======================
  { name: 'SSD Capacity', value: '512 GB', groupId: sections.memory.id },
  { name: 'Storage Type', value: 'M.2 NVMe', groupId: sections.memory.id },
  { name: 'SSD Model', value: 'GOODRAM PX500', groupId: sections.memory.id },

  // ======================
  // 🧩 MOTHERBOARD
  // ======================
  {
    name: 'Model',
    value: 'ASRock A520M-HDV',
    groupId: sections.motherboard.id,
  },
  { name: 'Chipset', value: 'AMD A520', groupId: sections.motherboard.id },
  { name: 'RAM Slots', value: '2', groupId: sections.motherboard.id },
  {
    name: 'Max RAM Capacity',
    value: '64 GB',
    groupId: sections.motherboard.id,
  },
  { name: 'LAN', value: '1 Gbit', groupId: sections.motherboard.id },
  { name: 'Wi-Fi', value: 'No', groupId: sections.motherboard.id },

  // ======================
  // ❄️ COOLING
  // ======================

  // ======================
  // 🔌 POWER / CASE
  // ======================
  {
    name: 'Case',
    value: 'Gamemax Diamond CP BK',
    groupId: sections.power.id,
  },
  { name: 'PSU Power', value: '700 W', groupId: sections.power.id },
  { name: 'PSU Certification', value: 'Standard', groupId: sections.power.id },
  {
    name: 'PSU Model',
    value: 'Gamemax ECO Gamer GE-700',
    groupId: sections.power.id,
  },
  { name: 'Number of Fans', value: '6', groupId: sections.power.id },
];

const pcVariantSpecs = (
  sections: any,
  variant: { ram: string; storage: string },
) => [
  { name: 'RAM', value: variant.ram, groupId: sections.memory.id },
  { name: 'SSD Capacity', value: variant.storage, groupId: sections.memory.id },
];

export const buildPcVariants = (
  sections: any,
  variants: { ram: string; storage: string; price: number }[],
) =>
  variants.map((variant) => ({
    memory: `${variant.ram}|${variant.storage}`,
    color: 'Black',
    price: variant.price,

    specifications: buildSpecs({
      presets: [
        ...gamingPcBaseSpecs(sections),
        ...pcVariantSpecs(sections, variant),
      ],
    }),
  }));
