import React from 'react'
import ShimmerBg from './ShimmerBg'


const TechStack = () => {
  return (
    <div className='w-96 h-96  flex justify-center items-center'>
     <div className=' w-full h-full p-5 flex flex-col justify-center items-center space-y-1'>
        <ShimmerBg text='MongoDB'/>
        <div className='w-full flex justify-around'>
        <ShimmerBg text='NodeJS'/>
        <ShimmerBg text='ExpressJS'/>
        </div>
        <ShimmerBg text='JavaScript'/>
        <div className='w-full flex justify-around'>
        <ShimmerBg text='ReactJs'/>
        <ShimmerBg text='NextJs'/>
        </div>
       <ShimmerBg text='TypeScript'/>

     </div>
</div>

 
  )
}

export default TechStack