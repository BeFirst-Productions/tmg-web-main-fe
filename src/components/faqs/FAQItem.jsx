"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = memo(
  ({ faq, index, isOpen, toggle, variants, customIndex }) => {
    return (
      <motion.div
        custom={customIndex}
        variants={variants}
        initial="hidden"
        animate="visible"
        className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
          isOpen
            ? "border-[#8B1538]"
            : "border-[#8B1538] bg-white hover:border-[#A01B47] hover:shadow-lg"
        }`}
      >
        <button
          onClick={() => toggle(index)}
          className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors duration-300 bg-white"
        >
          <span
            className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-300 text-gray-900`}
          >
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex-shrink-0"
          >
            <ChevronDown
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 text-[#8B1538]`}
            />
          </motion.div>
        </button>

        <AnimatePresence initial={false} mode="wait">
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  opacity: {
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeInOut",
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  opacity: {
                    duration: 0.25,
                    ease: "easeInOut",
                  },
                },
              }}
              className="overflow-hidden bg-[#8B1538]"
            >
              <motion.div
                className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2"
                initial={{ y: -10 }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.15,
                    ease: "easeOut",
                  },
                }}
              >
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

FAQItem.displayName = "FAQItem";

export default FAQItem;
