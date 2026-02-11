"use client";
import { services } from "@/data/OffshoreData";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../layout/Container";

export default function OffshoreSolutions() {
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


  return (
    <section
      ref={sectionRef}
      className="relative w-full h-fit py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#982044] to-[#640E29] text-white overflow-hidden"
    >
      <Container>

     
      <div className="hidden  absolute  top-0 right-0  lg:flex items-center justify-end pr-6">
        <img
          src="/assets/images/right_text_element.png"
          alt="Background Pattern"
          className=""
        />
      </div>

      <div className="relative z-10 max-w-6xl ">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Comprehensive Offshore Solutions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg max-w-3xl mx-auto text-gray-100 leading-relaxed"
          >
            TMG provides end-to-end support for offshore company formation,
            ensuring your entity is fully compliant and strategically positioned
            for global operations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="text-center mb-12 sm:mb-8"
        >
          <motion.h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Our Services Include:
          </motion.h3>
        </motion.div>

        {/* Services */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="rounded-lg border border-white/30 bg-white backdrop-blur-sm px-6 py-4 text-sm sm:text-base text-black font-medium shadow-sm hover:shadow-lg cursor-default"
            >
              {service}
            </motion.div>
          ))}
        </motion.div>
      </div>
      </Container>

    </section>
  );
}
