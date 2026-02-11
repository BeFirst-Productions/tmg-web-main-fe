"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, User, Phone, Mail, FileText, MessageSquare, Send } from "lucide-react";

export default function ConsultationModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Disable body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Validation logic
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone number (e.g., +971501234567)";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const phoneNumber = "971545267777"; 
    const message = `📞 *New Consultation Request!*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${formData.phone}\n📝 *Subject:* ${formData.subject}\n💬 *Message:* ${formData.message}\n\nPlease follow up with this lead.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[99999] p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
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
            className="bg-gradient-to-br from-white via-white to-gray-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-[90vw] sm:max-w-md mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#49051E]/5 rounded-full blur-xl sm:blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#C79A59]/5 rounded-full blur-xl sm:blur-2xl -z-10" />

            {/* Close Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-3 right-3 text-gray-400 hover:text-[#49051E] transition-colors z-10"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </motion.button>

            {/* Modal Header */}
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
                className="inline-block bg-gradient-to-br from-[#49051E] to-[#7a2240] p-2 rounded-xl mb-2 sm:mb-3 shadow-lg"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#49051E] to-[#7a2240] bg-clip-text text-transparent">
                Free Consultation
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Get expert advice for your business
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-transparent rounded-lg pl-10 pr-3 py-2 focus:outline-none text-sm ${
                        errors.name ? 'text-red-500' : 'text-black'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 55 123 4567"
                      className={`w-full bg-transparent rounded-lg pl-10 pr-3 py-2 focus:outline-none text-sm ${
                        errors.phone ? 'text-red-500' : 'text-black'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-transparent rounded-lg pl-10 pr-3 py-2 focus:outline-none text-sm ${
                      errors.email ? 'text-red-500' : 'text-black'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full bg-transparent rounded-lg pl-10 pr-3 py-2 focus:outline-none text-sm ${
                      errors.subject ? 'text-red-500' : 'text-black'
                    }`}
                  />
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <div className="relative bg-white rounded-lg border-2 border-gray-200 focus-within:ring-2 focus-within:ring-[#49051E] transition-all">
                  <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`w-full bg-transparent rounded-lg pl-10 pr-3 py-2 focus:outline-none resize-none text-sm ${
                      errors.message ? 'text-red-500' : 'text-black'
                    }`}
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-[#49051E] to-[#7a2240] text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <Send className="w-4 h-4" />
                <span className="text-sm">Submit via WhatsApp</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}