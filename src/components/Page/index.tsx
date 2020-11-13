import React, {FC} from 'react';
import classname from '../../utils';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Content } from '../Content';

import styles from './Page.module.scss';


const cn = classname(styles);

export const Page:FC = ({ children }) => {
  return (
    <div className={cn('page')}>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
}