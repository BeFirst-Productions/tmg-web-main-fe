"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * AnimatedSection Component
 * Wraps each section to provide scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.animation - Animation type: 'overlap', 'fadeUp', 'slideIn', 'scale'
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.zIndex - Stack order (higher numbers appear on top)
 */
export const AnimatedSection = ({ 
  children, 
  animation = "overlap",
  delay = 0,
  zIndex = 1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Set to true if you want animation to happen only once
    amount: 0.2, // Trigger when 20% of section is visible
    margin: "-100px 0px -100px 0px" // Offset viewport detection
  });

  // Animation variants for different effects
  const variants = {
    overlap: {
      initial: { 
        y: 100, 
        opacity: 0,
        scale: 0.95
      },
      animate: { 
        y: 0, 
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.22, 1, 0.36, 1] // Custom easing for smooth effect
        }
      }
    },
    fadeUp: {
      initial: { 
        y: 60, 
        opacity: 0 
      },
      animate: { 
        y: 0, 
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delay,
          ease: "easeOut"
        }
      }
    },
    slideIn: {
      initial: { 
        x: -100, 
        opacity: 0 
      },
      animate: { 
        x: 0, 
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeOut"
        }
      }
    },
    scale: {
      initial: { 
        scale: 0.8, 
        opacity: 0 
      },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delay,
          ease: "easeOut"
        }
      }
    }
  };

  const selectedVariant = variants[animation] || variants.overlap;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={selectedVariant}
      style={{ 
        position: "relative",
        zIndex: zIndex,
        willChange: "transform, opacity" // Performance optimization
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StickyOverlapSection Component
 * Creates the overlapping scroll effect where sections stack on top of each other
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {number} props.index - Section index for stacking order
 * @param {string} props.backgroundColor - Background color of the section
 */
export const StickyOverlapSection = ({ 
  children, 
  index = 0,
  backgroundColor = "white"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={isInView ? { 
        y: 0, 
        opacity: 1,
        scale: 1
      } : { 
        y: 100, 
        opacity: 0,
        scale: 0.95
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        position: "relative",
        zIndex: 100 - index, // Higher sections have higher z-index
        backgroundColor: backgroundColor,
        borderRadius: index > 0 ? "32px 32px 0 0" : "0", // Rounded top corners for overlapping effect
        boxShadow: index > 0 ? "0 -10px 40px rgba(0, 0, 0, 0.1)" : "none",
        marginTop: index > 0 ? "-60px" : "0", // Overlap amount
        paddingTop: index > 0 ? "60px" : "0"
      }}
    >
      {children}
    </motion.div>
  );
};