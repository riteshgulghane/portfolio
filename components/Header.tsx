import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-3 text-xl font-bold hover:text-gray-300 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">RG</span>
            </div>
            <span>Ritesh's Portfolio</span>
          </a>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className={`nav-link transition ${currentRoute === "/" ? "active" : ""}`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={`nav-link transition ${currentRoute === "/projects" ? "active" : ""}`}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`nav-link transition ${currentRoute === "/about" ? "active" : ""}`}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`nav-link transition ${currentRoute === "/contact" ? "active" : ""}`}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-gray-800 border-t border-gray-700 transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="px-4 py-2">
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a 
                  className={`block py-2 px-3 rounded transition ${currentRoute === "/" ? "bg-blue-600 text-white" : "hover:bg-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a 
                  className={`block py-2 px-3 rounded transition ${currentRoute === "/projects" ? "bg-blue-600 text-white" : "hover:bg-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a 
                  className={`block py-2 px-3 rounded transition ${currentRoute === "/about" ? "bg-blue-600 text-white" : "hover:bg-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a 
                  className={`block py-2 px-3 rounded transition ${currentRoute === "/contact" ? "bg-blue-600 text-white" : "hover:bg-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
