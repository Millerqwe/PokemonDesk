import React from 'react';
import classnames from '../../helper/services';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

import styles from './header.module.scss';

const cn = classnames(styles);

export const Header = () => (
  <header className={cn('header')}>
    <Logo />
    <Navigation />
  </header>
);
