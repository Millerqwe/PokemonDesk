import React from 'react';
import cn from 'classnames';

import s from './Searcher.module.scss';

export const Searcher = () => {
  return (
    <div className={cn(s.root)}>
      <input type="search" className={cn(s.input)} />
    </div>
  );
};
