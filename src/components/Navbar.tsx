import React from 'react';
import { Cuboid as Cube } from 'lucide-react';

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/Mask Group@2x.png" alt="logo" />
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="#" className="text-[#00ff00] font-medium">Home</a>
            <a href="#" className="text-gray-200 hover:text-[#00ff00] transition-colors">Save</a>
            <a href="#" className="text-gray-200 hover:text-[#00ff00] transition-colors">Travel</a>
            <a href="#" className="text-gray-200 hover:text-[#00ff00] transition-colors">Experience</a>
            <a href="#" className="text-gray-200 hover:text-[#00ff00] transition-colors">Wallet</a>
            <button 
              className="text-white px-8 py-2.5 rounded-full font-medium border border-white"
              style={{
                background: 'linear-gradient(to right, #07DA07, #0B430B)'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar