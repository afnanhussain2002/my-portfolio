import { Copy } from 'lucide-react'
import React, { useState } from 'react'
import animationData from '../data/confetti.json';

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


  return (
    <div>
        <button className='mt-5 bg-[#076871] px-3 py-2 rounded font-bold flex gap-2 items-center'><Copy/> Copy My Email</button>
    </div>
  )
}

export default CopyButton