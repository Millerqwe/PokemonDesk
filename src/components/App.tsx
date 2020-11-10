import React, { FC } from 'react';
import { useRoutes } from 'hookrouter';
import { NotFoundPage } from '../pages/NotFound';

import '../style/main.scss';
import {routes} from '../routes';


const App: FC<any> = () => {
  const match = useRoutes(routes);

  return match || <NotFoundPage />;
};

export default App;
