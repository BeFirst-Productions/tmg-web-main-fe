"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BranchData } from "../../data/BranchData";
import { SmallCard } from "./SmallCard";
import { LargeCard } from "./LargeCard";
import { Container } from "../layout/Container";

const WhereAvailableSection = () => {
  const [selected, setSelected] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    intervalRef.current = setInterval(() => {
      setSelected((prev) => (prev + 1) % BranchData.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || !carouselRef.current) return;

    const cards = carouselRef.current.children;
    const selectedCard = cards[selected];

    if (selectedCard) {
      const containerHeight = carouselRef.current.offsetHeight;
      const cardHeight = selectedCard.offsetHeight;
      const cardTop = selectedCard.offsetTop;

      const scrollPosition = cardTop - containerHeight / 2 + cardHeight / 2;

      carouselRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [selected, isMounted]);

  const handleCardClick = (index) => {
    setSelected(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSelected((prev) => (prev + 1) % BranchData.length);
    }, 4000);
  };

  return (
    <section className="relative bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#B73B5E]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#7A2440]/30 rounded-full blur-3xl" />
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 lg:mb-12"
          >
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3">
             Where We’re Available in the UAE
            </h2>
  */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3">
              Connecting You Across Every Emirate
            </h2>
            <p className="text-white/80 text-xs sm:text-sm lg:text-base">
              Discover TMG Global’s trusted network of branches across the UAE.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[500px] mb-5 md:mb-6 lg:mb-0">
              <AnimatePresence mode="wait">
                <LargeCard location={BranchData[selected]} key={selected} />
              </AnimatePresence>
            </div>

            {/* Right: Vertical Carousel */}
            <div className="h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[500px]">
              <div
                ref={carouselRef}
                className="h-full overflow-y-auto space-y-3 sm:space-y-4 pr-0 scrollbar-hide scrollbar-thumb-[#B73B5E]/60 scrollbar-track-transparent"
              >
                {BranchData.map((location, idx) => (
                  <SmallCard
                    key={idx}
                    location={location}
                    isSelected={selected === idx}
                    onClick={() => handleCardClick(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(183, 59, 94, 0.6);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(183, 59, 94, 0.8);
        }
      `}</style>
    </section>
  );
};

export default WhereAvailableSection;
