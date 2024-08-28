import React, { useState } from 'react';
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Breakfast = () => {
  const [items] = useState(data.item);

  return (
    <div>
      <Header title='Kavaköy Caffee - Breakfast Menu' />
      {items && (
        <Menulist items={items.filter((item) => item.type === 1)} />
      )}
    </div>
  );
};

export default Breakfast;
