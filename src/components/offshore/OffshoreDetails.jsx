"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";

export default function OffshoreDetails() {
  const squareVariants = {
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
    <section className="w-full bg-white py-12 md:py-20  overflow-hidden">
      <Container>

      <div className="max-w-6xl ">
        {/* Header with Logo */}
        <div className="flex flex-col md:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Establish Your UAE Offshore
              <br />
              Company with Confidence
            </h1>
          </div>

          {/* Logo/Icon */}
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
                    variants={squareVariants}
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
                    variants={squareVariants}
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
        </div>

        {/* Image Container */}
        <div className="mb-8 overflow-hidden rounded-2xl">
          <img
            src="/assets/images/offshore/offshore-company-formation.png"
            alt="Dubai skyline with modern buildings"
            className="w-full h-auto object-contain bg-gray-100"
            loading="lazy"
          />
        </div>

        {/* Description Text */}
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-center">
            <p>
               At TMG, we make offshore business setup in the UAE seamless,
              secure, and fully compliant. Whether you’re an international
              investor, entrepreneur, or holding company, our team provides
              end-to-end offshore solutions from company registration to
              banking, compliance, and licensing. With TMG, you can enjoy the
              benefits of a tax-efficient, flexible business structure while
              leveraging the UAE’s strategic location for global operations.
            </p>
            {/* <p>
              With TMG, you can enjoy the benefits of a tax-efficient, flexible
              business structure while leveraging the UAE's strategic location
              for global operations.
            </p> */}
          </div>
        </div>
      </div>
      </Container>

    </section>
  );
}
