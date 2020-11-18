import React, { FC } from 'react';
import classname from '../../utils/classnames';

import styles from './Content.module.scss';

const cn = classname(styles);

export const Content: FC = ({ children }) => <div className={cn('page__content')}>{children}</div>;
