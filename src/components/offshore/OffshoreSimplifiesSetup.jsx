"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { steps } from "@/data/OffshoreData";

const OffshoreSimplifiesSetup = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.6,
      },
    },
  };

  return (
    <>
      <Container>
        <div ref={sectionRef} className="py-16 sm:py-20 lg:py-24 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12 sm:mb-16 lg:mb-20"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#49051E] leading-tight">
                How TMG Simplifies
                <br />
                Offshore Setup
              </h2>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Horizontal connecting lines */}
              <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden lg:block origin-left">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#49051E]/0 via-[#49051E]/40 to-[#49051E]/0"
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-3 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <div className="relative h-full">
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id={`borderGradient-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#49051E"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="50%"
                              stopColor="#49051E"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#49051E"
                              stopOpacity="0.6"
                            />
                          </linearGradient>
                        </defs>
                        <motion.rect
                          x="1"
                          y="1"
                          width="98"
                          height="98"
                          fill="none"
                          stroke={`url(#borderGradient-${index})`}
                          strokeWidth="1.5"
                          rx="8"
                          ry="8"
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          variants={borderVariants}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.3 + index * 0.1,
                          }}
                        />
                      </svg>

                      <div className="relative p-5 sm:p-6 h-full bg-white rounded-lg group-hover:bg-gray-50 transition-colors duration-300 flex flex-col border-[0.5px] border-[#941D43]/40 group-hover:border-[#49051E]/40">
                        {/* Step number indicator */}
                        <motion.div
                          className="absolute -top-3 -left-3 w-6 h-6 bg-[#49051E] text-white text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={
                            isInView
                              ? { scale: 1, rotate: 0 }
                              : { scale: 0, rotate: -180 }
                          }
                          transition={{
                            delay: 0.5 + index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          {index + 1}
                        </motion.div>

                        <motion.h3
                          className="text-base sm:text-lg font-bold text-[#49051E] mb-3 leading-snug group-hover:text-[#6b0a2e] transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: 0.3 + index * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          {step.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: 0.4 + index * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          {step.description}
                        </motion.p>

                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#49051E] to-transparent rounded-full"
                          initial={{ width: "0%" }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>

                    {/* Connecting dots for mobile */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-[#49051E]/40 to-transparent lg:hidden"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        custom={0.5 + index * 0.1}
                        variants={squareVariants}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OffshoreSimplifiesSetup;
