type SpecsConfig = {
  sections: any;
  model: string;
  memory: string;
  color: string;
  sectionId?: number;
};

export function buildSamsungFESpecs({
  sections,
  model,
  memory,
  color,
  sectionId,
}: SpecsConfig) {
  return [
    // 📱 Экран
    {
      name: 'Диагональ экрана',
      value: '6.7"',
      groupId: sections.displayGroup.id,
    },

    // 🧱 База
    { name: 'Бренд', value: 'Samsung', groupId: sections.baseGroup.id },
    {
      name: 'Модель',
      value: `Galaxy ${model}`,
      groupId: sections.baseGroup.id,
    },
    { name: 'Цвет', value: color, groupId: sections.baseGroup.id },
    { name: 'Вес', value: '190 г', groupId: sections.baseGroup.id },

    // 💾 Память
    { name: 'Память', value: memory, groupId: sections.memory.id },
    { name: 'RAM', value: '8 ГБ', groupId: sections.memory.id },

    // 🤖 ПО
    {
      name: 'Операционная система',
      value: 'Android',
      groupId: sections.software.id,
    },
    { name: 'Оболочка ОС', value: 'One UI', groupId: sections.software.id },
    { name: 'Версия оболочки ОС', value: '7', groupId: sections.software.id },
    {
      name: 'Искусственный интеллект (AI)',
      value: 'Galaxy AI',
      groupId: sections.software.id,
    },

    // 📸 Камеры
    {
      name: 'Фронтальная камера',
      value: '12 Мп',
      groupId: sections.photoVideo.id,
    },
    {
      name: 'Основная камера',
      value: '50 Мп',
      groupId: sections.photoVideo.id,
    },
    { name: 'Количество камер', value: '3', groupId: sections.photoVideo.id },

    // 🧩 Корпус
    {
      name: 'Материал корпуса',
      value: 'Стекло',
      groupId: sections.characteristics.id,
    },
  ];
}
