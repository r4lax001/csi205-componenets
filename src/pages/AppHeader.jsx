import React, { useState } from 'react'

function AppHeader() {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div className='mt-10 flex justify-center items-center'>
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-8 bg-gray-300 rounded-lg blur-3xl opacity-10"></div>
      
        <div className="relative">
          <h1 className="text-6xl md:text-7xl font-black text-center">
            <span className={`inline-block text-gray-300 transition-all duration-500 ${isHovered ? 'scale-110 text-white' : 'scale-100'}`}>
              CSI205
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-500 text-center mt-3 tracking-wide">
            <span className="hover:text-gray-300 transition-colors duration-300">Front End</span>
            <span className="mx-3 text-gray-600">|</span>
            <span className="hover:text-gray-300 transition-colors duration-300">Software Development</span>
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <div className={`h-0.5 rounded-full bg-gray-400 transition-all duration-500 ${isHovered ? 'w-20' : 'w-10'}`}></div>
            <div className={`h-0.5 rounded-full bg-gray-300 transition-all duration-500 delay-75 ${isHovered ? 'w-20' : 'w-10'}`}></div>
            <div className={`h-0.5 rounded-full bg-gray-500 transition-all duration-500 delay-150 ${isHovered ? 'w-20' : 'w-10'}`}></div>
          </div>
          <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-gray-400 opacity-30"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-gray-400 opacity-30"></div>
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-gray-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-2 right-1/3 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute -top-3 right-1/4 w-2.5 h-2.5 bg-gray-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '1.4s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader