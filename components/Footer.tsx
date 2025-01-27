import React from 'react'
import { Linkedin, Github, Facebook } from 'lucide-react';
import x from "../public/images/x.png";
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex gap-5 bg-[#076871] p-2 w-52 h-10 rounded items-center justify-center'>
          <a href="https://www.linkedin.com/in/md-afnan-hussain/" target='_blank'>
          
            <Linkedin size={30} className='bg-black p-1 rounded'/>
          </a>
            <Github size={30} className='bg-black p-1 rounded'/>
            <Facebook size={30} className='bg-black p-1 rounded'/>
            <Image src={x} alt='x' width={30} height={30} />
        </div>
    </div>
  )
}

export default Footer