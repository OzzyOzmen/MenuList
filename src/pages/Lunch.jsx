import React, { useState } from 'react';
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Lunch = () => {
  const [items] = useState(data.item);

  return (
    <div>
      <Header title='Kavaköy Caffee - Lunch Menu' />
      {items && (
        <Menulist items={items.filter((item) => item.type === 2)} />
      )}
    </div>
  );
};

export default Lunch;
