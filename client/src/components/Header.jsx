import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: You can use your own icons or SVGs

const Header = ({ onPostJobClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-4 py-4 flex justify-between items-center relative">
      <div className="text-2xl font-bold">JobBoard</div>

      {/* Desktop Nav */}
      <nav className="space-x-6 hidden md:flex">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#jobs" className="hover:underline">Jobs</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Post Job Button */}
      <button
        onClick={onPostJobClick}
        className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-200 hidden sm:inline"
      >
        Post a Job
      </button>

      {/* Hamburger Menu Icon (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Home</a>
          <a href="#jobs" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Jobs</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Contact</a>
          <button
            onClick={() => {
              onPostJobClick();
              setIsMobileMenuOpen(false);
            }}
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-200"
          >
            Post a Job
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
