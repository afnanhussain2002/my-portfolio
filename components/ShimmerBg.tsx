import React from 'react'

interface ShimmerBgProps {
    text: string;
  }
const ShimmerBg: React.FC<ShimmerBgProps> = ({text}) => {
  return (
    <div className='font-bold bg-[#076871] p-2 text-white w-28 h-10 text-center inline-flex animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#319795,45%,#00F5F9,55%,#319795)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
     {text}
    </div>
  )
}

export default ShimmerBg