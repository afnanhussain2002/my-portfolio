import { projects } from '@/data'
import React from 'react'
import { MoveUpRight } from 'lucide-react';


const Projects = () => {
  return (
    <div className='mt-5 text-center'>
        <h3 className='text-3xl font-bold'>Selection of recent projects</h3>
<div className='flex flex-wrap items-center justify-center p-4 gap-16 '>
   {projects.map((project) => (
    <a href={project.link} target='_blank'  key={project.id}>
     <div
     className=" flex flex-col items-center justify-center text-left w-96 border p-4 rounded-md cursor-pointer hover:animate-shimmer"
    
     >
    <div className="relative flex items-center justify-center w-80  overflow-hidden h-[22vh] ">
                <img
                  src={project.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded"
                />
              </div>
              <h1 className="font-bold text-base line-clamp-1 mt-2">
                {project.title}
              </h1>
              <p
                className="font-light text-sm line-clamp-2"
              >
                {project.des}
              </p>
            <div className='flex items-center justify-between mt-2 mb-3'>
         <div className='flex items-center '>
       {project.iconLists.map((icon, index) => (
         <div
         key={index}
         className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center "
         style={{
          transform: `translateX(-${5 * index + 2}px)`,
        }}
       >
         <img src={icon} alt="icon5" className="p-2 hover:scale-150 hover:rotate-12" />
       </div>
       ))}
         </div>
         <div className="flex justify-center items-center font-bold">
                  <p className="flex text-sm text-purple">
                    Check Live Site
                  </p>
                  <MoveUpRight className="text-white" />
                </div>
            </div>
     </div>
      </a>
   ))}
</div>
    </div>
  )
}

export default Projects