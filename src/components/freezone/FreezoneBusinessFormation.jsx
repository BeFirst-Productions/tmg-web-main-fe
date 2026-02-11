"use client";
import { Mainlandservices } from "@/data/MainlandData";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../layout/Container";
import { Freezoneservices } from "@/data/FreezoneData";

export default function FreezoneBusinessFormation() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
    },
  };

  const bulletVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-fit py-8 lg:py-16  bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center text-white overflow-hidden"
    >
      <div className="hidden  absolute  top-0 right-0  lg:flex items-center justify-end pr-6">
        <img
          src="/assets/images/right_text_element.png"
          alt="Background Pattern"
          className=""
        />
      </div>
      <Container>
        <div className="relative z-10 max-w-6xl ">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="text-start mb-6 sm:mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Your Trusted Partner
              <br className="hidden sm:block" />
              in Business Formation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg max-w-3xl"
            >
               TMG Global stands apart through transparency, speed, and expert
              consultation. We’ve helped hundreds of entrepreneurs and investors
              successfully establish their UAE Freezone companies. Our
              specialists understand the nuances of each Freezone’s rules and
              requirements ensuring you save time, avoid costly mistakes, and
              get the best value for your investment.
            </motion.p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="space-y-4 sm:space-y-5"
          >
            {Freezoneservices.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1, x: -6 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 sm:gap-2"
              >
                {/* Bullet Point */}
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center "
                >
                  <motion.div
                    variants={bulletVariants}
                    className="flex-shrink-0"
                  >
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#49051E] "></div>
                  </motion.div>

                  {/* Animated Line */}
                  <motion.div
                    variants={lineVariants}
                    className="flex-shrink-0 h-px bg-[#C79A59]"
                    style={{
                      width: "clamp(10px, 15vw, 20px)",
                      originX: 0,
                    }}
                  ></motion.div>
                </motion.div>

                {/* Text */}
                <span className="text-sm sm:text-base font-medium text-white">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
