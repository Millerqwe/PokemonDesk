import React from 'react';
import classname from '../../utils';

import styles from './Content.module.scss';

const cn = classname(styles);

export const Content = ({ children }) => <div className={cn('page__content')}>{children}</div>;
