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
import { tabsContent } from "@/data/Vision&MissionData";

export default function MissionVisionSection() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to active tab index (0 and 1)
  const tabProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(tabProgress, "change", (latest) => {
    setActiveTab(Math.round(latest));
  });

  const smoothTabProgress = useSpring(tabProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="section_tabs z-20 rounded-[2rem] relative"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(152,32,68,1) 0%, rgba(100,14,41,1) 100%)",
        backgroundPosition: "center center",
      }}
    >
      <Container>
        <div className="py-28 relative">
          <div className="tabs_height h-[200vh] md:h-[200vh]">
            <div
              ref={stickyRef}
              className="tabs_sticky-wrapper h-screen sticky top-[5vh]"
            >
              <div className="tabs_container w-full max-w-[120rem] mx-auto">
                <div className="tabs_component h-[90vh] grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-6 px-[3.3%]">
                  {/* Left Column */}
                  <div className="  rounded-[1.25rem] flex flex-col justify-end items-stretch p-6">
                    <div className="tabs_left-top h-full relative">
                      {tabsContent.map((tab, index) => (
                        <motion.div
                          key={index}
                          className="tabs_left-content w-full h-full text-center flex flex-col justify-center  py-0 absolute"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeTab === index ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.h2
                            className="text-4xl sm:text-5xl lg:text-[3rem]  font-medium leading-tight tracking-tight text-gray-100"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                              y: activeTab === index ? 0 : 20,
                              opacity: activeTab === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {tab.title}
                          </motion.h2>
                          <motion.div
                            className="tabs_line w-full h-px bg-[#C79A59] my-4"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: activeTab === index ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="tabs_right w-full h-full rounded-[1.25rem] relative overflow-hidden  p-6 flex items-center justify-center">
                    <motion.div
                      className="tabs_right-content text-gray-100 text-[0.938rem] md:text-lg font-normal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={activeTab}
                      transition={{ duration: 0.5 }}
                    >
                      {tabsContent[activeTab].description
                        .split("\n")
                        .map((line, idx) => (
                          <p key={idx} className="mb-4">
                            {line}
                          </p>
                        ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
