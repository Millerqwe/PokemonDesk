import React, { useState, useEffect, FC } from 'react';
import classnames from '../../../../utils';
import PikachyPng from './assets/Pikachy.png';
import BigCloudPng from './assets/BigCloud.png';
import SmallCloudPng from './assets/SmallCloud.png';
import BigPokeBallPng from './assets/BigPokeball.png';
import SmallPokeBallPng from './assets/SmallPokeball.png';

import styles from './Parallax.module.scss';

const cn = classnames(styles);

export const Parallax: FC = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  const handleMouseMove = (event: MouseEvent) => {
    setScreenX(event.screenX);
    setScreenY(event.screenY);
  };

  return (
    <div className={cn('parallax')}>
      <div
        className={cn('parallax__pikachy')}
        style={{ transform: `translate(${screenY * 0.07}px, ${screenX * -0.01}px)` }}>
        <img src={PikachyPng} width="559" alt="Pikachy" />
      </div>
      <div
        className={cn('parallax__big-cloud')}
        style={{ transform: `translate(${screenY * -0.05}px, ${screenX * -0.01}px)` }}>
        <img src={BigCloudPng} width="343" height="165" alt="Big cloud" />
      </div>
      <div
        className={cn('parallax__small-cloud')}
        style={{ transform: `translate(${screenY * 0.05}px, ${screenX * -0.01}px)` }}>
        <img src={SmallCloudPng} width="224" height="107" alt="Small cloud" />
      </div>
      <div
        className={cn('parallax__big-pokeball')}
        style={{ transform: `translate(${screenY * -0.03}px, ${screenX * -0.01}px)` }}>
        <img src={BigPokeBallPng} width="316" alt="Big pokeball" />
      </div>
      <div
        className={cn('parallax__small-pokeball')}
        style={{ transform: `translate(${screenY * 0.03}px, ${screenX * 0.01}px)` }}>
        <img src={SmallPokeBallPng} width="167" alt="Small pokeball" />
      </div>
    </div>
  );
};
