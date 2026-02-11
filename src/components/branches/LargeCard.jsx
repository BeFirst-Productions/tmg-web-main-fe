import { ArrowUpRight, MapPin, Phone, PinIcon, Pointer } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const LargeCard = ({ location }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 30 }}
    transition={{ duration: 0.5 }}
    className="relative bg-[#A9244C] backdrop-blur-sm rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col h-full"
  >
    <div className="mb-4 sm:mb-5 lg:mb-6 flex-shrink-0">
      <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
        {location.title}
      </h3>
<div className="flex items-center gap-2 mb-3">
  <Phone className={`w-4 h-4 sm:w-5 sm:h-5 text-white`} />
  <a 
    href={`tel:${location.phone}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed hover:text-white transition-colors"
  >
    {location.phone}
  </a>
</div>
<div className="flex items-center  gap-2">
  
  <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 text-white`} />
  <p
 

    className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed hover:text-white transition-colors whitespace-pre-line"
  >
    {location.location}
  </p>
</div>
    </div>

    {/* Image Container */}
    <div className="relative flex-1 min-h-0 flex items-end">
      <div
        className="relative w-full h-full overflow-hidden rounded-2xl"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
        }}
      >
        <motion.img
          key={location.image}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={location.image}
          alt={location.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Arrow button  */}
  <Link 
        href={location.link} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 45 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4 bg-[#C79A59] text-white p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-lg hover:bg-[#B8894D] transition-colors z-10"
        >
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </motion.button>
      </Link>
    </div>
  </motion.div>
);
