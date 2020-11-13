import React, {FC} from 'react';
import classname from '../../../../utils';

// import cards from './assets/cards.json';


const cn = classname('');

export const Cards: FC = () => {
  return (
    <div className={cn('cards')}>
      {
        cards.map(card => card)
      }
    </div>
  )
}
