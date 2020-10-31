import React, {FunctionComponent} from 'react';
import cn from 'classnames';

import './App.css';
import style from './App.modules.scss';


export const App: FunctionComponent = () => {
  return (
    <div className={cn(style.text, 'text--opacity')}>
      There is a app component
    </div>
  );
};
