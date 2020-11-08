import React, { FC } from 'react';
import classnames from '../../../../utils';

import styles from './Heading.module.scss';

export enum Level {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
}

interface HeadingProps {
  level: Level;
}

const cn = classnames(styles);

export const Heading: FC<HeadingProps> = ({ children, level }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={cn('home__heading')}>{children}</HeadingTag>;
};
