import React from 'react';
import { HomePage } from './pages/Home';
import { PokedexPage } from './pages/Pokedex';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IGeneralMenuItem {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

interface IRoutes {
  [k: string]: () => JSX.Element;
}

export const GENERAL_MENU_ITEMS: Array<IGeneralMenuItem> = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <></>,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <></>,
  },
];

export const routes = GENERAL_MENU_ITEMS.reduce((acc: IRoutes, { link, component }) => {
  acc[link] = component;
  return acc;
}, {});
