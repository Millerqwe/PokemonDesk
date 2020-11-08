import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from '../../utils';
import { menuItems } from './constants';
import { ReactComponent as Logo } from './assets/Logo.svg';

import styles from './Header.module.scss';

const cn = classnames(styles);

export const Header: FC = () => (
  <header className={cn('page__header', 'header')}>
    <div className={cn('header__container')}>
      <a className={cn('header__logo')} href="./">
        <Logo />
      </a>
      <ul className={cn('header__navigation', 'navigation')}>
        {menuItems.map(({ id, title, link }) => (
          <li className={cn('navigation__item')} key={id}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
