"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { Container } from "../layout/Container";

export default function AnimatedTabs({ data, heading, image }) {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  if (!data || data.length === 0) return null;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const tabProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, data.length - 1]
  );

  useMotionValueEvent(tabProgress, "change", (latest) => {
    setActiveTab(Math.round(latest));
  });

  const smoothTabProgress = useSpring(tabProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const headerY = useTransform(scrollYProgress, [0, 0.06], [-18, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 1]);
  const headerYSpring = useSpring(headerY, { stiffness: 120, damping: 20 });
  const headerOpacitySpring = useSpring(headerOpacity, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white">
      <Container>
        <div style={{ height: `${data.length * 100}vh` }} className="relative">
          {/* Sticky container */}
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="absolute top-12 left-0 w-full z-30 pointer-events-auto">
              <div className="max-w-7xl mx-auto ">
                <motion.h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#8B2645] leading-tight whitespace-normal md:whitespace-pre-line">
                  {heading}
                </motion.h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 lg:gap-12 items-center grid-flow-dense">
              {/* Left Column */}
              <div className="flex flex-col justify-center relative h-full">
                {data.map((tab, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex flex-col justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeTab === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Number */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeTab === index ? 0.15 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-[18%] md:top-[18%] lg:top-[20%] xl:top-[25%] left-0"
                    >
                      <h2 className="text-9xl md:text-9xl font-bold text-gray-300">
                        0{index + 1}
                      </h2>
                    </motion.div>

                    <motion.h2
                      className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4 text-black relative z-10"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{
                        opacity: activeTab === index ? 1 : 0,
                        y: activeTab === index ? 0 : 15,
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {tab.title} <br className="text-black" />
                      {tab.highlight}
                    </motion.h2>

                    <motion.p
                      className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg relative z-10"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{
                        opacity: activeTab === index ? 1 : 0,
                        y: activeTab === index ? 0 : 15,
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {tab.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="hidden lg:flex justify-center items-center h-full">
                <motion.div
                  className="relative w-full max-w-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    // src="/assets/images/services/serviceDetails.png"
                    src={image}
                    alt="Yoda Design"
                    className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
