import React, { FunctionComponent } from 'react';
import classname from '../helper/services';

import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

import '../style/main.scss';
import styles from './App.module.scss';

const sn = classname(styles);

const App: FunctionComponent = () => {
  return (
    <div className={sn('page')}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
