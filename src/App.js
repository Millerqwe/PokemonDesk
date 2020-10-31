import React from 'react';
import cn from 'classnames';

import './App.css';
import style from './App.modules.scss';


const App = () => {
  return (
    <div className={cn(style.text, 'text--opacity')}>
      There is a app component
    </div>
  );
};

export default App;
