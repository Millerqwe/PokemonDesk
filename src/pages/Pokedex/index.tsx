import React from 'react';
import classnames from '../../utils';
import { Page } from '../../components/Page';

import styles from './Pokedex.module.scss';

const cn = classnames(styles);

export const PokedexPage = () => {
  return (
    <Page>
      <div className={cn('pokedex')}>
        <p className={cn('pokedex__title')}>
          800 <b>Pokemons</b> for you to choose your favorite
        </p>
      </div>
      {/* Searcher */}
      {/* FilterControllers */}
      {/* Cards */}
    </Page>
  );
};
