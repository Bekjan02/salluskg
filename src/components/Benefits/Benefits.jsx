import React from 'react';
import { Accordion } from '../../common/ui';
import './styles.scss';

export const Benefits = () => {
  const accordionItem = [
    {
      id: 1,
      title: 'Изучение правовой оценки',
      content:
        'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
    },
    {
      id: 2,
      title: 'Огромная база строящихся объектов',
      content:
        'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
    },
    {
      id: 3,
      title: 'Проверенные и прямые цены застройщика',
      content:
        'Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.',
    },
  ];

  return (
    <div className="benefits">
      <h2 className="section__title">Преимущества работы с нами</h2>
      <div className="lg-md:flex lg-md:gap-8 lg-md:items-center">
        <div className="xl:w-1/2">
          <img
            src="/src/assets/images/benefits-mobile.png"
            alt=""
            className="lg-md:hidden"
          />
          <img
            src="/src/assets/images/benefits-desktop.png"
            alt=""
            className="hidden lg-md:block"
          />
        </div>
        <Accordion data={accordionItem} />
      </div>
    </div>
  );
};
