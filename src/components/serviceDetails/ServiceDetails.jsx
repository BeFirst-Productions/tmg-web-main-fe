"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ServiceDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const containerRef = useRef(null);
  const contentSectionRef = useRef(null);
  const wheelAccumulator = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const scrollDelayRef = useRef(400);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sections = [
    {
      number: "01",
      title: "Simplifying Your Business Setup Journey",
      description:
        "Starting a business in Dubai is one of the smartest investments you can make but understanding the regulatory landscape can be overwhelming. Our experts streamline every step, offering a one-stop solution that saves you time, effort, and unnecessary costs.",
    },
    {
      number: "02",
      title: "Why Dubai is the Ideal Business Destination",
      description:
        "Dubai's thriving economy, world-class infrastructure, and strategic location make it a global hub for entrepreneurs. With options like the Mainland, Freezone, and Offshore setups, the UAE offers unmatched flexibility for every type of venture.",
    },
    {
      number: "03",
      title: "Expert Support Every Step of the Way",
      description:
        "From business registration and licensing to visa processing and financial planning, our team of seasoned professionals guides you through every phase. We ensure compliance with all regulations and help you establish a solid foundation for sustainable growth.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (contentSectionRef.current) {
      observer.observe(contentSectionRef.current);
    }

    return () => {
      if (contentSectionRef.current) {
        observer.unobserve(contentSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isMobile && isContentVisible && contentSectionRef.current) {
        const contentRect = contentSectionRef.current.getBoundingClientRect();
        const isOverContent =
          contentRect.top <= window.innerHeight / 2 && contentRect.bottom >= 0;

        if (isOverContent) {
          const now = Date.now();
          const timeSinceLastScroll = now - lastScrollTimeRef.current;

          if (isLocked) {
            e.preventDefault();
            wheelAccumulator.current += e.deltaY;

            if (
              Math.abs(wheelAccumulator.current) > 50 &&
              timeSinceLastScroll > scrollDelayRef.current
            ) {
              if (wheelAccumulator.current > 0) {
                handleScroll("down");
              } else {
                handleScroll("up");
              }
              wheelAccumulator.current = 0;
              lastScrollTimeRef.current = now;
            }
          } else if (
            !isLocked &&
            activeIndex === 0 &&
            timeSinceLastScroll > scrollDelayRef.current
          ) {
            e.preventDefault();
            wheelAccumulator.current = 0;
            setIsLocked(true);
            setActiveIndex(1);
            lastScrollTimeRef.current = now;
          } else if (
            !isLocked &&
            activeIndex > 0 &&
            timeSinceLastScroll > scrollDelayRef.current
          ) {
            e.preventDefault();
            wheelAccumulator.current = 0;
            setIsLocked(true);
            lastScrollTimeRef.current = now;
          }
        }
      }
    };

    const handleScroll = (direction) => {
      if (isLocked) {
        if (direction === "down" && activeIndex < sections.length - 1) {
          setActiveIndex(activeIndex + 1);
        } else if (direction === "up" && activeIndex > 1) {
          setActiveIndex(activeIndex - 1);
        } else if (direction === "up" && activeIndex === 1) {
          setActiveIndex(0);
          setIsLocked(false);
          wheelAccumulator.current = 0;
        } else if (
          direction === "down" &&
          activeIndex === sections.length - 1
        ) {
          setIsLocked(false);
          wheelAccumulator.current = 0;
        }
      }
    };

    if (!isMobile && isContentVisible) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      return () =>
        window.removeEventListener("wheel", handleWheel, { passive: false });
    }
  }, [isLocked, activeIndex, isMobile, isContentVisible, sections.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Header Section */}
      <motion.div
        className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-start"
            variants={itemVariants}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Start Your Business
              <br />
              in Dubai with Expert Guidance
            </h1>

            {/* Decorative Element */}
            <div className="absolute top-20 -left-10 sm:top-24 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-30 blur-2xl hidden sm:block" />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section with Scroll Lock */}
      <div
        className={`relative w-full transition-all duration-300 ${
          isLocked && !isMobile ? "min-h-screen lg:sticky lg:top-0" : ""
        }`}
        ref={contentSectionRef}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
          {isMobile ? (
            // Mobile Layout - Cards Stacked
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-xl border border-gray-200"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 min-w-fit">
                      {section.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Desktop Layout - Horizontal Scroll with Lock and Fixed Image
            <div className="relative flex flex-row gap-12 items-center">
              {/* Left - Decorative Number */}
              <div className="relative min-w-max flex flex-col items-center">
                <div className="relative h-96">
                  {sections.map((section, idx) => {
                    const isActive = idx === activeIndex;

                    return (
                      <motion.div
                        key={idx}
                        className="absolute flex flex-col items-start justify-center"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <span className="text-9xl font-bold text-gray-100 leading-none">
                          {section.number}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Center Content Section */}
              <div className="relative flex-1 max-w-md">
                {/* Scrolling Container */}
                <div className="relative h-96">
                  {sections.map((section, idx) => {
                    const isActive = idx === activeIndex;
                    const isPrev = idx < activeIndex;

                    return (
                      <motion.div
                        key={idx}
                        className="absolute inset-0 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : isPrev ? -60 : 60,
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        pointerEvents={isActive ? "auto" : "none"}
                      >
                        <motion.div
                          className="relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                            {section.title}
                          </h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {section.description}
                          </p>

                          {/* Progress Indicator */}
                          <div className="mt-8 flex gap-2">
                            {sections.map((_, i) => (
                              <motion.div
                                key={i}
                                className={`h-1 rounded-full transition-all ${
                                  i === idx
                                    ? "bg-gray-900 w-8"
                                    : "bg-gray-300 w-2"
                                }`}
                                animate={{
                                  width: i === idx ? 32 : 8,
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Info Text */}
                {/* {isLocked && !isMobile && (
                  <motion.div
                    className="mt-8 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Scroll to explore more
                  </motion.div>
                )} */}
              </div>

              {/* Right Image */}
              <div className=" flex-1 h-96 flex items-center justify-center sticky top-1/2 -translate-y-1/2">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-full"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop"
                    alt="Dubai skyline"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20" />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional Spacing */}
      {/* <div className="h-20 sm:h-32 md:h-40 lg:h-48" /> */}
    </div>
  );
}
