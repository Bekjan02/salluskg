export const cards = [
  {
    id: 1,
    icon: 'repair',
    title: 'Ремонт под ключ',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
  {
    id: 2,
    icon: 'cost_estimation',
    title: 'Составление смет на строительные и проектные работы ',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
  {
    id: 3,
    icon: 'rent',
    title: 'Аренда недвижимости',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
  {
    id: 4,
    icon: 'expertise',
    title:
      'Правовая экспертиза строящихся объектов перед продажей недвижимости застройщиков и нотариальные услуги',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
  {
    id: 5,
    icon: 'consultation',
    title:
      'Проверка, консультация и получение правоустанавливающих, правоудостоверяющих документов на недвижимое имущество',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
  {
    id: 6,
    icon: 'production',
    title: 'Изготовление проектов или проектирование объектов ',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
  {
    id: 7,
    icon: 'sale_application',
    title: 'Приём заявок на продажу земельных участков под строительство',
    description:
      'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
  },
];

const colors = [
  'rgba(208, 226, 118, 0.56)',
  'rgba(145, 202, 154, 0.33)',
  'rgba(103, 206, 182, 0.43)',
];

export const getCardColor = (index) => {
  const rowIndex = Math.floor(index / 3);
  const columnIndex = index % 3;
  if (columnIndex === 2) {
    return colors[2];
  }
  if (rowIndex % 2 === 0) {
    // Even row
    return colors[columnIndex];
  } else {
    return columnIndex === 0 ? colors[1] : colors[0];
  }
};
