"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../layout/Container";
import { useState } from "react";
import MainButton from "../button/main-button";
import ConsultationModal from "../common/ConsultationModal";

export default function BusinessBanner({ bannerData }) {
  const [showModal, setShowModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-screen md:min-h-[255px] lg:h-[255px] xl:h-[300px] overflow-hidden flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/images/banner/banner_bg.jpeg")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8E1A3D] via-[#8E1A3D] to-transparent opacity-70" />

      <Container>
        <div className="relative z-10 w-full h-full py-0 md:py-10 flex items-center">
          <motion.div className="w-full" variants={containerVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Column  */}
              <motion.div variants={itemVariants}>
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight whitespace-pre-line">
                  {/* Launch Your UAE<br className="hidden sm:block" />
                  Business with<br className="hidden sm:block" />
                  Confidence */}
                  {bannerData?.heading}
                </motion.h2>
              </motion.div>

              {/* Right Column  */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 sm:gap-6"
              >
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-light">
                  {/* Your complete partner for seamless business setup in Dubai and
                  across the UAE. We handle the complexities, so you can focus on
                  your vision. */}
                  {bannerData?.subheading}
                </p>
                <MainButton
                  bgColor="#C79A59"
                  text="Get a Free Consultation"
                  className=""
                  icon="external"
                  scroll={true}
                  onClick={() => setShowModal(true)}
                />
                {/* CTA Button */}
                {/* <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 bg-[#C79A59] hover:bg-[#B8894A] text-gray-900 font-semibold rounded-lg transition-colors duration-200 shadow-lg w-fit"
                >
                  <span className="text-sm sm:text-base">
                    Get a Free Consultation
                  </span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {showModal && (
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      )}

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-10 left-5 w-24 h-24 bg-white opacity-5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
