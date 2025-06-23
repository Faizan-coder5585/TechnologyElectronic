'use client';
import { useState } from 'react';

const navItems = [
  { label: 'Home', detail: 'Welcome to the homepage' },
  { label: 'About', detail: 'Learn more about our company' },
  { label: 'Services', detail: 'Explore the services we offer' },
  { label: 'Contact', detail: 'Get in touch with us' },
];

export default function NavWithDetails() {
  const [active, setActive] = useState('Home');

  const currentDetail = navItems.find(item => item.label === active)?.detail || '';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Nav */}
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setActive(item.label)}
              className={`cursor-pointer relative text-lg font-medium transition duration-300 hover:text-blue-600 
              before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-blue-600 
              hover:before:w-full before:transition-all before:duration-300
              after:absolute after:right-0 after:top-0 after:w-0 after:h-[2px] after:bg-blue-600 
              hover:after:w-full after:transition-all after:duration-300`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Right Detail */}
        <div className="bg-white shadow-md rounded-xl p-6 w-80 min-h-[120px] transition-all duration-500 relative border border-gray-200">
          <p className="text-gray-800 text-lg font-semibold">{active}</p>
          <p className="mt-2 text-gray-600">{currentDetail}</p>
        </div>
      </div>
    </div>
  );
}
