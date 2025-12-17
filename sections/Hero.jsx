'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: '/hero_image1.png',
      title: 'Our Showrooms',
      description: 'Premium TVS outlets offering a seamless buying experience.'
    },
    {
      image: '/Hero_image2.png',
      title: 'Motorcycle Range',
      description: 'Performance bikes, commuters, and modern cruisers — all in one place.'
    },
    {
      image: '/Hero_image3.png',
      title: 'Service & Support',
      description: 'Certified maintenance, genuine parts, and expert assistance.'
    },
    {
      image: '/Hero_Image5.jpeg',
      title: 'Franchise Program',
      description: 'Grow with us — become an authorized TVS franchise partner.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased for premium slower pacing
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleBoxClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden">
      
      {/* Background Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${slides[activeSlide].image})`,
            }}
          />
          
          {/* Gradient Overlay for premium contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-[90%] mx-auto px-4 h-full 
flex flex-col justify-start pt-[10vh] md:pt-[14vh] lg:pt-[18vh]">

        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.15]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ride Power. Ride Confidence. Ride TVS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-lg text-white/80 mb-6 lg:mb-8 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore a complete range of TVS motorcycles — from performance-built machines to everyday commuting companions. Built with precision engineering, modern technology, and unmatched reliability.
          </motion.p>

          <div className='flex flex-row gap-2 sm:gap-4 w-full max-w-full'>
            <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-3 py-3 md:px-6 md:py-4 rounded-xl font-semibold text-xs sm:text-sm md:text-base leading-tight 
            transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-2xl flex-1 min-w-0"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book a Test Ride
            <motion.span whileHover={{ x: 6 }} className="hidden sm:inline-flex">
              <ChevronRight size={22} />
            </motion.span>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-3 py-3 md:px-6 md:py-4 rounded-xl font-semibold text-xs sm:text-sm md:text-base leading-tight 
            transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-2xl flex-1 min-w-0"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Connect on WhatsApp
            <motion.span whileHover={{ x: 6 }} className="hidden sm:inline-flex">
              <ChevronRight size={22} />
            </motion.span>
          </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      {/* Bottom Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-4 sm:pt-8 sm:pb-6 md:pt-10 md:pb-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                onClick={() => handleBoxClick(index)}
                whileHover={{ scale: 1.04 }}
                animate={{
                  scale: activeSlide === index ? 1.04 : 1,
                  y: activeSlide === index ? -6 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`cursor-pointer p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-lg 
                ${
                  activeSlide === index
                    ? 'bg-white text-black shadow-xl border border-gray-200'
                    : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
                }`}
              >
                <h3
                  className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 line-clamp-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {slide.title}
                </h3>
                <p
                  className="text-[10px] sm:text-xs md:text-sm opacity-80 line-clamp-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {slide.description}
                </p>

                {activeSlide === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="mt-2 sm:mt-3 md:mt-4 h-[2px] sm:h-[3px] w-10 sm:w-12 md:w-16 bg-black rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
    
    </section>
  );
}
