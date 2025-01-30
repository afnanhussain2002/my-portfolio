import { projects } from '@/data'
import React from 'react'

const Projects = () => {
  return (
    <div className='mt-5 text-center'>
        <h3 className='text-3xl font-bold'>Selection of recent projects</h3>
<div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
   {projects.map((project) => (
     <div
     className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
     key={project.id}
     >

     </div>
   ))}
</div>
    </div>
  )
}

export default Projects