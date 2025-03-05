"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-12">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="/logo.jpg"
              alt="Wrench Customs Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-white text-2xl font-bold">Wrench Customs</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white hover:text-[#2596be] transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
        <button
          aria-label="Search"
          className="text-white hover:text-[#2596be] transition-colors duration-300"
        >
          <Search size={20} />
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/95 z-40 flex flex-col items-center pt-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#2596be] transition-colors duration-300 py-4 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            aria-label="Search"
            className="text-white hover:text-[#2596be] transition-colors duration-300 mt-4"
          >
            <Search size={24} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
