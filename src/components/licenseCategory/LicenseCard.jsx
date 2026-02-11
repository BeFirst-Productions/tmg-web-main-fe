"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LicenseCard = ({ title, image, delay, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  const handleViewMore = (e) => {
    e.stopPropagation();
    router.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative group cursor-pointer h-[320px]"
    >
      <div className="relative h-full w-full rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-[#941D43]/60 backdrop-blur-sm h-64 w-56 lg:w-44 lg:h-64 xl:h-72 xl:w-56 rounded-2xl flex items-center justify-center">
            <h3 className="text-white font-semibold text-md sm:text-xl text-center px-6">
              {title}
            </h3>
          </div>
        </motion.div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-[#941D43] flex flex-col justify-between p-4 lg:p-4 xl:p-8"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-white/90 text-sm lg:text-[13px] xl:text-sm leading-relaxed mb-2"
              >
                {description}
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#941D43] px-8 py-3 rounded-full font-semibold text-base self-start hover:bg-gray-100 transition-colors"
                onClick={handleViewMore}
              >
                View More
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
