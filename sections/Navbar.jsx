'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about' },
    { name: 'Privacy Policy', href: '/privacy' }, // <-- Added
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <Link href="/" >
                <Image
                  alt="Adarshini Logo"
                  src="/Adarshini_logo.PNG"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-black font-medium text-sm lg:text-base hover:text-gray-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* --- DESKTOP WHATSAPP BUTTON --- */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-medium text-sm lg:text-base hover:bg-blue-800 transition-colors shadow-sm"
              onClick={() => {
                const input = document.getElementById("userMessage");
                const text = encodeURIComponent(
                  input?.value || "Hello, I want to know more about your products!"
                );
                window.open(`https://wa.me/919005050191?text=${text}`, "_blank");
              }}
            >
              Contact Us
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="block text-black font-medium py-2 hover:text-gray-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          {/* --- MOBILE WHATSAPP BUTTON --- */}
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="w-full bg-blue-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2"
            onClick={() => {
              const input = document.getElementById("userMessage");
              const text = encodeURIComponent(
                input?.value || "Hello, I want to know more about your products!"
              );
              window.open(`https://wa.me/919005050191?text=${text}`, "_blank");
              setIsOpen(false);
            }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
