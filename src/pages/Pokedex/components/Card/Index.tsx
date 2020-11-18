import React, { FC } from 'react';
import cn from 'classnames';

import { Heading, Level } from '../../../../components/Heading';

import s from './Card.module.scss';

enum TypeBackground {
  grass = 'greenBackground',
  water = 'blueBackground',
  fire = 'redBackground',
  bug = 'pinkBackground',
  electricity = 'yellowGradient',
  default = 'greyGradient',
}
export interface CardProps {
  name: string;
  img: string;
  stats: { [k: string]: number };
  types: Array<string>;
}

export const Card: FC<CardProps> = ({ name, img, stats, types }) => {
  const getBackground = (): string => {
    for (const type of types) {
      if (type in TypeBackground) {
        return TypeBackground[type];
      }
    }

    return TypeBackground.default;
  };

  const imgBackground = getBackground();

  return (
    <div className={cn(s.root)}>
      <div className={cn(s.infoWrap)}>
        <Heading level={Level.five} classNames={cn(s.titleName)}>
          {name}
        </Heading>
        <div className={cn(s.statWrap)}>
          {Object.entries(stats)
            .slice(0, 2)
            .map(([statTitle, statValue]) => (
              <div className={cn(s.statItem)} key={statTitle + statValue}>
                <div className={cn(s.statValue)}>{statValue}</div>
                {statTitle}
              </div>
            ))}
        </div>
        <div className={cn(s.labelWrap)}>
          {types.map((typeName) => (
            <span className={cn(s.label)} key={typeName}>
              {typeName}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[imgBackground])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
