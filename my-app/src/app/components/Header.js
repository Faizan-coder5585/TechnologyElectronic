'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';



const Header = () => {
  const navItems = [
    { label: 'Home', description: 'Welcome to the homepage' },
    { label: 'About', description: 'Learn more about us' },
    { label: 'Services', description: 'Discover our services' },
    { label: 'Contact', description: 'Get in touch with us' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].description);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('transparentLayer');
    } else {
      document.body.classList.remove('transparentLayer');
    }
  }, [isOpen]);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo */}
        <Link href="/">
          <span className="text-white text-xl font-bold">Logo</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white relative">

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="inline-flex items-center gap-1 relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 group-hover:before:w-full group-hover:text-blue-500 duration-600 uppercase">
              About us<ChevronDown size={16} />
            </button>
            <div className="absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg py-4 px-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
              <Link href="/products/automotive" className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full  hover:text-blue-500">Automotive</Link>
              <Link href="/products/industrial" className="block px-4 py-2 hover:bg-gray-100">Industrial</Link>
              <Link href="/products/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
            </div>
          </div>

          <div className="relative group">
            <div>
              <button className="inline-flex items-center gap-1 relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 group-hover:before:w-full group-hover:text-blue-500 duration-600 uppercase">
                Products <ChevronDown size={16} />
              </button>
              <div className="absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
                <Link href="/products/automotive" className="block px-4 py-2 hover:bg-gray-100">Automotive</Link>
                <Link href="/products/industrial" className="block px-4 py-2 hover:bg-gray-100">Industrial</Link>
                <Link href="/products/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
              </div>
            </div>
          </div>

          {/* Static Link: Careers */}
          <Link
            href="/careers"
            className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full  hover:text-blue-500"
          >
            Technology
          </Link>

          {/* Static Link: Contact */}
          <Link
            href="/contact"
            className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full hover:text-blue-500"
          >
            Investor
          </Link>
          <Link
            href="/contact"
            className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full hover:text-blue-500"
          >
            NewsRoom
          </Link>

          <Link
            href="/contact"
            className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full hover:text-blue-500"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full hover:text-blue-500"
          >
            ShopNow
          </Link>
        </nav>
        {/* Mobile Toggle Button */}
        <button className="text-white " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white bg-opacity-90 text-black px-4 py-4 w-full">
          <div className="flex w-full">
            {/* First Div with nav list */}
            <div className="w-1/3 text-black p-6">
              <nav>
                <ul className="flex flex-col space-y-4"> {/* use space-y instead of space-x for vertical list */}
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      onMouseEnter={() => setActiveItem(item.description)}
                      className="group flex items-center justify-between cursor-pointer duration-300 hover:text-blue-500"
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        size={16}
                        className="ml-1 transition-all duration-300 group-hover:ml-4"
                      />
                    </li>

                  ))}
                </ul>
              </nav>
            </div>

            {/* Second Div - shows details on hover */}
            <div className="w-2/3 bg-green-500 text-black p-6">
              <p>{activeItem}</p>
            </div>
          </div>
        </div>

      )}
    </header>
  );
};

export default Header;
