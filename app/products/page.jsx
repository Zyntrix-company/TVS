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

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(product.name);
    window.location.href = `https://wa.me/919005050191?text=${message}`;
  };

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
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product?.badge && (
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

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={handleWhatsAppRedirect}
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
    { name: "TVS Apache RR 310", category: "Sports & Performance", features: "Fully-faired track-focused sportbike", image: "/apachi 310 rtr.png", badge: "Flagship" },
    { name: "TVS Apache RTR 310", category: "Sports & Performance", features: "Naked streetfighter flagship model", image: "/Apachi 310 naked.png", badge: "New" },
    { name: "TVS Apache RTX 300", category: "Sports & Performance", features: "Adventure touring bike", image: "/TVS Apache RTX 300.jpg", badge: "Upcoming" },
    { name: "TVS Apache RTR 200 4V", category: "Sports & Performance", features: "Premium naked streetfighter", image: "/Apachi 4v.png" },
    { name: "TVS Apache RTR 180", category: "Sports & Performance", features: "Mid-capacity naked motorcycle", image: "/TVS Apache RTR 180.webp" },
    { name: "TVS Apache RTR 160 4V", category: "Sports & Performance", features: "Performance-oriented 160cc model", image: "/Apachi 4v.png" },
    { name: "TVS Apache RTR 160", category: "Sports & Performance", features: "Entry-level 160cc street bike", image: "/tvs-apache-160-rm-drum-black-edition1732629216165.webp" },

    // Modern Retro
    { name: "TVS Ronin", category: "Modern Retro", features: "Scrambler-style versatile cruiser", image: "/Ronin.png", badge: "Popular" },

    // Commuter/Executive
    { name: "TVS Raider 125", category: "Commuter/Executive", features: "Stylish and sporty 125cc commuter", image: "/Raider.png", badge: "Best Seller" },
    { name: "TVS Star City Plus", category: "Commuter/Executive", features: "Executive commuter with good mileage", image: "Starcity.png" },
    { name: "TVS Radeon", category: "Commuter/Executive", features: "Robust and reliable commuter motorcycle", image: "radon.png" },
    { name: "TVS Sport", category: "Commuter/Executive", features: "High-mileage basic commuter", image: "/Sports.png" },

    // Jupiter (New Products Added)
    { name: "TVS Jupiter Red", category: "Commuter/Executive", features: "Stylish scooter with great mileage", image: "/Jupiter (2).png" },
    { name: "TVS Jupiter Black", category: "Commuter/Executive", features: "Premium stylish scooter", image: "/Jupiter.png" },

    // Moped
    { name: "TVS XL 100", category: "Moped", features: "Reliable heavy-duty moped", image: "/TVS XL 100.webp" }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        
        {/* Hero Header */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block bg-white/10 px-6 py-2 rounded-full text-sm mb-6">
                COMPLETE RANGE
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Explore All TVS Motorcycles
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From high-performance sportbikes to daily commuters — find your perfect ride.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4 overflow-x-auto">
            <Filter size={20} className="text-gray-600" />
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold ${
                  selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-600 text-lg mb-8">
              Showing <b>{filteredProducts.length}</b> motorcycles
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
