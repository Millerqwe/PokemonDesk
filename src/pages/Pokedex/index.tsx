import React, { useState, useEffect } from 'react';
import classnames from '../../utils';
import { Filter } from './components/Filter';
import { Cards } from './components/Cards';

import styles from './Pokedex.module.scss';

const cn = classnames(styles);
const pokemonsUrl = `http://zar.hosthot.ru/api/v1/pokemons`;

const usePokemons = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const getPokemons = async () => {
    try {
      const responce = await fetch(pokemonsUrl);
      const data = await responce.json();

      setData(data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  // @ts-ignore // FIX define types
  const { pokemons = [] } = data;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>There is the error</div>;
  }

  return (
    <div className={cn('pokedex')}>
      <p className={cn('pokedex__title')}>
        800 <b>Pokemons</b> for you to choose your favorite
      </p>
      <Filter />
      <Cards pokemons={pokemons} />
    </div>
  );
};
