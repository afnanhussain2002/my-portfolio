"use client"
import { Copy } from 'lucide-react'
import React, { useState } from 'react'
import animationData from '../data/confetti.json';
import Lottie from 'react-lottie';

const CopyButton = () => {
    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const handleCopy = () => {
        const text = "afnanhussain2022@gamil.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
      };


  return (
    <div>
        <Lottie options={defaultOptions} height={200} width={400} />
        <button className='mt-5 bg-[#076871] px-3 py-2 rounded font-bold flex gap-2 items-center' onClick={handleCopy}><Copy/> Copy My Email</button>
    </div>
  )
}

export default CopyButton