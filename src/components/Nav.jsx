import React from 'react';
import movie from "../assets/movie2.svg"
const Navbar = () => {
  return (
    <nav className="w-full flex items-center flex-wrap p-4 bg-gray-900">
      <div className="flex  items-center flex-shrink-0 text-white mr-6">
            <img width={40} src={movie} alt="" />
  
        <span className="font-semibold text-xl tracking-tight ml-3">The mandalorian</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
          >
            Info
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;