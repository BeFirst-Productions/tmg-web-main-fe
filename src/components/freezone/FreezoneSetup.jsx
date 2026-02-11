'use client'
import { services } from "@/data/FreezoneData";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../layout/Container";

export default function FreezoneSetup() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
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
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardTitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const cardDescriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
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

  const fadeUpVariants = {
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

   const squareVariantsanimate = {
    initial: { opacity: 0, scale: 0, rotate: 0 },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      rotate: 45,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -8, 0],
      transition: {
        delay: custom * 0.1,
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
    >
 <Container>
    

      <div className="w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 sm:mb-16 lg:mb-20 flex flex-col md:flex-row items-center justify-between "
        >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className=" "
        >
          <motion.h2
            variants={titleVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#49051E] mb-4 leading-tight"
          >
            Seamless Setup. Maximum Benefits
          </motion.h2>
          <motion.p
            variants={descriptionVariants}
            className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed"
          >
           At TMG Global, we make your Freezone business setup effortless. 
           Our team handles every detail from selecting the right Freezone 
           to getting your trade license, visa, and office space ready.
          </motion.p>
        </motion.div>

            <div className="flex-shrink-0 flex items-start justify-center lg:justify-end ">
                      <div className="w-20 h-20 md:w-full md:h-28">
                        <motion.svg
                          viewBox="0 0 140 120"
                          className="w-full h-full drop-shadow-lg"
                          initial="initial"
                          animate="animate"
                        >
                          {/* Left Square (Red/Burgundy) - Rotated 45 degrees */}
                          <motion.g
                            custom={0}
                            variants={floatingVariants}
                            animate="animate"
                          >
                            <motion.rect
                              x="25"
                              y="20"
                              width="50"
                              height="50"
                              rx="5"
                              fill="none"
                              stroke="#a74654"
                              strokeWidth="2.5"
                              variants={squareVariantsanimate}
                              custom={0}
                              initial="initial"
                              animate="animate"
                              whileHover="hover"
                              style={{ transformOrigin: "40px 45px" }}
                              transform="rotate(-25deg)"
                            />
                          </motion.g>
          
                          {/* Right Square (Black) - Rotated 45 degrees opposite */}
                          <motion.g
                            custom={1}
                            variants={floatingVariants}
                            animate="animate"
                          >
                            <motion.rect
                              x="60"
                              y="20"
                              width="50"
                              height="50"
                              rx="5"
                              fill="none"
                              stroke="#1a1a1a"
                              strokeWidth="2.5"
                              variants={squareVariantsanimate}
                              custom={1}
                              initial="initial"
                              animate="animate"
                              whileHover="hover"
                              style={{ transformOrigin: "100px 45px" }}
                              transform="rotate(25deg)"
                            />
                          </motion.g>
          
                          {/* Center Diamond Square (overlapping area) */}
                          {/* <motion.rect
                            x="50"
                            y="35"
                            width="40"
                            height="40"
                            rx="4"
                            fill="none"
                            stroke="#7a7a7a"
                            strokeWidth="2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              transition: { delay: 0.4, duration: 0.5 },
                            }}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                            style={{ transformOrigin: "70px 55px" }}
                            transform="rotate(45deg)"
                          /> */}
                        </motion.svg>
                      </div>
                    </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              className="bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center rounded-2xl p-6 sm:p-7 h-full flex flex-col text-white cursor-default shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Icon */}
              <motion.div
                custom={i}
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mb-4 flex-shrink-0"
              >
                <img className="w-16 h-16 flex items-center justify-center text-5xl" src={service.icon} alt={service.title} />
              </motion.div>

              {/* Title */}
              <motion.h3
                custom={i}
                variants={cardTitleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-base sm:text-lg font-semibold mb-3 leading-tight"
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                custom={i}
                variants={cardDescriptionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-sm font-normal text-white/90 leading-relaxed flex-grow"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
 </Container>

    </section>
  );
}