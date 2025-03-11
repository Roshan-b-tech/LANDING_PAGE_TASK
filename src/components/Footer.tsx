import React from 'react';
import { Cuboid as Cube } from 'lucide-react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-[#0A0F18] text-white py-16 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <div className="absolute inset-0 w-full">
          <img 
            src="unsplash_1FxMET2U5dU.png" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
            style={{ transform: 'scale(1.2)' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/Mask Group@2x.png" alt="logo" />
            </div>
            <p className="text-gray-300">
              TRASAVE travel fund is a good way to track your travel money.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#00ff00] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#00ff00] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#00ff00] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#00ff00] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#00ff00]">About</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00ff00] transition-colors">
                  Technical Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00ff00] transition-colors">
                  Other Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#00ff00]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">Bengaluru, India</li>
              <li className="text-gray-300">80030 10108</li>
              <li>
                <a href="mailto:hr@curlistic.com" className="text-gray-300 hover:text-[#00ff00] transition-colors">
                  hr@curlistic.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Subscribe <span className="text-[#00ff00]">Newsletter</span>
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 px-4 py-2 rounded-l-full outline-none flex-1 border border-gray-800"
              />
              <button className="bg-[#00ff00] text-black px-6 py-2 rounded-r-full font-medium hover:bg-[#00dd00] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          Copyright 2024 curlistic. All right reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;