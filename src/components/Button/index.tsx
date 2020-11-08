import React, { FC, MouseEvent } from 'react';
import classname from '../../utils';
import { SIZES } from './constants';

import styles from './Button.module.scss';

interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  yellowColor?: boolean;
  size?: 'small';
}

const cn = classname(styles);

export const Button: FC<ButtonProps> = ({ children, fullWidth, yellowColor, size, onClick }) => (
  <button
    className={cn('button', {
      'bitton--width--full': fullWidth,
      'button--color--yellow': yellowColor,
      'button--size--small': size === SIZES.small,
    })}
    onClick={onClick}
    type="button">
    {children}
  </button>
);
