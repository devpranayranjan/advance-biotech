'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-digitalLavender text-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold">Advance Biotech</h1>
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-apricotCrush transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-apricotCrush transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-apricotCrush transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
