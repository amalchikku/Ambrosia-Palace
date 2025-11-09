import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 p-6 sm:p-8 lg:p-12">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6">
        AMBROSIA PALACE
      </h1>
      <ul className="flex flex-col sm:flex-row sm:justify-center sm:space-x-12 space-y-4 sm:space-y-0 text-sm sm:text-base font-light text-center">
        <li className="hover:text-teal-700 cursor-pointer">Terms of Service</li>
        <li className="hover:text-teal-700 cursor-pointer">Privacy Policy</li>
        <li className="hover:text-teal-700 cursor-pointer">Security</li>
        <li className="hover:text-teal-700 cursor-pointer">Social Media</li>
      </ul>
    </footer>
  );
}

export default Footer;
