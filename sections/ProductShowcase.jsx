'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isImageLeft = index % 2 === 0;

  const imageVariants = {
    hidden: { opacity: 0, x: isImageLeft ? -100 : 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  return (
    <div ref={ref} className="relative">
      <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 py-12 lg:py-20`}>
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full lg:w-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h3 
            className="text-4xl lg:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {product.name}
          </h3>
          
          <p 
            className="text-gray-600 text-lg mb-4 font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {product.specs}
          </p>

          
          
          <p 
            className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {product.description}
          </p>
          
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const message = encodeURIComponent(product.name);
    window.location.href = `https://wa.me/919005050191?text=${message}`;
  }}
  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-lg"
  style={{ fontFamily: 'Montserrat, sans-serif' }}
>
  Explore Model
  <ChevronRight size={20} />
</motion.button>

        </motion.div>
      </div>
      
      {/* Divider */}
      {index < 2 && (
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      )}
    </div>
  );
};

export default function ProductShowcase() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const products = [
    {
      name: "TVS Apache RR 310",
      specs: "Sport · 310cc · Liquid-Cooled",
      description: "Experience raw power and precision with our flagship supersport. Built for the track, refined for the streets — featuring advanced aerodynamics and cutting-edge technology.",
      image: "/TVS Apache RR 310.png",
      price:"1,79,000"
    },
    {
      name: "TVS Ronin",
      specs: "Cruiser · 225cc · Retro-Modern",
      description: "A perfect blend of vintage aesthetics and modern performance. The Ronin delivers smooth cruising power with timeless design, making every ride an unforgettable journey.",
      image: "/TVS Ronin.png",
      price:"1,89,000"
    },
    {
      name: "TVS Raider 125",
      specs: "Commuter · 125cc · Air-Cooled",
      description: "Your perfect daily companion. Fuel-efficient, reliable, and packed with smart features — the Raider 125 redefines urban commuting with style and performance.",
      image: "/TVS Raider 125.png",
      price:"1,99,000"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gray-100 text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            TOP SELLING BIKES
          </motion.span>
          
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Best Performers on the Road
          </h2>
          
          <p 
            className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover our most popular motorcycles that have won the hearts of riders across the nation. From adrenaline-pumping sport bikes to reliable everyday commuters, each model is engineered for excellence.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="space-y-0">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              View All Products
              <ChevronRight size={24} />
            </motion.button>
          </a>
          <p 
            className="text-gray-500 text-sm mt-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore our complete range of motorcycles and find your perfect ride
          </p>
        </motion.div>
      </div>
    </section>
  );
}