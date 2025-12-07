'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight, Filter } from 'lucide-react';
import Header from "@/sections/Navbar";
import Footer from "@/sections/Footer";
const ProductCard = ({ product, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/3]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        <h3 
          className="text-2xl font-bold text-black mb-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {product.name}
        </h3>
        
        <p 
          className="text-gray-600 text-sm mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {product.features}
        </p>
        
        <div className="mb-4">
          <span className="text-gray-500 text-xs">Starting from</span>
          <p 
            className="text-2xl font-bold text-blue-900"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {product.price}
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          View Details
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function ProductsPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sports & Performance', 'Modern Retro', 'Commuter/Executive', 'Moped'];

  const allProducts = [
    // Sports & Performance
    {
      name: "TVS Apache RR 310",
      category: "Sports & Performance",
      features: "Fully-faired track-focused sportbike",
      price: "₹2,75,000",
      image: "/TVS Apache RR 310.png",
      badge: "Flagship"
    },
    {
      name: "TVS Apache RTR 310",
      category: "Sports & Performance",
      features: "Naked streetfighter flagship model",
      price: "₹2,45,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      badge: "New"
    },
    {
      name: "TVS Apache RTX 300",
      category: "Sports & Performance",
      features: "Adventure touring bike",
      price: "₹2,60,000",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
      badge: "Upcoming"
    },
    {
      name: "TVS Apache RTR 200 4V",
      category: "Sports & Performance",
      features: "Premium naked streetfighter",
      price: "₹1,42,000",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
    },
    {
      name: "TVS Apache RTR 180",
      category: "Sports & Performance",
      features: "Mid-capacity naked motorcycle",
      price: "₹1,18,000",
      image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80"
    },
    {
      name: "TVS Apache RTR 160 4V",
      category: "Sports & Performance",
      features: "Performance-oriented 160cc model",
      price: "₹1,25,000",
      image: "https://images.unsplash.com/photo-1591904749041-e4d465c3a3dc?w=800&q=80"
    },
    {
      name: "TVS Apache RTR 160",
      category: "Sports & Performance",
      features: "Entry-level 160cc street bike",
      price: "₹1,12,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    
    // Modern Retro
    {
      name: "TVS Ronin",
      category: "Modern Retro",
      features: "Scrambler-style versatile cruiser",
      price: "₹1,49,000",
      image: "/TVS Ronin.png",
      badge: "Popular"
    },
    
    // Commuter/Executive
    {
      name: "TVS Raider 125",
      category: "Commuter/Executive",
      features: "Stylish and sporty 125cc commuter",
      price: "₹98,000",
      image: "/TVS Raider 125.png",
      badge: "Best Seller"
    },
    {
      name: "TVS Star City Plus",
      category: "Commuter/Executive",
      features: "Executive commuter with good mileage",
      price: "₹78,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      name: "TVS Radeon",
      category: "Commuter/Executive",
      features: "Robust and reliable commuter motorcycle",
      price: "₹72,000",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
    },
    {
      name: "TVS Sport",
      category: "Commuter/Executive",
      features: "High-mileage basic commuter",
      price: "₹65,000",
      image: "https://images.unsplash.com/photo-1591904749041-e4d465c3a3dc?w=800&q=80"
    },
    
    // Moped
    {
      name: "TVS XL 100",
      category: "Moped",
      features: "Reliable heavy-duty moped",
      price: "₹52,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <>
    <Header/>
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              COMPLETE RANGE
            </motion.span>
            
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Explore All TVS Motorcycles
            </h1>
            
            <p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From high-performance sportbikes to reliable daily commuters — discover the perfect ride that matches your style and needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter size={20} className="text-gray-600" />
              <span className="font-semibold text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Filter:
              </span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p 
              className="text-gray-600 text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Showing <span className="font-bold text-black">{filteredProducts.length}</span> motorcycles
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No products found in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}