import React from 'react';
import './styles.scss';
import { cards, getCardColor } from './Services.helpers';

export const Services = () => {
  return (
    <div className="services">
      <h2 className="section__title">Наши услуги</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg-md:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="card_item"
            style={{ backgroundColor: getCardColor(i) }}
          >
            <img
              className="w-12"
              src={`/src/assets/icons/${card.icon}.svg`}
              alt=""
            />
            <h2 className="SubHeading2">{card.title}</h2>
            <p className="text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
