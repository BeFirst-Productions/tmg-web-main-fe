'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

const LettersPullUpText = ({ text, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Split text into words
  const words = text.split(' ');

  const variants = {
    hidden: { y: 10, opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      className={cn(
        'text-4xl sm:text-5xl lg:text-[3rem] text-maroon-900 mb-6 lg:mb-8 leading-tight font-bold',
        className
      )}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              variants={variants}
              custom={wi * word.length + ci}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};

export default LettersPullUpText;
