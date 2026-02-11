"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { Container } from "../layout/Container"; // optional wrapper
import { services } from "@/data/MainlandData";

export default function MainlandCompanyFormation() {
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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
    }),
  };



  const section1 = services.slice(0, 3);
  const section2 = services.slice(3, 6);

  const CircleItem = ({ service, index }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
      <motion.div
        custom={index}
        variants={fadeUp}
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="
          relative
          w-[180px]
          h-[180px]
          rounded-full 
          bg-white 
          border-[0.5px]
          border-[#4B0B1C]/40
          shadow-md 
          flex 
          justify-center 
          items-center 
          text-center
          px-2
          py-2
        "
      >
        <span className="text-[#4B0B1C] text-[16px] font-medium leading-tight whitespace-pre-line">
          {service.title}
        </span>

        {/* Orbiting dot */}
        <motion.span
          animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isHovering
              ? { duration: 1, ease: "linear" }
              : { duration: 0.8, ease: "easeOut" }
          }
          className="absolute w-full h-full rounded-full"
          style={{
            transformOrigin: "center center",
          }}
        >
          <span
            className="absolute w-2 h-2 rounded-full bg-[#7A1332]"
            style={{
              top: "-5px",
              right: "50%",
              transform: "translateX(50%)",
            }}
          ></span>
        </motion.span>
      </motion.div>
    );
  };

  const ServiceSection = ({ services, isReversed = false }) => (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:justify-center
        gap-6
        sm:gap-7
        items-center
        w-full
      "
    >
      {isReversed ? (
        <>
          {/* First Circle - Bottom Left */}
          <div className="flex justify-center xl:pt-24">
            <CircleItem service={services[0]} index={0} />
          </div>

          {/* Second Circle - Center Top (normal) */}
          <div className="flex justify-center">
            <CircleItem service={services[1]} index={1} />
          </div>

          {/* Third Circle - Bottom Right */}
          <div className="flex justify-center xl:pt-24">
            <CircleItem service={services[2]} index={2} />
          </div>
        </>
      ) : (
        <>
          {/* First Circle - Top Left */}
          <div className="flex justify-center">
            <CircleItem service={services[0]} index={0} />
          </div>

          {/* Second Circle - Center Bottom (offset) */}
          <div className="flex justify-center xl:pt-24">
            <CircleItem service={services[1]} index={1} />
          </div>

          {/* Third Circle - Top Right */}
          <div className="flex justify-center">
            <CircleItem service={services[2]} index={2} />
          </div>
        </>
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden "
    >
      <Container>
        <div className="flex flex-col gap-10 items-start  ">
          {/* Heading Section */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="max-w-3xl "
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4B0B1C] leading-snug">
              Comprehensive Mainland Company Formation Solutions
            </h2>
            <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              TMG provides complete assistance for UAE mainland company setup,
              ensuring a fast, transparent, and fully compliant process. Our
              consultants handle every stage from selecting the right legal
              structure to obtaining your trade license and visas.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-[#7A1332] mt-6">
              Our Services Include:
            </h3>
          </motion.div>

          {/* Main Grid Container - 2 Sections */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="
              grid 
              grid-cols-1
              xl:grid-cols-2
              gap-16
              lg:gap-20
              w-full
              max-w-6xl
              mx-auto
            "
          >
            {/* Section 1 */}
            <ServiceSection services={section1} isReversed={false} />

            {/* Section 2 */}
            <ServiceSection services={section2} isReversed={true} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
