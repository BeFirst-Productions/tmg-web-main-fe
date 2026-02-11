"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import {
  ArrowRight,
  ChevronRight,
  MoveRight,
  ArrowUpRight,
} from "lucide-react";
import ShinyText from "../animations/ShinyText";
import { motion } from "framer-motion";

const MainButton = ({
  bgColor = "#C79A59",
  gradient = "",
  text = "Button",
  link = "/",
  className = "",
  icon = "external",
  scroll = true,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const iconComponents = {
    arrow: ArrowRight,
    chevron: ChevronRight,
    move: MoveRight,
    external: ArrowUpRight,
  };

  const IconComponent = iconComponents[icon] || iconComponents.external;

  const backgroundStyle = gradient
    ? {
        backgroundImage: gradient,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }
    : {
        backgroundColor: isHovered
          ? `color-mix(in srgb, ${bgColor} 90%, black)`
          : bgColor,
      };


  const handleClick = useCallback(
    (e) => {
      if (onClick) {
        e.preventDefault();
        onClick(); 
        return;
      }

      if (!scroll || !link.includes("#")) return;
      e.preventDefault();

      const [targetPath, hash] = link.split("#");
      const cleanHash = hash ? hash.trim() : "";

      if (!cleanHash) return;

      // Same page navigation
      if (targetPath === "" || targetPath === pathname) {
        const element = document.getElementById(cleanHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update URL without reload
          window.history.pushState(null, "", `#${cleanHash}`);
        }
      }
      // Different page navigation
      else {
        // Use router.push for client-side navigation with scroll callback
        router.push(link);

        // Wait for page to load, then scroll to anchor
        setTimeout(() => {
          const element = document.getElementById(cleanHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    },
    [link, scroll, pathname, router]
  );

  return (
    <Link href={link} onClick={handleClick}>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={`
          text-white 
          font-semibold 
          py-2 px-4 sm:py-3 sm:px-5     
          rounded-xl sm:rounded-2xl    
          text-sm sm:text-base md:text-lg 
          transition duration-300 ease-in-out transform 
          hover:scale-105 flex items-center gap-2 group
          ${className}
        `}
        style={backgroundStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>
          <ShinyText
            text={text}
            disabled={false}
            speed={1.4}
            className="custom-class"
          />
        </span>
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
      </motion.button>
    </Link>
  );
};

export default MainButton;
