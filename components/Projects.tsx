import { projects } from '@/data'
import React from 'react'
import { MoveUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <div className='mt-5 text-center'>
        <h3 className='text-3xl font-bold'>Selection of recent projects</h3>
<div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
   {projects.map((project) => (
     <div
     className=" flex flex-col items-center justify-center text-left w-96 border"
     key={project.id}
     >
    <div className="relative flex items-center justify-center w-96  overflow-hidden h-[20vh] lg:h-[30vh] ">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
               <img src="/images/mainBg.jpg" alt="bgImg" />

                </div>
                <img
                  src={project.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold text-base line-clamp-1">
                {project.title}
              </h1>
              <p
                className="font-light text-sm line-clamp-2"
              >
                {project.des}
              </p>
            <div className='flex items-center justify-between mt-7 mb-3'>
         <div className='flex items-center'>
       {project.iconLists.map((icon, index) => (
         <div
         key={index}
         className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
       >
         <img src={icon} alt="icon5" className="p-2" />
       </div>
       ))}
         </div>
         <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <MoveUpRight className="ms-3" color="#CBACF9" />
                </div>
            </div>
     </div>
   ))}
</div>
    </div>
  )
}

export default Projects