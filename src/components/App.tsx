import React, { FC } from 'react';
import { useRoutes } from 'hookrouter';
import { Page } from './Page';
import { NotFoundPage } from '../pages/NotFound';

import '../style/main.scss';
import { routes } from '../routes';

const App: FC = () => {
  const match = useRoutes(routes);

  return match ? <Page>{match}</Page> : <NotFoundPage />;
};

export default App;
