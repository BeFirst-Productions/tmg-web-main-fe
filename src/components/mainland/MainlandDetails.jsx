"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MainButton from "../button/main-button";
import { Container } from "../layout/Container";

export default function MainlandDetails() {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const squareVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const decorativeSquares = [
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[13%] xl:right-[5%] top-[9%] right-[6%]",
      delay: 0.5,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[18%] xl:right-[5%] top-[13%] right-[6%]",
      delay: 0.6,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[23%] xl:right-[5%] top-[17%] right-[6%]",
      delay: 0.7,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[23%] xl:right-[7%] top-[17%] right-[9%]",
      delay: 0.8,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[18%] xl:right-[7%] top-[13%] right-[9%]",
      delay: 0.9,
    },
    {
      size: "w-4 h-4 sm:w-5 sm:h-5",
      position: "xl:top-[28%] xl:right-[7%] top-[21%] right-[9%]",
      delay: 1.0,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-fit py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {decorativeSquares.map((square, index) => (
        <motion.div
          key={index}
          custom={square.delay}
          variants={squareVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`absolute ${square.size} ${square.position} border-2 border-rose-300 hidden lg:block`}
        />
      ))}

      {/* decorative corner icons */}
      {/* <div className="absolute top-8 right-10 opacity-30 hidden md:block">
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 border border-[#982044] rounded-sm"
            ></div>
          ))}
        </div>
      </div> */}
      <Container>
        <div className="relative z-10 max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="flex-1 text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#49051E] mb-4">
              Start Your UAE Mainland Company
              <br className="hidden sm:block" /> with Confidence
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              At TMG, we make your journey to establish a mainland business in
              the UAE seamless and efficient. Whether you are a startup,
              entrepreneur, or established investor, we provide end-to-end
              support — from company registration and trade licensing to office
              setup and government approvals. Our team ensures your business
              complies with UAE regulations while giving you the freedom to
              operate anywhere in the Emirates.
            </p>

            {/* <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#982044] text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-[#6b0e2f] transition-all"
          >
            Get a Free Consultation
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              ↗
            </motion.span>
          </motion.a> */}
            <MainButton
              bgColor="#8E1A3D"
              text="Get a Free Consultation"
              link="/contact#contact-form"
              className=""
              icon="external"
            />
          </motion.div>

          {/* Right image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={scaleIn}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/images/mainland/mainland-company-formation.png"
                alt="Dubai Mainland"
                width={800}
                height={500}
                className="object-cover w-full h-auto rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom decorative icons */}
      {/* <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={scaleIn}
        className="absolute bottom-8 left-10 flex gap-2 opacity-60"
      >
        <div className="w-6 h-6 border-2 border-[#982044] rounded-md rotate-45"></div>
        <div className="w-6 h-6 border-2 border-black rounded-md rotate-45 -ml-3"></div>
      </motion.div> */}
    </section>
  );
}
