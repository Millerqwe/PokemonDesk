import React, { FC, memo } from 'react';
import classnames from '../../utils/classnames';

import styles from './Footer.module.scss';

const cn = classnames(styles);

const Footer: FC = () => <footer className={cn('page__footer')}>Подвал</footer>;

export const memoFooter = memo(Footer);
