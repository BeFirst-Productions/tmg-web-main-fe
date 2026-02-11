import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ScheduleMeeting = ({ onScheduleModalOpen }) => { // Add this prop
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
    const [isSwiped, setIsSwiped] = useState(false);

    const handleSwipe = () => {
        setIsSwiped(true);
        setTimeout(() => {
            onScheduleModalOpen(dates[selectedDate]); // Call the prop function
            setIsSwiped(false);
        }, 600);
    };

    return (
        <div className="bg-[#C79A59] rounded-2xl px-6 py-10 lg:px-5 lg:py-6 xl:px-4 xl:py-5 shadow-xl text-white flex flex-col ">
            <h3 className="text-[#49051E] text-xl font-bold pb-3">Book a Consultation
                with TMG Global</h3>
            <p className="text-[#000000] mb-6 lg:mb-8 xl:mb-6 text-lg leading-relaxed font-normal">
                Plan your meeting with ease. Select a date that suits you, and
                we'll make sure an expert is ready to assist you with your
                business setup in the UAE.
            </p>

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
                        className="absolute w-full text-center text-white font-semibold pl-12 sm:pl-0 lg:pl-12 text-[0.625rem]  md:text-lg lg:text-sm  pointer-events-none"
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
            </motion.div>
        </div>
    )
}

export default ScheduleMeeting;