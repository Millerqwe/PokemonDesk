import React from 'react';
import cn from 'classnames';
import { Searcher } from './components/Searcher';
import { Controls } from './components/Controls';

import s from './Filter.module.scss';

export const Filter = () => {
  return (
    <div className={cn(s.root)}>
      <Searcher />
      <Controls />
    </div>
  );
};
