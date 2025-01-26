import React from 'react'
import { Linkedin, Github, Facebook } from 'lucide-react';
import x from "../public/images/x.png";
import Image from 'next/image';


const Footer = () => {
  return (
    <div>
        <div className='flex gap-5'>
            <Linkedin size={30} className='bg-black p-1 rounded'/>
            <Github size={30} className='bg-black p-1 rounded'/>
            <Facebook size={30} />
            <Image src={x} alt='x' width={30} height={30} />
        </div>
    </div>
  )
}

export default Footer