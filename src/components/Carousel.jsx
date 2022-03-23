import React from 'react';

import picture1 from './assests/picture1.jpg';
import picture2 from './assests/picture2.jpg';
import picture3 from './assests/picture3.jpg';
import picture4 from './assests/picture4.jpg';
import picture5 from './assests/picture5.jpg';
import picture6 from './assests/picture6.jpg';

const Carousel = () => {
  const imageWidth = 250;
  const imageHeight = 180;

  const images = [picture1, picture2, picture3, picture4, picture5, picture6];

  return (
    <div className='container mx-auto '>
      <div className='mt-20 mb-10 carousel carousel-center space-x-4 grayscale  '>
        {images.map((image) => (
          <div class='carousel-item'>
            <img
              width={imageWidth}
              height={imageHeight}
              src={image}
              class='rounded-box'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
