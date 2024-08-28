import React, { useState } from 'react';
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Dinner = () => {
  const [items] = useState(data.item);

  return (
    <div>
      <Header title='Kavaköy Caffee - Dinner Menu' />
      {items && (
        <Menulist items={items.filter((item) => item.type === 3)} />
      )}
    </div>
  );
};

export default Dinner;
