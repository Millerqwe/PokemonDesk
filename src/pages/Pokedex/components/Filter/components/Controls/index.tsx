import React from 'react';
import cn from 'classnames';

// import cards from '../../../Cards/assets/cards.json';
import s from './Controls.module.scss';

const DEFAULT_OPTION_SIZE = 1;

export const Controls = () => {
  return (
    <div className={cn(s.root)}>
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
  );
};
