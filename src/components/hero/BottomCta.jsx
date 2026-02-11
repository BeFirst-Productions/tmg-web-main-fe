"use client";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "../layout/Container";

export const BottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    const footer = document.querySelector("footer");

    if (!homeSection || !footer) return;

    const checkIfShouldShow = () => {
      const homeRect = homeSection.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      const isHomeOutOfView = homeRect.bottom <= window.innerHeight * 0.75;
      const isFooterNotInView = footerRect.top > window.innerHeight;

      setIsVisible(isHomeOutOfView && isFooterNotInView);
    };

    const handleScroll = () => checkIfShouldShow();

    const homeObserver = new IntersectionObserver(
      (entries) => entries.forEach(() => checkIfShouldShow()),
      { threshold: [0.1, 0.9], rootMargin: "0px" }
    );

    const footerObserver = new IntersectionObserver(
      (entries) => entries.forEach(() => checkIfShouldShow()),
      { threshold: 0.1, rootMargin: "0px" }
    );

    homeObserver.observe(homeSection);
    footerObserver.observe(footer);
    window.addEventListener("scroll", handleScroll, { passive: true });

    checkIfShouldShow();

    return () => {
      homeObserver.disconnect();
      footerObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-1 sm:bottom-4 md:bottom-2 left-0 right-0 z-[60] flex justify-center px-3 sm:px-4 md:px-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-[#C79A59]/80 rounded-xl sm:rounded-2xl shadow-2xl h-auto sm:h-auto md:h-[70px] px-3 sm:px-5 md:px-8 lg:px-10 py-3 sm:py-3 md:py-0 backdrop-blur-sm flex flex-col sm:flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1029px]">
              <div className="text-white text-center md:text-left flex-shrink">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-tight whitespace-normal sm:whitespace-normal md:whitespace-nowrap">
                  Get Experts Advice to Setup Your Business in Dubai
                </h3>
              </div>

              <div className="flex items-center gap-2 sm:gap-2 md:gap-3 flex-shrink-0 w-full sm:w-auto justify-center md:justify-end">
                <a
                  href="https://wa.me/971545267777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-[#49051E] hover:bg-[#3d1429] text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl flex-1 sm:flex-initial justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src="/assets/images/whatsapp-icon.png"
                      alt="Chat"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                    <span>Chat</span>
                  </motion.button>
                </a>
                <a
                  href="tel:+971545267777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-[#49051E] hover:bg-[#3d1429] text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl flex-1 sm:flex-initial justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    <span>Call</span>
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
