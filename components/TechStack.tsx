import React from 'react'

const TechStack = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg">
        ExpressJS
      </div>
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg">
        NodeJS
      </div>
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg col-span-3">
        JavaScript
      </div>
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg">
        MongoDB
      </div>
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg">
        NextJS
      </div>
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg">
        ReactJS
      </div>
      <div className="flex items-center justify-center h-16 px-4 bg-teal-600 text-white rounded-md shadow-lg col-span-3">
        TypeScript
      </div>
    </div>
  </div>
  )
}

export default TechStack