'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';
import { faqs } from '@/data/FreezoneData';

export default function FreezoneFAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);



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

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const chevronVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  return (
    <div ref={sectionRef} className="min-h-screen relative bg-white  pt-10 sm:pt-14 lg:pt-20 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
             <div
        className="absolute top-[20%] right-0 w-60 h-60 opacity-100"
        style={{  transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/right_element.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
        <Container>

      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          variants={titleVariants}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#49051E] mb-3">
            FAQ
          </motion.h2>
        </motion.div>

        {/* Decorative watermark */}
        {/* <div className="absolute top-8 right-8 w-24 h-24 sm:w-32 sm:h-32 opacity-10 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-300 to-orange-200"></div>
        </div> */}

        {/* FAQ Items */}
        <motion.div
          className="space-y-3 sm:space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="group"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className={`relative z-10 w-full px-4 sm:px-6 py-4 sm:py-7 text-left rounded-lg transition-all duration-300 border-1 border-gray-600 shadow-lg  ${
                  expandedIndex === index
                    ? 'bg-white shadow-lg  border-[#C79A59]'
                    : 'bg-white hover:shadow-md  border-transparent hover:border-[#C79A59]'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <span className="text-sm sm:text-lg lg:text-xl font-medium text-black text-left pr-2">
                    {faq.question}
                  </span>
                  <motion.div
                    custom={index}
                    variants={chevronVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex-shrink-0"
                  >
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-colors ${
                          expandedIndex === index
                            ? 'text-[#941D43]'
                            : 'text-black'
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="px-4 sm:px-6 py-4 sm:py-5 bg-[#C79A59] border-t border-[#C79A59] rounded-b-lg mt-1"
                    >
                      <p className="text-sm sm:text-base lg:text-lg font-medium text-black leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
        </Container>

    </div>
  );
}