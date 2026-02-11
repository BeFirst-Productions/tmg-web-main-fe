'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, } from "lucide-react";
import { ScheduleModal } from "./ScheduleModal";



const ScheduleMeetingSection = () => {
  const today = new Date();

  const getNextFiveDays = () => {
    const days = [];
    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push({
        day: nextDay.toLocaleDateString("en-US", { weekday: "short" }),
        date: nextDay.getDate(),
        fullDate: nextDay.toISOString().split("T")[0],
        month: nextDay.toLocaleDateString("en-US", { month: "short" }),
      });
    }
    return days;
  };

  const dates = getNextFiveDays();
  const [selectedDate, setSelectedDate] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipe = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setShowModal(true);
      setIsSwiped(false);
    }, 600);
  };

  return (
    <>
      {/* Decorative background elements */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 bg-[#49051E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" /> */}

      {/* Date Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-5 gap-2 mb-6 lg:mb-8 xl:mb-6"
      >
        {dates.map((date, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedDate(index)}
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`relative rounded-2xl px-1 py-2 md:p-4 lg:p-2 xl:p-4 text-center transition-all duration-300 overflow-hidden ${
              selectedDate === index
                ? "bg-gradient-to-br from-[#49051E] to-[#7a2240] text-white shadow-xl"
                : "bg-white/80 hover:bg-white backdrop-blur-sm text-[#49051E] shadow-md hover:shadow-lg border border-gray-200"
            }`}
          >
            {selectedDate === index && (
              <motion.div
                layoutId="selectedBg"
                className="absolute inset-0 bg-gradient-to-br from-[#49051E] to-[#7a2240]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className="relative z-10">
              <motion.div
                animate={selectedDate === index ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold mb-1"
              >
                {date.date}
              </motion.div>
              <div className="text-xs opacity-90 font-medium">{date.day}</div>
            </div>
            {selectedDate === index && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Swipe Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full  relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative w-full bg-gradient-to-r from-[#49051E] via-[#7a2240] to-[#49051E] rounded-2xl overflow-hidden h-14 flex items-center px-0 cursor-pointer select-none shadow-xl"
        >
          {/* Progress background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Draggable button */}
          <motion.div
            className="relative z-10 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg"
            drag="x"
            dragConstraints={{ left: 0, right: 200 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
              if (info.offset.x > 150) handleSwipe();
            }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            animate={
              isSwiped
                ? {
                    x: "calc(100% - 64px)",
                    transition: { duration: 0.6, ease: "easeOut" },
                  }
                : { x: 0 }
            }
          >
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-6 h-6 text-[#49051E]" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.span
            className="absolute w-full text-center text-white font-semibold pl-12 sm:pl-0 lg:pl-12 text-[0.625rem]  text-lg lg:text-sm xl:text-lg pointer-events-none"
            animate={{ opacity: isSwiped ? 0 : 1 }}
          >
            {isSwiped ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2"
              >
                ✓ Opening...
              </motion.span>
            ) : (
              "Swipe to Schedule Meeting"
            )}
          </motion.span>
        </motion.div>

        {/* Helper text */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-500 mt-3"
        >
          Drag the circle to the right →
        </motion.p> */}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <ScheduleModal
            selectedDate={dates[selectedDate]}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScheduleMeetingSection;