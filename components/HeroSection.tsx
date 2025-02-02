import React from 'react'
import TechStack from './TechStack'
import CopyButton from './CopyButton';

const HeroSection = () => {
  return (
    <div className='sm:w-96 sm:h-32 lg:w-[1280px] lg:h-96 bg-[url("../public/images/mainBg.jpg")] bg-cover mt-5 flex flex-col-reverse justify-around items-center p-5 lg:flex-row'>
          <div className='lg:ml-10'>
            <h2 className='hidden text-5xl font-bold lg:flex'>Fresher Full Stack <br /> Developer</h2>
           <CopyButton/>
          </div>
          <div>
            <TechStack/>
          </div>
        </div>
  )
}

export default HeroSection