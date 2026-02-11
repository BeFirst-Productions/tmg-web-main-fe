'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const BusinessSection = ({section}) => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

    if (!section) return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ minHeight: '464px' }}
    >
    <div
        className="hidden lg:block absolute left-0 top-[10%] w-80 h-80 opacity-100"
        style={{  transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/services/left_vector.png"
          alt="Left Vector Image"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
        <Container>

      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center h-full">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#49051E] mb-4 sm:mb-6 md:mb-8 leading-tight"
              variants={itemVariants}
            >
        {section.headline}
            </motion.h2>

            {/* Description */}
              {section?.content?.map((text, index) => (
            <motion.p
             key={index}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-0"
              variants={itemVariants}
            >
              {/* The UAE is more than a destination — it's a global business hub
              connecting the East and West. With 100% foreign ownership in many
              sectors, tax-free income, and easy access to international markets,
              the UAE provides the perfect environment for entrepreneurs, investors,
              and corporations to grow. Whether you're launching a new brand or
              expanding globally, Dubai's ecosystem offers endless opportunities
              for success. */}
          {text}
                  </motion.p>
                ))}
          </motion.div>

          {/* Right Content - Image Section */}
          <motion.div
            className="flex justify-center items-center relative order-1 lg:order-2"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-[#972044]">
                <img
                src={section?.image || '/assets/images/services/serviceDetails.png'}
                    alt={section?.headline || 'Service Image'}
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Decorative Frame Border */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-[#C79A59] rounded-tr-xl" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-[#C79A59] rounded-bl-xl" />

              {/* Decorative Dots */}
              <motion.div
                className="absolute top-4 -right-4 sm:top-6 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-[#49051E] rounded-full"
                variants={dotVariants}
                custom={0}
              />
              <motion.div
                className="absolute left-6 -bottom-4 sm:left-8 sm:-bottom-6 w-3 h-3 sm:w-4 sm:h-4 bg-[#49051E] rounded-full"
                variants={dotVariants}
                custom={1}
              />
            </div>
          </motion.div>
        </div>
      </div>
        </Container>

    </section>
  );
};

export default BusinessSection;