"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Container } from "../layout/Container";
import MainlandBusinessSetup from "./MainlandBusinessSetup";

export default function MainlandLicenseSection() {
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

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cards = [
    {
      title: "Professional License",
      desc: "For service-based and consultancy activities (IT, legal, design, etc.)",
      icon: "/assets/images/mainland/mainland_Professional License_icon.png",
    },
    {
      title: "Commercial License",
      desc: "For trading and general business operations",
      icon: "/assets/images/mainland/mainland_Commercial License_icon.png",
    },
    {
      title: "Industrial License",
      desc: "For manufacturing and production-based companies",
      icon: "/assets/images/mainland/mainland_Industrial License_icon.png",
    },
    {
      title: "Tourism License",
      desc: "For travel, hospitality, and event management businesses",
      icon: "/assets/images/mainland/mainland_Tourism License_icon.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
            <div className="  absolute  top-0 right-[-5]  flex items-center justify-end ">
        <img
          src="/assets/images/right_element.png"
          alt="Background Pattern"
          className=""
        />
      </div>
        <Container>

      <div className="max-w-7xl  flex flex-col gap-10 relative z-10">
        {/* Header */}
        <div className="text-center lg:text-left">
          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#49051E] mb-3"
          >
            Choose the Right License for <br className="hidden sm:block"/> Your Business
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0"
          >
            Our experts at TMG help you determine the best license type based on your goals,
            ensuring regulatory compliance and operational efficiency.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={scaleIn}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              custom={index}
              variants={fadeUp}
              className="w-[260px] h-[225px] bg-gradient-to-br from-[#982044] to-[#6b0e2f] text-white rounded-2xl shadow-lg flex flex-col justify-center items-start px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="mb-3"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={62}
                  height={62}
                  className="object-contain"
                />
              </motion.div>
              <motion.h3
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-sm leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        {/* <div className="max-w-5xl mx-auto text-center lg:text-left mt-12">
          <motion.h3
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-2xl sm:text-3xl font-bold text-[#49051E] mb-3"
          >
            Understanding Mainland Business Setup
          </motion.h3>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            A UAE mainland company allows you to conduct business anywhere within the UAE and
            internationally without restrictions. Licensed by the Department of Economic
            Development (DED), mainland businesses can engage directly with local markets,
            government contracts, and large-scale corporate projects.
            <br />
            Unlike Freezones, a mainland license gives you maximum flexibility, unlimited visas,
            and strategic access to UAE’s growing economy.
          </motion.p>
        </div> */}
      </div>
        </Container>

        <MainlandBusinessSetup/>

      {/* Optional Background Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[url('/assets/images/texture-bg.png')] bg-contain bg-no-repeat opacity-30 pointer-events-none"
      />
    </section>
  );
}
