'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Raider 125 Owner",
      location: "Mumbai, Maharashtra",
      productImage: "/Happy customer_1.jpg",
      rating: 5,
      text: "The Apache RR 310 has completely transformed my riding experience. The build quality is exceptional, and the performance on highways is just phenomenal. TVS has truly created a world-class machine."
    },
    {
      name: "Priya Sharma",
      role: "Jupiter Owner",
      location: "Bangalore, Karnataka",
      productImage: "/Happy customer_2.jpg",
      rating: 5,
      text: "I've been using my TVS Jupiter for daily commutes for 3 years now. It's incredibly reliable, fuel-efficient, and the service support is outstanding. Best decision I made for city riding!"
    },
    {
      name: "Arjun Singh",
      role: "Ronin Owner",
      location: "Hyderabad, Telangana",
      productImage: "/Happy customer_3.jpg",
      rating: 5,
      text: "The Ronin is a perfect blend of vintage aesthetics and modern technology. It turns heads wherever I go, and the ride comfort is unmatched. Proud to be a TVS owner!"
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id ="testimonials" ref={ref} className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gray-100 text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            CUSTOMER STORIES
          </motion.span>
          
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            What Our Riders Say
          </h2>
          
          <p 
            className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Real experiences from real riders. Discover why thousands trust TVS for their journey.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={120} className="text-black" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              {/* Product Image - Takes 50% space */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 w-full lg:w-1/2"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={testimonials[activeIndex].productImage}
                    alt={`${testimonials[activeIndex].role} - ${testimonials[activeIndex].name}`}
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                </div>
              </motion.div>

              {/* Content - Takes 50% space */}
              <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
                {/* Rating */}
                <motion.div
                  key={`rating-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center lg:justify-start gap-1 mb-4"
                >
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 italic"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  "{testimonials[activeIndex].text}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  key={`author-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 
                    className="text-xl font-bold text-black mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {testimonials[activeIndex].name}
                  </h4>
                  <p 
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid - All Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-black shadow-xl' : 'shadow-md'
              }`}
            >
              <div className="mb-4">
                <h4 
                  className="font-bold text-black text-base mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.name}
                </h4>
                <p 
                  className="text-gray-600 text-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {testimonial.role}
                </p>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p 
                className="text-gray-700 text-sm leading-relaxed line-clamp-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}