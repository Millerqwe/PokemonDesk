import React, { useState } from 'react';
import classnames from '../../utils/classnames';
import { Cards } from './components/Cards';

import s from './Pokedex.module.scss';
import { useData } from '../../hook/getData';

interface IPokemonsData {
    count: number;
    limit: number;
    offset: number;
    pokemons: object[];
    total: number;
}

const cn = classnames(s);
const DEFAULT_OPTION_SIZE = 1;

export const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    // FIX type defining
    const { data, isLoading, isError } = useData('getPokemons', { name: searchValue }, [searchValue]);
    const pokemons: IPokemonsData | null = data;

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>There is the error</div>;
    }

    return (
        <div className={cn('pokedex')}>
            <p className={cn('pokedex__title')}>
                {/* @ts-ignore */}
                {pokemons.total} <b>Pokemons</b> for you to choose your favorite
            </p>

            <div className={cn(s.searcher)}>
                <div className={cn(s.searchContainer)}>
                    <input
                        className={cn(s.searchInput)}
                        type="search"
                        value={searchValue}
                        onChange={handleSearchOnChange}
                    />
                </div>
                <div className={cn(s.controls)}>
                    <label htmlFor="TipoSelect">
                        <select id="TipoSelect" name="Tipo" size={DEFAULT_OPTION_SIZE}>
                            <option value="Fire">Fire</option>
                        </select>
                    </label>
                    <label htmlFor="AtaqueSelect">
                        <select id="AtaqueSelect" name="Ataque" size={DEFAULT_OPTION_SIZE}>
                            <option value="Fire">Option</option>
                        </select>
                    </label>
                    <label htmlFor="ExperienciaSelect">
                        <select id="ExperienciaSelect" name="Experiencia" size={DEFAULT_OPTION_SIZE}>
                            <option value="Fire">Option</option>
                        </select>
                    </label>
                </div>
            </div>
            {/* @ts-ignore */}
            <Cards pokemons={pokemons.pokemons} />
        </div>
    );
};
