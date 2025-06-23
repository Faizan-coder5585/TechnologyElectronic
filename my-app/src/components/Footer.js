'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#f9f9f9] text-[#333] pt-12 pb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="mb-3">
              Uno Minda Limited (formerly Minda Industries Limited) is a leading global supplier of proprietary
              automotive solutions and systems to OEMs as Tier-1.
            </p>
            <Link href="/about" className="text-blue-400  inline-flex items-center">
              Read More
              <Image
                src="/b-right-arrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className="ml-2 mt-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/technology" className="hover:underline">Technology</Link></li>
              <li><Link href="/investor" className="hover:underline">Investor</Link></li>
            </ul>
          </div>

          {/* What's New */}
          <div>
            <h3 className="text-lg font-bold mb-4">What's new</h3>
            <ul className="space-y-2">
              <li><Link href="/career" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <Image src="/icon-email.svg" alt="email" width={20} height={20} />
                <a href="mailto:communicationdesk@unominda.com" className="hover:underline">
                  communicationdesk@unominda.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Image src="/icon-map.svg" alt="address" width={20} height={20} />
                <p>
                  Uno Minda Limited<br />
                  Nawada, Fatehpur SikanderPur Badda,<br />
                  IMT Manesar, Gurgaon - Haryana - 122004 India
                </p>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/UnoMindaGroup/" target="_blank">
                <Image src="/icon-facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://twitter.com/Unomindacom" target="_blank">
                <Image src="/twitter-circles.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/organization/103987/admin/updates" target="_blank">
                <Image src="/icon-linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://youtube.com/@UNOMINDAGROUP?si=6daeqZ9qcs8KYi5W" target="_blank">
                <Image src="/icon-youtube.png" alt="YouTube" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/unominda?igsh=NTh6bHh2N3pzMXgx" target="_blank">
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 flex flex-col lg:flex-row items-center justify-between text-sm">
          <p className="text-gray-600 mb-2 lg:mb-0">© Uno Minda. All Rights Reserved.</p>
          <ul className="flex gap-4">
            <li>
              <Link href="/uploads/investor/unominda-privacy-policy.pdf" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
