"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const LetsTalkCard = () => {
  const handleWhatsAppClick = () => {
    const Number = "971123456789"
    const phoneNumber = Number;
    const message = "Hello! I would like to schedule a meeting.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handlePhoneClick = () => {

    const phoneNumber = "+971123456789";
    const url = `tel:${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="w-[213px] h-[213px] bg-[#9EA7C8] rounded-2xl shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
  
      <div className="text-black z-10">
        <h3 className="text-2xl font-bold leading-tight">Let&apos;s Talk</h3>
        <h3 className="text-2xl font-bold  mb-2">Services</h3>
      </div>

      
      <div className="flex flex-col gap-3 z-10 justify-center items-center">
 
        <motion.div
          className="bg-[#ffff] hover:bg-[#ffffffe0] text-black text-xs font-semibold px-4 py-2.5 rounded-2xl transition-all duration-300 flex items-center gap-2 w-full justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
        >
          <span>Schedule Meet</span>
          <motion.button className="flex items-center py-2 px-2 rounded-2xl bg-[#C79A59]">
            <img
              src="/assets/images/Arrow-icon.png"
              alt="Arrow Right"
              className="w-3 h-3"
            />
          </motion.button>
        </motion.div>

   
        <div className="flex gap-5">
       
          <motion.button
            className="border border-white text-white px-3 py-3 rounded-lg transition-all duration-300 flex items-center justify-center "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
          >
            <img
              src="/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </motion.button>

        
          <motion.button
            className="border border-white text-white px-3 py-3 rounded-lg transition-all duration-300 flex items-center justify-center "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePhoneClick}
          >
            <img
              src="/assets/images/phone-icon.png"
              alt="Phone"
              className="w-6 h-6"
            />
          </motion.button>
        </div>
      </div>

  
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{ translateX: "200%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};
