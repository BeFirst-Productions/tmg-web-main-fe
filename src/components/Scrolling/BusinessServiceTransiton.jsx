"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServicesSection from "../serviceSection/serviceSection";
import BusinessSection from "../businessSection/businessSection";

const BusinessServiceTransition = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // only slightly scale while scrolling
  const scale1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.95, 0.9]);

  // stays 1 while visible, no zoom out after leaving
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 1, 1, 1]);

  return (
    <div className="w-full">
      <div ref={containerRef} className="flex flex-col">
        {/* Business Section */}
        <motion.div
          className="c-card sticky top-0 w-full "
          style={{ scale: scale1 }}
        >
          <BusinessSection />
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="c-card sticky top-0 w-full pb-8  "
          style={{ scale: scale2 }}
        >
          <ServicesSection index={1} />
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessServiceTransition;
