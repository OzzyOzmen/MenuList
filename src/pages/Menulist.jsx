import React from 'react';

const Menulist = ({ items }) => {
  if (!items || !Array.isArray(items)) {
    return <div>No items available</div>;
  }

  return (
    <div className='items-container'>
      {items.map((menuItem) => (
        <div key={menuItem.id}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src={menuItem.img} alt='img' className='img' />
            <div className="flex flex-col">
              <div className='title-price'>
                <h5>{menuItem.title}</h5>
                <small>{menuItem.price}</small>
              </div>
              <div>
                <small className='ml-3 w-full'>-----------------------------------</small>
                <p className='description-menu'>{menuItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menulist;
