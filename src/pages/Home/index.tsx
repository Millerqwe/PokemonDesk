import React, { FC } from 'react';
import classnames from '../../utils';
import { Button } from '../../components/Button';
import { Content } from '../../components/Content';
import { Parallax } from './components/Parallax';
import { Heading, Level } from './components/Heading';

import styles from './Home.module.scss';

const cn = classnames(styles);

export const HomePage: FC = () => (
  <>
    <Content>
      <div className={cn('home')}>
        <div className={cn('home__content')}>
          <Heading level={Level.one}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={cn('home__description')}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <div className={cn('home__button')}>
            <Button onClick={(e) => e.preventDefault()}>See pokemons</Button>
          </div>
        </div>
        <div className={cn('home__parallax')}>
          <Parallax />
        </div>
      </div>
    </Content>
  </>
);