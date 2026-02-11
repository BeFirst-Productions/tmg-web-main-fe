"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { useRef, useState, useEffect } from "react";

export default function LicenseFAQSection({ license }) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const faqCardVariants = {
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.08,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left Column - Title and Image */}
            <motion.div
              className="flex flex-col items-start justify-start"
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-[#49051E] leading-tight mb-12"
                variants={titleVariants}
              >
                <span className="block">Frequently</span>
                <span className="block">Asked Questions</span>
              </motion.h2>

              {/* Question Mark Image */}
              <motion.div
                className="w-full flex justify-center lg:justify-start"
                variants={imageVariants}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/images/services/question-mark-3d.png"
                  alt="FAQ image"
                  className=""
                />
              </motion.div>
            </motion.div>

            {/* Right Column - FAQ Items */}
            <motion.div
              className="lg:col-span-2 space-y-8 mt-5 md:mt-12"
              variants={containerVariants}
            >
              {license?.faqs?.map((faq, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={faqCardVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 justify-center"
                >
                  {/* Question Circle Badge */}
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-full bg-[#972044] flex items-center justify-center"
                    custom={index}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-3xl">?</span>
                  </motion.div>

                  {/* Question and Answer */}
                  <motion.div
                    className="flex-1 pt-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.08 + 0.1,
                      duration: 0.6,
                    }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <motion.p
                      className="text-gray-600 text-sm md:text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.08 + 0.2,
                        duration: 0.6,
                      }}
                    >
                      {faq.answer}
                    </motion.p>
                    {index < license?.faqs?.length - 1 && (
                      <motion.div
                        className="border-b border-gray-300 mt-8"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={
                          isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0 }
                        }
                        transition={{
                          delay: 0.6 + index * 0.08,
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}