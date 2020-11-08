import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classname from '../utils';
import { Header } from './Header';
import { Footer } from './Footer';
import { HomePage } from '../pages/Home';
import { PokedexPage } from '../pages/Pokedex';

import '../style/main.scss';
import styles from './App.module.scss';

const cn = classname(styles);

const App: FC<any> = () => {
  return (
    <div className={cn('page')}>
      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pokedex" component={PokedexPage} />
      </Switch>

      <Footer />
    </div>
  );
};

export default (
  <Router>
    <App />
  </Router>
);
