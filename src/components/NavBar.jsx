import React, { useState } from "react";
import SectionGrid from "./HomeSections/SectionGrid";
import Logo from "../assets/LOGO.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="text-teal-900">
        <nav className="flex justify-between items-center p-4 border-b md:border-gray-300">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
          {/* Desktop Links */}
          <ul className="hidden lg:flex flex-row gap-8 text-2xl font-light py-5 px-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/article">Article</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
          {/* Mobile/Tablet Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center h-10 w-10 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="block w-8 h-1 bg-teal-900 mb-1"></span>
            <span className="block w-8 h-1 bg-teal-900 mb-1"></span>
            <span className="block w-8 h-1 bg-teal-900"></span>
          </button>
        </nav>
        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="flex flex-col lg:hidden gap-4 text-xl font-light px-5 py-2 bg-white border-b shadow-sm">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/article" onClick={() => setMenuOpen(false)}>Article</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
