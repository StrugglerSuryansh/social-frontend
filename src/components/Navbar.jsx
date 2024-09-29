import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Adjust the size of the bb.png image */}
        <h1 className="text-2xl font-bold">
          <img src="/images/bb.png" alt="Logo" className="w-10 h-10" />
        </h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#features" className="hover:text-gray-400">Features</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
