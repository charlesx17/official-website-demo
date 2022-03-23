import React from 'react';
import Navbar from '../components/Navbar';

import SocialIcons from '../components/SocialIcons';
import Carousel from '../components/Carousel';
import TripleImages from '../components/TripleImages';

import baptism from '../components/assests/baptism.jpg';
import team from '../components/assests/team.jpg';
import musicians from '../components/assests/musicians.jpg';

const Home = () => {
  return (
    <div>
      <header className='container mx-auto  '>
        <Navbar />
        <div className='heading flex flex-col gap-10 mt-16 items-center  '>
          <h1 className='font-extrabold capitalize text-9xl mb-5'>
            freedom in <br /> Jesus.
          </h1>
          <span className='tracking-widest text-lg font-normal italic '>
            "It is for freedom that Christ has set us free. Stand firm, then,
            and <br />
            do not let yourselves be burdened again by a yoke of slavery."
          </span>

          <div className='time flex items-center gap-x-5 mt-20'>
            <span className='tracking-widest text-lg text-gray-800'>
              JOIN US ON SUNDAY AT 9:30 AM // FRIDAY AT 7:00 PM
            </span>
            <SocialIcons />
          </div>
        </div>
      </header>

      <Carousel />

      <section className=' h-screen py-20 bg-black-film '>
        <div className='container mx-auto flex flex-col items-center '>
          <span className='text-white self-start font-light uppercase text-xl tracking-widest  mb-32'>
            at chirstian tabernacle {'>>>'}
          </span>
          <div className='flex justify-center items-center'>
            <h2 className='text-white text-9xl capitalize  font-extrabold  z-50'>
              no <br /> one <br /> walks <br /> alone!
            </h2>
            <TripleImages
              picture1={baptism}
              picture2={team}
              picture3={musicians}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
