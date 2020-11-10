import React, { FC } from 'react';
import { A, usePath } from 'hookrouter';
import classnames from '../../utils';
import { GENERAL_MENU_ITEMS } from '../../routes';
import { ReactComponent as Logo } from './assets/Logo.svg';

import styles from './Header.module.scss';


const cn = classnames(styles);

export const Header: FC = () => {
  const path = usePath();

  return (
    <header className={cn('page__header', 'header')}>
      <div className={cn('header__container')}>
        <a className={cn('header__logo')} href="./">
          <Logo />
        </a>
        <ul className={cn('header__navigation', 'navigation')}>
          {GENERAL_MENU_ITEMS.map(({ title, link }) => (
            <li className={cn(
              'navigation__link',
              {'navigation__link--active': link === path}
            )} key={title}>
              <A href={link}>
                {title}
              </A>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
