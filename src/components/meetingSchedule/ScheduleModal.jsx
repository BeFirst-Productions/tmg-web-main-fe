"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  Calendar,
  User,
  MessageSquare,
  Send,
  Phone,
  Mail,
} from "lucide-react";

export const ScheduleModal = ({ selectedDate, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [manualDate, setManualDate] = useState(selectedDate.fullDate);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Disable body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const todayISO = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const dateToUse = showCalendar ? manualDate : selectedDate.fullDate;

      const phoneNumber = "971545267777";
      const whatsappMessage = encodeURIComponent(
        `📅 *New Meeting Request*\n\n` +
          `👤 *Name:* ${name}\n` +
          `📞 *Phone:* ${phone}\n` +
          `✉️ *Email:* ${email}\n` +
          `🗓 *Preferred Date:* ${dateToUse}\n\n` +
          `💬 *Message:* ${message}`
      );

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank");

      setIsSubmitting(false);
      onClose();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[9999] p-3 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 50 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5,
        }}
        className="bg-gradient-to-br from-white via-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-7 w-full max-w-[90vw] sm:max-w-md mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#49051E]/5 rounded-full blur-xl sm:blur-2xl -z-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-500/5 rounded-full blur-xl sm:blur-2xl -z-10" />

        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-[#49051E] transition-colors z-10"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </motion.button>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-4 sm:mb-5"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block bg-gradient-to-br from-[#49051E] to-[#7a2240] p-2 sm:p-2 rounded-xl mb-2 sm:mb-3 shadow-lg"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#49051E] to-[#7a2240] bg-clip-text text-transparent">
            Schedule Meeting
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Let's plan your next discussion
          </p>
        </motion.div>

        {/* Date Selector  */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 sm:mb-5"
        >
          {!showCalendar ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-[#49051E]/10 to-purple-500/10 rounded-lg p-3 border border-[#49051E]/20"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded shadow-sm">
                    <Calendar className="w-4 h-4 text-[#49051E]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 truncate">
                      Selected Date
                    </p>
                    <p className="font-bold text-[#49051E] text-sm truncate">
                      {selectedDate.day}, {selectedDate.date}{" "}
                      {selectedDate.month}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalendar(true)}
                  className="text-xs bg-white text-[#49051E] px-2 py-1.5 rounded font-semibold shadow-sm hover:shadow-md transition-all whitespace-nowrap flex-shrink-0"
                >
                  Change
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <input
                type="date"
                value={manualDate}
                min={todayISO}
                onChange={(e) => setManualDate(e.target.value)}
                className="border-2 border-[#49051E]/30 rounded-lg px-3 py-2 w-full text-[#49051E] focus:outline-none focus:ring-2 focus:ring-[#49051E] transition-all text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCalendar(false)}
                className="text-xs text-[#49051E] font-medium hover:underline"
              >
                ← Back to selected date
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Input Fields  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3 mb-4 sm:mb-5"
        >
          {/* Name */}
          <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="text-black bg-transparent rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="Phone"
                className="text-black bg-transparent rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email"
                className="text-black bg-transparent rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
            <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Your message or agenda..."
              className="text-black rounded-lg pl-10 pr-3 py-2 w-full h-16 resize-none focus:outline-none bg-transparent text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-[#49051E] to-[#7a2240] text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 text-sm"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
