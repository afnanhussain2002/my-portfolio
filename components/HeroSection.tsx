import React from 'react'
import TechStack from './TechStack'
import CopyButton from './CopyButton';

const HeroSection = () => {
  return (
    <div className=' w-[1280px] h-96 bg-[url("../public/images/mainBg.jpg")] bg-cover mt-5 flex justify-around items-center p-5'>
          <div className='ml-10'>
            <h2 className='text-5xl font-bold '>Fresher Full Stack <br /> Developer</h2>
           <CopyButton/>
          </div>
          <div>
            <TechStack/>
          </div>
        </div>
  )
}

export default HeroSection