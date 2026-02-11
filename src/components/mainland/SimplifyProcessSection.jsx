"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { Container } from "../layout/Container";

export default function SimplifyProcessSection() {
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
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  const steps = [
    {
      title: "Consultation &\nActivity Selection",
      desc: "Option to open branches across different Emirates.",
    },
    {
      title: "Name Reservation & Initial Approval",
      desc: "Get DED authorization for your trade name and activity.",
    },
    {
      title: "Document\nPreparation",
      desc: "Drafting and notarization of MOA, tenancy contract, and required paperwork.",
    },
    {
      title: "License\nIssuance",
      desc: "Obtain your official DED trade license.",
    },
    {
      title: "Visa & Bank\nAccount Setup",
      desc: "Get investor and employee visas, and open your corporate bank account.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden flex justify-center"
    >
      <Container>
        <div className="flex flex-col gap-10 items-center text-center ">
          {/* Heading */}
          <div className="flex flex-col gap-4 items-center text-center max-w-3xl">
            <motion.h2
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#49051E] leading-snug"
            >
              How TMG Simplifies the Process
            </motion.h2>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
              Our process is streamlined to ensure quick approvals and hassle-free
              execution allowing you to focus on your business, not bureaucracy.
            </motion.p>
          </div>

          {/* Steps Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-3 
            xl:grid-cols-5
              gap-4 
              sm:gap-6 
              md:gap-8 
              mt-6 
              justify-items-center
              w-full
            "
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                  w-full
                  max-w-[220px]
                  sm:max-w-[240px]
                  md:max-w-[260px]
                  h-auto
                  bg-white 
                  border border-[#982044] 
                  rounded-2xl 
                  shadow-sm 
                  hover:shadow-md 
                  flex 
                  flex-col 
                  justify-start 
                  items-start 
                  p-5
                  text-left
                "
              >
                <h3 className="text-[#6b0e2f] font-semibold text-base sm:text-lg mb-2 whitespace-pre-line leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
