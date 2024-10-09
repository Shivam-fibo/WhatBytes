import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-300">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          <span className="font-bold text-lg">W</span>
        </div>
        <h2 className="font-bold text-2xl">WhatBytes</h2>
      </div>

      {/* Avatar Section */}
      <div className="flex border-gray-950 items-center space-x-2">
        <div className="flex items-center">
          <img
            src="https://github.com/shadcn.png"
            alt="Rahil Siddique"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <span className="ml-2 font-medium">Rahil Siddique</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
