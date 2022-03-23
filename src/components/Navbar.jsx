import React from 'react';
import { Link } from 'react-router-dom';

import logo from './assests/logo.svg';

const Navbar = () => {
  return (
    <div className='container mx-auto py-2'>
      <nav className='flex items-center justify-between '>
        <div className='logo flex-none'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-24' />
          </Link>
        </div>
        <div className='menus capitalize font-semibold flex gap-x-8 text-md text-gray-800 flex-none'>
          <Link to='/visit' className='hover:text-gray-500 '>
            visit us
          </Link>

          <Link to='/about' className='hover:text-gray-500 '>
            about
          </Link>

          <Link to='/connect' className='hover:text-gray-500 '>
            connect
          </Link>

          <Link to='/events' className='hover:text-gray-500 '>
            events
          </Link>

          <Link to='/watch-live' className='hover:text-gray-500 '>
            live
          </Link>

          <Link to='/login' className='hover:text-gray-500 '>
            location
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
