import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './App';

import './style.css';


ReactDom.render(
  React.createElement(App),
  document.querySelector('.root')
);
