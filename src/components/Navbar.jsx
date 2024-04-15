import React, { useState } from 'react';

import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <div className=''>
        <img className="mb-2 mr-2 w-11 h-11 z-20 inline-block" src='/logo_agriX.png' alt='images'></img>
        <h1 className='text-white font-bold text-3xl z-30 inline-block '>AgroUnity Network</h1>
      </div>

      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          
          <Link to={'/login'} > <li className='font-bold text-3xl p-8'>Login/Signup</li> </Link>
          <Link to={'/'} > <li className='font-bold text-3xl p-8'>Home</li> </Link>
          <Link to={'/service'} > <li className='font-bold text-3xl p-8'>Services</li> </Link>
          <Link to={'/aboutUs'} > <li className='font-bold text-3xl p-8'>About Us</li> </Link>
          <Link to={'/contactUs'} > <li className='font-bold text-3xl p-8'>Contact Us</li> </Link>          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
