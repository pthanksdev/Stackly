'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }} // Start visible
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // Always visible
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
