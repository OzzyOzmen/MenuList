import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { data } from '../../data';
import Menulist from './Menulist';
import { CirclesWithBar } from 'react-loader-spinner';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay
    const delay = 700;
    const timer = setTimeout(() => {
      setItems(data.item);
      setLoading(false);
    }, delay);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header title='Example Caffee Menu' />
      {loading && (
        <div className='flex items-center justify-center'>
          <CirclesWithBar
            height={50}
            width={50}
            color='#4fa94d'
            visible={true}
            ariaLabel='circles-with-bar-loading'
          />
        </div>
      )}

      {!loading && <Menulist items={items} />}
    </div>
  );
};

export default Home;
