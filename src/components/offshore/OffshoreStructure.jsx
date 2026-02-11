"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, FolderOpen, FileText, Building2 } from "lucide-react";
import { Container } from "../layout/Container";
import { companyTypes } from "@/data/OffshoreData";



const decorativeSquares = [
  { size: "w-4 h-4 sm:w-5 sm:h-5", top: "21%", right: "4%", delay: 0.5 },
  { size: "w-4 h-4 sm:w-5 sm:h-5", top: "27%", right: "4%", delay: 0.6 },
  { size: "w-4 h-4 sm:w-5 sm:h-5", top: "24%", right: "4%", delay: 0.7 },
  { size: "w-4 h-4 sm:w-5 sm:h-5", top: "24%", right: "6%", delay: 0.8 },
  { size: "w-4 h-4 sm:w-5 sm:h-5", top: "27%", right: "6%", delay: 0.9 },
  { size: "w-4 h-4 sm:w-5 sm:h-5", top: "30%", right: "6%", delay: 1.0 },
];

export default function OffshoreCompanyStructure() {
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

  return (
    <>
      <div
        ref={sectionRef}
        className="min-h-fit  relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-28 "
      >
        {/* Decorative squares */}
        {decorativeSquares.map((square, index) => (
          <motion.div
            key={index}
            custom={square.delay}
            variants={squareVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`absolute ${square.size} border-2 border-rose-300 hidden lg:block`}
            style={{ top: square.top, right: square.right }}
          />
        ))}
        <Container>
          <div className="container mx-auto max-w-7xl">
            {/* Header Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-8 sm:mb-12 md:mb-16 max-w-3xl"
            >
              <motion.h1
                variants={titleVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#49051E] mb-4 sm:mb-6 leading-tight"
              >
                Choose the Right Offshore
                <br />
                Company Structure
              </motion.h1>
              <motion.p
                variants={descriptionVariants}
                className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
              >
                Our consultants help you select the optimal structure based on
                your goals, ensuring legal compliance and operational
                efficiency.
              </motion.p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            >
              {companyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow:
                      //   '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Icon */}
                  <motion.div
                    custom={index}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-4 sm:mb-6"
                  >
                    <img
                      src={type.icon}
                      alt={type.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-800 stroke-[1.5]"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
}
