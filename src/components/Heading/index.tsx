import React, { FC } from 'react';

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
  classNames: string;
}

export const Heading: FC<HeadingProps> = ({ children, level, classNames }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={classNames}>{children}</HeadingTag>;
};
