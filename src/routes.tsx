import React from 'react';
import { HomePage } from './pages/Home';
import { PokedexPage } from './pages/Pokedex';


interface IGeneralMenuItem {
  title: string;
  link: string;
  component: () => JSX.Element
}

interface IRoutes {
  [k: string]: () => JSX.Element
}

export const GENERAL_MENU_ITEMS: Array<IGeneralMenuItem> = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <PokedexPage />
  },
  {
    title: 'Legendaries',
    link: './legendaries',
    component: () => <></>
  },
  {
    title: 'Documentation',
    link: './documentation',
    component: () => <></>
  },
]

export const routes = GENERAL_MENU_ITEMS.reduce(
  (acc: IRoutes, {link, component}) => {
    acc[link] = component;
    return acc;
  }, {}
)
