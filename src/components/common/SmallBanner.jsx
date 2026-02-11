"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MainButton from "../button/main-button";
import { Container } from "../layout/Container";


const SmallBanner = ({ onOpenModal }) => { 
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

  const buttonVariants = {
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

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 0.1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={sectionRef} className="relative pb-32 lg:pt-16 pt-8 z-10">
      <div
        className="absolute left-0 w-60 h-60 opacity-100"
        style={{ top: "10%", transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/about/left_element_about.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
      <Container>
        <motion.div
          className="min-h-[200px] w-full rounded-2xl p-6  flex items-center justify-center text-white relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(40,7,17,1.00) 0%, rgba(142,26,61,1.00) 100%)",
            backgroundPosition: "center center",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              custom={0}
              variants={circleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"
            />
            <motion.div
              custom={1}
              variants={circleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"
            />
          </div>

          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Icon */}

            <motion.h1
              variants={titleVariants}
              className="text-3xl md:text-4xl font-bold mb-3"
            >
              Ready to Start Your Business Journey
            </motion.h1>

            <motion.p
              variants={descriptionVariants}
              className="text-lg mb-6 max-w-2xl mx-auto opacity-90"
            >
              Get expert assistance from TMG Global and launch your UAE business
              with confidence. Contact us today for a free consultation and
              customized setup plan.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              className=" flex justify-center"
            >
              <MainButton
                text="Contact Now"
                className=""
                icon="external"
                scroll={true}
                onClick={onOpenModal} // Use the prop instead of local state
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Remove modal rendering from here */}
    </section>
  );
};
export default SmallBanner;