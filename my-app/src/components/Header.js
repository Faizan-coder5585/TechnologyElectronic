'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  // ✅ Declare navItems BEFORE useState
  const navItems = [
    {
      label: 'Home',
      detail: 'Welcome to the homepage',
      menu: ['Overview', 'Updates', 'Highlights'],
    },
    {
      label: 'About',
      detail: 'Learn more about our company',
      menu: ['Our Story', 'Mission & Vision', 'Team'],
    },
    {
      label: 'Services',
      detail: 'Explore the services we offer',
      menu: ['Consulting', 'Development', 'Support'],
    },
    {
      label: 'Contact',
      detail: 'Get in touch with us',
      menu: ['Customer Support', 'Locations', 'Careers'],
    },
  ];

  // ✅ Now navItems[0] is valid
  const [details, setDetails] = useState(navItems[0]);
  const [isOpen, setIsOpen] = useState(false);




  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">


      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Unominda logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 lg:space-x-4 text-white relative">

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="inline-flex items-center gap-1 relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 group-hover:before:w-full group-hover:text-blue-500 duration-600 uppercase">
              About us<ChevronDown size={16} />
            </button>
            <div className="absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg py-4 px-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600">
              <Link href="/products/automotive" className="relative inline-block uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:before:w-full  hover:text-blue-500">Automotive</Link>
              <Link href="/products/industrial" className="block px-4 py-2 hover:bg-gray-100">Industrial</Link>
              <Link href="/products/electronics" className="block px-4 py-2 hover:bg-gray-100 ">Electronics</Link>
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
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className='toogle-cont grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto  p-4 ' >
          </div>
          <div className="lg:hidden flex flex-col block bg-white text-black py-4 px-6 space-y-4 z-50 relative">
            <div className='border border-gray-300'>
              {/* About Us Dropdown */}
              <div>
                <details className="cursor-pointer group ">
                  <summary className="flex justify-between items-center uppercase py-2 border-b border-gray-300 hover:text-blue-500 cursor-pointer">
                    <h1>About Us
                    </h1>
                    <div>
                      <div className='border border-gray-300 h-7 w-7 bg-gray-300 flex justify-center items-center mr-2'>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 ease-in-out group-open:rotate-180"
                        />
                      </div>
                    </div>
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/about/automotive" className="block hover:text-blue-500">Automotive</Link>
                    <Link href="/about/industrial" className="block hover:text-blue-500">Industrial</Link>
                    <Link href="/about/electronics" className="block hover:text-blue-500">Electronics</Link>
                  </div>
                </details>
              </div>
              {/* Products Dropdown */}
              <div>
                <details className="cursor-pointer group">
                  <summary className="flex justify-between items-center uppercase py-2 border-b border-gray-300 hover:text-blue-500 cursor-pointer">
                     <h1>
                      Products
                      </h1> 
                    <div>
                      <div className='border border-gray-300 h-7 w-7 bg-gray-300 flex justify-center items-center mr-2'>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 ease-in-out group-open:rotate-180"
                        />
                      </div>
                    </div>
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/about/automotive" className="block hover:text-blue-500">Automotive</Link>
                    <Link href="/about/industrial" className="block hover:text-blue-500">Industrial</Link>
                    <Link href="/about/electronics" className="block hover:text-blue-500">Electronics</Link>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Nav Bar desktop*/}
          <main className="w-full hidden lg:flex bg-white">
            <div
              className="flex"
              onMouseLeave={() => setDetails(defaultDetail)}
            >
              {/* Sidebar Menu */}
              <div className="text-black">
                <nav>
                  <ul className="flex-col space-y-6 py-20 pl-30 w-110 border-r-2 border-gray-300 border">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer text-2xl border-b-2 border-gray-300 pb-4"
                        onMouseEnter={() => setDetails(item)}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Details Panel */}
              <div className="text-black p-10 w-full transition-all duration-300 bg-white">
                <p className="text-2xl font-semibold mb-4">{details?.detail || defaultDetail.detail}</p>

                {details?.menu && details.menu.length > 0 && (
                  <ul className="space-y-2 list-none">
                    {details.menu.map((subItem, idx) => (
                      <li key={idx} className="text-lg text-gray-700 cursor-pointer">
                        <span
                          className="relative inline-block
      before:content-[''] before:absolute before:bottom-0 before:left-0
      before:h-0.5 before:w-0 before:bg-blue-500
      hover:before:w-full before:transition-all before:duration-500
      hover:text-blue-600"
                        >
                          {subItem}
                        </span>
                      </li>

                    ))}
                  </ul>
                )}
              </div>
            </div>
          </main>

          <div className="md:col-span-2 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-7">

              {/* Navigation Links */}
              <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 mb-4 lg:mb-0">
                <li>
                  <a href="/uploads/unominda-privacy-policy.pdf" className="hover:underline hover:text-blue-600">Privacy Policy</a>
                </li>
                <li>
                  <a href="/in-media" className="hover:underline hover:text-blue-600">Media Kit</a>
                </li>
                <li>
                  <a href="/paathshala" className="hover:underline hover:text-blue-600">Paathshala</a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:underline hover:text-blue-600">Contact Us</a>
                </li>
                <li>
                  <a href="/sitemap" className="hover:underline hover:text-blue-600">Sitemap</a>
                </li>
              </ul>

              {/* Social Icons */}
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.facebook.com/UnoMindaGroup/">
                    <img src="/icon-facebook.png" alt="Facebook" className="h-5 w-5 " />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Unomindacom">
                    <img src="/icon-twitter.png" alt="Twitter" className="h-5 w-5 " />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/organization/103987/admin/updates">
                    <img src="/icon-linkedin.png" alt="LinkedIn" className="h-5 w-5 " />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=c7wiB4_hfjM">
                    <img src="/icon-youtube.png" alt="YouTube" className="h-5 w-5 " />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Header;
