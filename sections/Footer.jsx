'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const footerLinks = {
    products: [
      { name: 'Apache Series', href: '#' },
      { name: 'Ronin', href: '#' },
      { name: 'Raider', href: '#' },
      { name: 'Jupiter', href: '#' },
      { name: 'NTorq', href: '#' },
      { name: 'All Models', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Releases', href: '#' },
      { name: 'Corporate Info', href: '#' },
      { name: 'Sustainability', href: '#' }
    ],
    support: [
      { name: 'Service Centers', href: '#' },
      { name: 'Book Service', href: '#' },
      { name: 'Owner\'s Manual', href: '#' },
      { name: 'Warranty Info', href: '#' },
      { name: 'FAQs', href: '#' }
    ],
    franchise: [
      { name: 'Become a Partner', href: '#' },
      { name: 'Franchise Benefits', href: '#' },
      { name: 'Application Process', href: '#' },
      { name: 'Partner Login', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Image alt="Logo" src="/Logo.svg" height={100} width={100} />
            </div>
            
            <p 
              className="text-gray-400 text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ride Power. Ride Confidence. Ride TVS. Your trusted partner for premium motorcycles and two-wheelers across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:1800-123-4567" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">1800-123-4567</span>
              </a>
              <a 
                href="mailto:support@tvs.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">support@tvs.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">TVS Headquarters, Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Products Links */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <h3 
              className="text-white font-bold text-lg mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 
              className="text-white font-bold text-lg mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <h3 
              className="text-white font-bold text-lg mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Franchise Links */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <h3 
              className="text-white font-bold text-lg mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Franchise
            </h3>
            <ul className="space-y-3">
              {footerLinks.franchise.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <div className="max-w-2xl">
            <h3 
              className="text-white font-bold text-2xl mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Stay Updated
            </h3>
            <p 
              className="text-gray-400 text-base mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Subscribe to our newsletter for the latest updates, exclusive offers, and new model launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p 
              className="text-gray-400 text-sm text-center md:text-left"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © 2025 TVS Motor Company. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-white text-gray-400 hover:text-black rounded-full flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}