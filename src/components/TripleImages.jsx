import React from 'react';

const TripleImages = ({ picture1, picture2, picture3 }) => {
  const imagesWidth = 400;

  return (
    <div className='group-pictures flex -translate-x-28'>
      <img
        width={imagesWidth}
        src={picture1}
        alt=''
        className='rounded-2xl shadow-sm grayscale z-20 translate-x-10 relative'
      />
      <img
        width={imagesWidth}
        src={picture2}
        alt=''
        className='rounded-2xl shadow-sm grayscale z-10 -translate-y-44 translate-x-40 absolute'
      />
      <img
        width={imagesWidth}
        src={picture3}
        alt=''
        className='rounded-2xl shadow-sm  grayscale z-30 translate-y-44 translate-x-40   absolute'
      />
    </div>
  );
};

export default TripleImages;
