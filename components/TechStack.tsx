import React from 'react'


const TechStack = () => {
  return (
    <div className='bg-white w-96 h-96 text-black flex justify-center items-center'>
     <div className=' w-full h-full p-5 flex flex-col justify-center items-center space-y-1'>
        <p className='font-bold bg-[#076871] p-2 text-white w-28 h-10 text-center inline-flex animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#319795,45%,#00F5F9,55%,#319795)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>MongoDB</p>
        <div className='w-full flex justify-around'>
        <p className='font-bold bg-[#076871] p-2 rounded text-white w-28 h-10 text-center'>NodeJS</p>
        <p className='font-bold bg-[#076871] p-2 rounded text-white w-28 h-10 text-center'>ExpressJs</p>
        </div>
        <p className='font-bold bg-[#076871] p-2 rounded text-white w-28 h-10 text-center'>JavaScript</p>
        <div className='w-full flex justify-around'>
        <p className='font-bold bg-[#076871] p-2 rounded text-white w-28 h-10 text-center'>ReactJs</p>
        <p className='font-bold bg-[#076871] p-2 rounded text-white w-28 h-10 text-center'>NextJs</p>
        </div>
        <p className='font-bold bg-[#076871] p-2 rounded text-white w-28 h-10 text-center'>TypeScript</p>

     </div>
    
   {/*  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-teal-600 bg-[linear-gradient(110deg,#319795,45%,#00F5F9,55%,#319795)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  Shimmer
</button> */}
</div>

 
  )
}

export default TechStack