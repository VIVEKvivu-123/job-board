import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-blue-600 text-white p-6 mt-12 text-center"
    >
      <p>Contact us at: vivekvm6194430@gmail.com | 7356681077</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
      </div>
      <div className="mt-4 space-x-3">
        {/* Placeholder social icons */}
        <a href="#" aria-label="Facebook" className="hover:text-gray-300">FB</a>
        <a href="#" aria-label="Twitter" className="hover:text-gray-300">TW</a>
        <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">LI</a>
      </div>
    </footer>
  );
};

export default Footer;
