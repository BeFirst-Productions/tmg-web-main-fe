"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GoldenVisaBanner = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const airplaneX = useTransform(scrollYProgress, [0, 1], ["-50%", "150%"]);
  const airplaneY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const airplaneRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const airplaneScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.2, 0.6]
  );
  const airplaneOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <>
      <section ref={sectionRef} className="relative w-full h-[200vh] ">
        {/* Sticky Container - This stays fixed while scrolling */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/images/visa/sky-banner.png"
              alt="Sky background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100/40 to-blue-100/20"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left Side - Title and Airplane */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full">
                  {/* Large Golden Text */}
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                    <motion.span
                      className="inline-block text-[#C79A59]"
                      initial={{ opacity: 0, x: -50, rotateY: -90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      Golden
                    </motion.span>{" "}
                    <motion.span
                      className="inline-block text-black"
                      initial={{ opacity: 0, x: 50, rotateY: 90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      Visa
                    </motion.span>
                  </h2>

                  {/* Airplane Image with Scroll-Based Animation */}
                  <motion.div
                    className="absolute top-0 left-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pointer-events-none"
                    style={{
                      x: airplaneX,
                      y: airplaneY,
                      rotate: airplaneRotate,
                      scale: airplaneScale,
                      opacity: airplaneOpacity,
                    }}
                  >
                    <img
                      src="/assets/images/visa/plane-element.png"
                      alt="Golden airplane"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Content */}
              <motion.div
                className="space-y-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#49051E] leading-tight mb-5 md:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Golden Visa
                  <br />
                  Assistance
                </motion.h2>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    TMG Global Services LLC provides comprehensive{" "}
                    <a
                      href="https://tmgdubai.ae/uae-golden-visa"
                      className="text-decoration-none"
                    >
                      <b> Golden Visa services in Dubai</b>
                    </a>
                    , offering expert guidance to investors, entrepreneurs, and
                    professionals seeking long-term residency. Our dedicated
                    team manages the complete process, beginning with detailed
                    eligibility assessments and meticulous document preparation,
                    followed by seamless submission and continuous follow-up
                    with relevant <a href="https://ded.ae" className="text-decoration-none"><b>government authorities</b></a>.
                  </p>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Leveraging our in-depth understanding of Dubai's Golden Visa
                    framework, we guarantee a streamlined, efficient, and fully
                    compliant experience. This enables our clients to
                    concentrate on their business ventures and personal
                    development while enjoying the numerous advantages of
                    extended residency in the UAE, supported by our end-to-end
                    professional assistance.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoldenVisaBanner;
