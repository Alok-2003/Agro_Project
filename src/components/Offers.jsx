import React from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className='max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between'>
      <Link to={'/farmers'} >
      <p className='text-lg font-bold text-gray-700'>Farmers</p>

      </Link>
      <Link to={'/restraurent'} >
      <p className='text-lg font-bold text-gray-700'>Restaurent</p>

      </Link>
      <Link to={'/ngos'} >
      <p className='text-lg font-bold text-gray-700'>NGOs</p>

      </Link>
      <Link to={'/customer'} >
      <p className='text-lg font-bold text-gray-700'>Customer Support</p>

      </Link>
    </div>
  );
};

export default Offers;
