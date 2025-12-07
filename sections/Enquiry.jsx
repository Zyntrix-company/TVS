'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronRight, TrendingUp, Users, Award, Headphones, MapPin } from 'lucide-react';

export default function FranchiseEnquiry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const benefits = [
    {
      icon: <TrendingUp size={28} />,
      title: "High ROI Potential",
      description: "Proven business model with strong profit margins and consistent growth"
    },
    {
      icon: <Users size={28} />,
      title: "Complete Training",
      description: "Comprehensive onboarding program for you and your team"
    },
    {
      icon: <Award size={28} />,
      title: "Brand Recognition",
      description: "Leverage TVS's trusted reputation and 40+ years of market leadership"
    },
    {
      icon: <Headphones size={28} />,
      title: "Ongoing Support",
      description: "Dedicated business managers and 24/7 operational assistance"
    },
    {
      icon: <MapPin size={28} />,
      title: "Territory Rights",
      description: "Exclusive dealership zones with protected market coverage"
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 50%, #f5f7fa 100%)'
      }}
    >
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Image Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          
          {/* Left Side - Headings */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Tag Label */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              BUSINESS OPPORTUNITY
            </motion.span>

            {/* Main Heading */}
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Partner with India's Most Trusted Two-Wheeler Brand
            </h2>

            {/* Description */}
            <p 
              className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-0 max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Join our expanding network of authorized dealerships across the nation. 
              We provide end-to-end support, from setup to sales, ensuring your success 
              as a TVS franchise partner.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="TVS Showroom and Franchise"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                <p 
                  className="text-gray-900 font-bold text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  500+ Dealerships
                </p>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Across India & Growing
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md text-center"
            >
              <div className="w-14 h-14 bg-blue-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h4 
                className="font-bold text-gray-900 text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {benefit.title}
              </h4>
              <p 
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Apply for Franchise
            <ChevronRight size={24} />
          </motion.button>

          {/* Mini Caption */}
          <p 
            className="text-gray-600 text-sm mt-4 font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ⚡ Limited dealership slots available in select locations
          </p>
        </motion.div>
      </div>
    </section>
  );
}