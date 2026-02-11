"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { features } from "@/data/FreezoneData";

export default function FreezoneDetails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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

    const decorativeSquares = [
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[17%] xl:right-[5%] top-[9%] right-[6%]",
      delay: 0.5,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-6",
      position: "xl:top-[20%] xl:right-[5%] top-[13%] right-[6%]",
      delay: 0.6,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[23%] xl:right-[5%] top-[17%] right-[6%]",
      delay: 0.7,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[23%] xl:right-[7%] top-[17%] right-[9%]",
      delay: 0.8,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[20%] xl:right-[7%] top-[13%] right-[9%]",
      delay: 0.9,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[26%] xl:right-[7%] top-[21%] right-[9%]",
      delay: 1.0,
    },
  ];

  return (
    <motion.div
      className="min-h-screen py-8 md:py-12 lg:py-16 relative overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {decorativeSquares.map((square, index) => (
        <motion.div
          key={index}
          custom={square.delay}
          variants={squareVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className={`absolute ${square.size} ${square.position} border-2 border-rose-300 hidden lg:block`}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
          <p className="text-black text-lg md:text-2xl font-medium mb-2">
            Why Choose a UAE Freezone?
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
            <span className="text-red-900">Unlock 100% Ownership and</span>
            <br />
            <span className="text-red-900">Global Opportunities</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-slate-700 text-sm md:text-base lg:text-base leading-relaxed mb-12 md:mb-16 max-w-3xl"
          variants={itemVariants}
        >
          The UAE's Freezones offer one of the most business-friendly
          environments in the world. Designed to attract international
          investors, each Freezone provides world-class infrastructure, tax
          benefits, and simplified business regulations. Whether you're
          launching a startup, import-export business, or tech firm, a Freezone
          setup ensures flexibility, privacy, and access to global markets.
        </motion.p>

        <motion.div
          className="flex flex-col lg:flex-row items-stretch"
          variants={textVariants}
        >
   
          <motion.div
            className="lg:w-1/2 flex"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full overflow-hidden rounded-bl-0 rounded-tr-[16px] rounded-tl-[16px] lg:rounded-tr-0 lg:rounded-br-0 lg:rounded-tl-[16px] lg:rounded-bl-[16px] shadow-2xl">
              <img
                src="/assets/images/freezone/freezone-company-formation.png"
                alt="Dubai skyline"
                className="w-full h-80 md:h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

        
          <motion.div
            className="lg:w-1/2  flex items-center border-2  lg:border-t-[#941D43] border-r-[#941D43] border-b-[#941D43] border-l-[#941D43] lg:border-l-0 rounded-t-0 lg:rounded-tr-[16px] rounded-r-[16px] rounded-b-[16px] lg:rounded-br-[16px]"
            variants={textVariants}
          >
            <div className="w-full bg-white rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-red-900" />
                    </div>
                    <span className="text-slate-800 text-base md:text-base lg:text-base font-medium leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
