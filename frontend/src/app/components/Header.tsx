'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-digitalLavender text-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo or Site Title */}
        <h1 className="text-2xl font-bold">Advance Biotech</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-apricotCrush transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-apricotCrush transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-apricotCrush transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-apricotCrush"
          onClick={toggleMenu}
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - slide down */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-digitalLavender transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 font-semibold">
          <li>
            <Link
              href="/"
              className="block hover:text-apricotCrush"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-apricotCrush"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:text-apricotCrush"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
