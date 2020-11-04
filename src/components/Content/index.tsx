import React from 'react';
import classname from '../../helper/services';

import styles from './Content.module.scss';

const cn = classname(styles);

export const Content = () => <div className={cn('page__content')} />;
