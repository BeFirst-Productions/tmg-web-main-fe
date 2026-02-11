import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export const SmallCard = ({ location, isSelected, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ scale: isSelected ? 1 : 1.02 }}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.5 }}
    className={`cursor-pointer rounded-2xl p-3 sm:p-4 lg:p-5 transition-all duration-300 ${
      isSelected ? "bg-white shadow-lg" : "bg-[#A9244C] hover:bg-[#B73B5E]"
    }`}
  >
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden">
        <img
          src={location.image}
          alt={location.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4
          className={`font-semibold text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1 ${
            isSelected ? "text-black" : "text-white"
          }`}
        >
          {location.title}
        </h4>
        <div className="flex items-center gap-2 mb-3">
          <Phone
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isSelected ? "text-black" : "text-white"
            }`}
          />
          <p
            className={`text-xs sm:text-sm ${
              isSelected ? "text-black/70" : "text-white/70"
            }`}
          >
            {location.phone}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isSelected ? "text-black" : "text-white"
            }`}
          />
          <p
            className={`text-xs sm:text-sm whitespace-pre-line ${
              isSelected ? "text-black/70" : "text-white/70"
            }`}
          >
            {location.location}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);
