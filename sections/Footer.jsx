'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Phone,
  MapPin,
  ChevronRight,
  MessageCircle
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
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/adarshinitvs5?igsh=MWdya2NoZmxpZW96MQ==', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/1Bq3DucynK/', label: 'Facebook' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div variants={fadeInVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="lg:col-span-2">
            
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-4">
              <Image alt="Logo" src="/Adarshini_logoo.PNG" fill className="object-contain" priority />
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Ride Power. Ride Confidence. Your trusted TVS dealer for premium bikes and scooters.
            </p>

            {/* Updated Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span className="text-sm">Expert: +91 90050 50203</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span className="text-sm">Manager: +91 95324 31621</span>
              </div>
              <a 
                href="https://wa.me/919005050191?text=Hello%20I%20have%20a%20query"
                className="flex items-center gap-3 hover:text-white text-gray-400 transition"
              >
                <MessageCircle size={18} /> WhatsApp Support: 90050 50191
              </a>

              <a 
                href="https://maps.app.goo.gl/88akSUoGV2ADhfYm6"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <MapPin size={18} />
                <span className="text-sm">Adarshini TVS, Hyderabad, Telangana, India</span>
              </a>
            </div>
          </motion.div>

          {/* Keep original sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 🔥 NEW WhatsApp Query Form */}
        <motion.div variants={fadeInVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="mt-16 pt-12 border-t border-gray-800">
          <h3 className="text-white font-bold text-2xl mb-3">Have a Query?</h3>
          <p className="text-gray-400 mb-6">Send your message directly on WhatsApp.</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="userMessage"
              type="text"
              placeholder="Enter your query..."
              className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const text = encodeURIComponent(document.getElementById("userMessage").value);
                window.open(`https://wa.me/919005050191?text=${text}`, "_blank");
              }}
              className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200"
            >
              Send on WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-gray-400 text-sm">© 2025 Adarshini TVS. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((s, i) => (
              <motion.a key={i} href={s.href} whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition">
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
