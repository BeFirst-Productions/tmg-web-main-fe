"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";

export default function OffshoreSetup() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
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

  const squareVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const iconVariants = {
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

  const borderVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const benefits = [
    "100% foreign ownership without the need for a local sponsor",
    "Flexible corporate structures for holding, trading, investments.",
    "Zero corporate and income taxes in most offshore jurisdictions",
    "Ease of international business expansion & global banking access",
    "Asset protection and confidentiality for shareholders",
    "Quick setup and minimal compliance requirements",
  ];

  return (
    <>
      <Container>
        <div
          ref={sectionRef}
          className="h-fit  py-8 sm:py-12 lg:py-16 overflow-hidden"
        >
          <div className="max-w-6xl">
            <motion.div
              className="mb-8 sm:mb-12 lg:mb-16"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#49051E] mb-4 sm:mb-6">
                Understanding Offshore
                <br className="hidden sm:block" /> Business Setup
              </motion.h2>
            </motion.div>

            <motion.div
              className="pb-16 md:pb-28 sm:mb-14 lg:mb-16 max-w-4xl"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={descriptionVariants}
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                A UAE offshore company is a legal entity registered in the UAE
                but primarily intended for international operations, asset
                protection, and holding purposes. Offshore companies cannot
                conduct business directly within the UAE but enjoy full
                ownership, confidentiality, and zero corporate tax in most
                jurisdictions.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Popular offshore jurisdictions in the UAE include Jebel Ali Free
                Zone Offshore (JAFZA Offshore) and Ras Al Khaimah International
                Corporate Centre (RAK ICC).
              </p>
            </motion.div>

            <motion.div
              className="relative border-[0.5px] border-gray-400 rounded-2xl p-6 sm:p-8 lg:p-10 bg-[#FFFEFE] shadow-sm overflow-hidden"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {isInView && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  <motion.rect
                    x="0.25"
                    y="0.25"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="2"
                    rx="16"
                    ry="16"
                    initial="hidden"
                    animate="visible"
                    variants={borderVariants}
                  />
                  <defs>
                    <linearGradient
                      id="borderGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#49051E" stopOpacity="1" />
                      <stop
                        offset="50%"
                        stopColor="#49051E"
                        stopOpacity="0.5"
                      />
                      <stop offset="100%" stopColor="#49051E" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#49051E] mb-8 sm:mb-10 lg:mb-12 relative"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={titleVariants}
                style={{ zIndex: 2 }}
              >
                Why Choose Offshore Setup
                <br className="hidden sm:block" /> in the UAE
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 relative"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ zIndex: 2 }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg"
                    variants={cardVariants}
                    custom={index}
                  >
                    <div className="absolute inset-0 bg-[#49051E]" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#49051E] to-[#6b0a2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative px-5 sm:px-6 py-4 sm:py-5 h-full flex items-center">
                      <p className="text-sm sm:text-base text-white font-medium leading-snug">
                        {benefit}
                      </p>
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Decorative animated squares */}
            <motion.div
              className="absolute top-40 right-20 w-12 h-12 border-2 border-[#49051E] rounded"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              variants={squareVariants}
            />
            <motion.div
              className="absolute bottom-32 left-10 w-8 h-8 border-2 border-[#49051E] rounded"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
              variants={squareVariants}
            />
            <motion.div
              className="absolute top-1/2 right-10 w-6 h-6 border-2 border-[#49051E] rounded"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.6}
              variants={squareVariants}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
