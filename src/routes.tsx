import React, { PropsWithChildren } from 'react';
import { HomePage } from './pages/Home';
import { PokedexPage } from './pages/Pokedex';
import { Pokemon } from './pages/Pokemon';

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
    POKEMON = '/pokemon/:id',
}

interface IGeneralMenuItem {
    title: string;
    link: LinkEnum;
    component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IRoutes {
    [k: string]: (props: PropsWithChildren<any>) => JSX.Element;
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

const PAGE_LINKS: Array<IGeneralMenuItem> = [
    {
        title: 'Pokemon',
        link: LinkEnum.POKEMON,
        component: ({ id }) => <Pokemon id={id} />,
    },
];

export const routes = [...GENERAL_MENU_ITEMS, ...PAGE_LINKS].reduce((acc: IRoutes, { link, component }) => {
    acc[link] = component;
    return acc;
}, {});
