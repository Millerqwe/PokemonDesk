import React from 'react';
import classnames from '../../utils';

import styles from './Footer.module.scss';

const cn = classnames(styles);

export const Footer = () => <footer className={cn('page__footer')}>Подвал</footer>;
