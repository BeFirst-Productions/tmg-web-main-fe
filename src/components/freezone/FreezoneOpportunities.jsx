'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';
import { freezoneData, tabs } from '@/data/FreezoneData';
import MainButton from '../button/main-button';

export default function FreezoneOpportunities() {
  const [activeTab, setActiveTab] = useState('dubai-free-zones');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const currentCards = freezoneData[activeTab] || [];

  // ✅ Duplicate cards once for infinite loop illusion
  const loopedCards = [...currentCards, ...currentCards];

  useEffect(() => {
    setScrollIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setScrollIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering, loopedCards.length]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: 'easeOut',
      },
    }),
    exit: { opacity: 0, y: 30 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const tabVariants = {
    inactive: { backgroundColor: 'rgba(184, 149, 106, 0.3)', color: '#000' },
    active: {
      backgroundColor: '#C79A59',
      color: '#fff',
      transition: { duration: 0.3 },
    },
  };

  // Width of one card (in %)
  const cardWidthPercent = 100 / 4 + 0.5;

  // ✅ When scroll reaches half (end of first set), reset to start seamlessly
  const totalCards = loopedCards.length;
  useEffect(() => {
    if (scrollIndex >= currentCards.length) {
      const timeout = setTimeout(() => setScrollIndex(0), 800); // matches transition duration
      return () => clearTimeout(timeout);
    }
  }, [scrollIndex, currentCards.length]);

  return (
    <div className="min-h-screen bg-white py-8 lg:py-16 overflow-hidden">
      <Container>
        <div className="relative max-w-7xl">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#49051E] mb-4">
              Unlock Opportunities in <br className="hidden sm:block" />
              UAE Freezones
            </motion.h2>
            <p className="text-gray-600 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto">
              Discover top UAE Freezones in Dubai, Abu Dhabi, Sharjah, and beyond. Get expert guidance for Freezone company formation, licenses, and visas.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Sidebar Tabs */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-3">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    variants={tabVariants}
                    animate={activeTab === tab.id ? 'active' : 'inactive'}
                    className="px-2 lg:px-1 py-2 lg:py-4 rounded-lg font-semibold text-left transition-all duration-300 border-2 border-gray-300 hover:border-[#C79A59] text-sm sm:text-lg lg:text-base xl:text-xl whitespace-nowrap lg:whitespace-normal"
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Cards Carousel */}
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-4 lg:gap-6"
                  animate={{ x: `-${scrollIndex * cardWidthPercent}%` }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <AnimatePresence mode="wait">
                    {loopedCards.map((zone, index) => (
                      <motion.div
                        key={`${activeTab}-${zone.id}-${index}`}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="flex-shrink-0 w-full sm:w-80 lg:w-60 xl:w-72"
                        style={{ minWidth: '240px' }}
                      >
                        <motion.div
                          whileHover={{
                            y: -3,
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                          }}
                          transition={{ duration: 0.2 }}
                          className="bg-white rounded-2xl border-2 border-[#941D43] p-6 h-72 flex flex-col cursor-pointer transition-all duration-300"
                        >
                          <div className="flex items-start justify-center mb-4">
                            <img
                              src={zone.icon}
                              alt={zone.name}
                              className="text-6xl lg:text-7xl"
                              style={{
                                width: '104px',
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            />
                          </div>
                          <h3 className="text-base lg:text-lg font-bold text-[#49051E] mb-3 line-clamp-2">
                            {zone.name}
                          </h3>
                          <p className="text-black text-xs lg:text-sm leading-relaxed line-clamp-3 flex-grow">
                            {zone.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MainButton
              bgColor="#941D43"
              text="Get a Free Consultation"
              link="/contact#contact-form"
              className=""
              icon="external"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
