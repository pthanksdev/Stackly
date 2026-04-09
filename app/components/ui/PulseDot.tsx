'use client';

import { motion } from 'framer-motion';

export const PulseDot = ({ color, delay = 0 }: { color: string; delay?: number }) => (
  <motion.span
    className="w-2 h-2 rounded-full"
    style={{ backgroundColor: color }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);
