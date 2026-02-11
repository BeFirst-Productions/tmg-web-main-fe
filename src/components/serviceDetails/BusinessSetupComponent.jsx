"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { processSteps, services } from "../../data/ServiceDetails";

export default function BusinessSetupComponent({section}) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

console.log("sec",section)
    if (!section) return null;

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

  const processStepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.12,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.12,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.08,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen sm:min-h-screen md:min-h-screen lg:h-fit  bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center overflow-hidden  py-6 sm:py-8 md:py-10 lg:py-8 flex items-center justify-cente"
    >
      <Container>
        <motion.div
          className="w-full h-full flex flex-col justify-between "
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex-shrink-0">
            <motion.div
              variants={titleVariants}
              className="text-center mb-2 sm:mb-3 md:mb-4"
            >
              <motion.h2 className="text-xl sm:text-2xl md:text-4xl xl:text-4xl font-bold text-white leading-5 md:leading-9">
                From Concept to Launch
                <br /> We Handle Everything
              </motion.h2>
            </motion.div>

            <motion.p
              variants={descriptionVariants}
              className="text-center text-xs sm:text-sm md:text-sm lg:text-base text-gray-200 max-w-4xl mx-auto leading-snug px-2 mb-4 md:mb-6"
            >
              TMG Global provides complete business setup solutions, guiding you
              through each step with clarity and precision. Our experts manage
              all requirements, helping you choose the best structure and
              jurisdiction for your goals.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-4 sm:gap-5 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-full flex-wrap mb-6">
              {processSteps.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 sm:gap-2 md:gap-3"
                >
                  <motion.div
                    custom={i}
                    variants={processStepVariants}
                    className="flex flex-col items-center"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#f2135dc1] hover:border-[#F2135D] flex items-center justify-center  transition-colors duration-300">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#F2135D] hover:text-[#F2135D]" />
                    </div>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-semibold text-pink-200 mt-1 sm:mt-1.5 md:mt-2">
                      {service.label}
                    </span>
                  </motion.div>
                  {i < service.length - 1 && (
                    <motion.div
                      custom={i}
                      variants={lineVariants}
                      className="h-0.5 w-3 sm:w-4 md:w-6 lg:w-8 bg-[#F2135D] origin-left"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="flex-shrink-0 flex flex-col gap-3 md:gap-4">
            <motion.div variants={descriptionVariants} className="text-center mb-2">
              <motion.h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white">
            {section?.headline}
              </motion.h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 w-full"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
                     {section?.services?.map((service, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={serviceCardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-rose-800/60 to-red-900/60 backdrop-blur-sm border border-pink-400/40 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 hover:border-pink-400/70 transition-all duration-300 group flex flex-col justify-center items-center h-full shadow-lg hover:shadow-pink-500/20"
                >
                  <div className="mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 flex-shrink-0">
                    <img
                      src={service?.icon}
                      alt={service?.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-12 lg:h-14 transition-all duration-300 transform group-hover:scale-110"
                    />{" "}
                  </div>
                  <motion.h4 className="text-sm sm:text-sm lg:text-lg font-semibold text-white mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 leading-tight text-center">
                    {service?.name.split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </motion.h4>
                  <motion.p className="text-xs sm:text-xs md:text-xs lg:text-xs text-gray-300 leading-tight line-clamp-3 sm:line-clamp-4 flex-grow">
                    {service.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
