import React, { FC } from 'react';
import cn from 'classnames';
import { Card } from '../Card';

import s from './Cards.module.scss';
import cards from './assets/cards.json';

export const Cards: FC = () => {
  return (
    <div className={cn(s.root)}>
      {cards.map(({ name, img, stats, types }) => (
        <Card name={name[0].toUpperCase() + name.slice(1)} img={img} stats={stats} types={types} />
      ))}
    </div>
  );
};
