import React from 'react'
import tech from '../public/images/knowTech.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className=' w-[1280px] h-96 bg-[url("../public/images/mainBg.jpg")] bg-cover mt-5 flex justify-between items-center p-5'>
          <div className='ml-10'>
            <h2 className='text-5xl font-bold '>Fresher Full Stack <br /> Developer</h2>
            <button className='mt-5 bg-[#076871] p-2 rounded font-bold'>Copy My Email</button>
          </div>
          <div>
            <Image src={tech} alt="tech" width={400} height={400} />
          </div>
        </div>
  )
}

export default HeroSection