import React from 'react';
import classnames from '../../utils';
import { Content } from '../../components/Content';

import styles from './Pokedex.module.scss';

const cn = classnames(styles);

export const PokedexPage = () => {
  return (
    <Content>
      <div className={cn('pokedex')}>
        <p className={cn('pokedex__title')}>
          800 <b>Pokemons</b> for you to choose your favorite
        </p>
      </div>
      {/* Searcher */}
      {/* FilterControllers */}
      {/* Cards */}
    </Content>
  );
};
