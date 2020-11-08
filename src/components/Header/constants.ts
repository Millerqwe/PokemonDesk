interface menuItem {
  id: number;
  title: string;
  link: string;
}

export const menuItems: Array<menuItem> = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    title: 'Legendaries',
    link: './legendaries',
  },
  {
    id: 4,
    title: 'Documentation',
    link: './documentation',
  },
];
