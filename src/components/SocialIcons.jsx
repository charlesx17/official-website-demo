import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <div className='flex gap-x-2'>
      <Link to='/'>
        <FaInstagram className='text-3xl hover:' />
      </Link>
      <Link to='/'>
        <FaYoutube className='text-3xl' />
      </Link>
      <Link to='/'>
        <FaFacebook className='text-3xl' />
      </Link>
    </div>
  );
};

export default SocialIcons;
