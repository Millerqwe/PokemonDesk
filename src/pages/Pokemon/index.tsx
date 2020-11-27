import React, { FC } from 'react';
import { useData } from '../../hook/getData';
import { IPokemons } from '../../interface/pokemons';

interface PolemonProps {
    id: string;
}

export const Pokemon: FC<PolemonProps> = ({ id }) => {
    const { data, isLoading } = useData<IPokemons>('getPokemon', { id });

    return isLoading ? <p>Загрузка...</p> : <div>{data && `Render pokmon page with id is ${data.name}`}</div>;
};
