import React, { useState } from 'react';
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Snacks = () => {
  const [items] = useState(data.item);

  return (
    <div>
      <Header title='Kavaköy Caffee - Snacks Menu' />
      {items && (
        <Menulist items={items.filter((item) => item.type === 4)} />
      )}
    </div>
  );
};

export default Snacks;
