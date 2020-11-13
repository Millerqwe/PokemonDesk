import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

import s from './NotFound.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={cn(s.root)}>
      <div className={cn(s.wrapper)}>
        <p className={cn(s.title)}>404</p>
        <p className={cn(s.description)}>
          <span className={cn(s.whiteText)}>The rocket team</span>
          <span> </span>
          <span className={cn(s.blackText)}>has won this time</span>
        </p>
        <button className={cn(s.returnButton)} type="button" onClick={() => navigate('/')}>
          Return
        </button>
      </div>
    </div>
  );
};
