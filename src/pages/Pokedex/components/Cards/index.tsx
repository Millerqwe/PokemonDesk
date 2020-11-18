import React, { FC } from 'react';
import cn from 'classnames';
import { Card } from '../Card';

import s from './Cards.module.scss';

interface CardsProps {
    pokemons: Array<any>; // TOD Define correct types
}

export const Cards: FC<CardsProps> = ({ pokemons }) => {
    return (
        <div className={cn(s.root)}>
            {pokemons.map(({ name, img, stats, types }) => (
                <Card key={name} name={name[0].toUpperCase() + name.slice(1)} img={img} stats={stats} types={types} />
            ))}
        </div>
    );
};
