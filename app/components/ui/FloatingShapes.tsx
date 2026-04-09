'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const fixedPositions = [
    { left: '10%', top: '20%', width: 200, height: 200, duration: 15 },
    { left: '70%', top: '60%', width: 250, height: 250, duration: 20 },
    { left: '30%', top: '80%', width: 150, height: 150, duration: 18 },
    { left: '80%', top: '30%', width: 180, height: 180, duration: 22 },
    { left: '40%', top: '10%', width: 220, height: 220, duration: 25 },
    { left: '60%', top: '70%', width: 280, height: 280, duration: 17 },
  ];

  const fixedLines = [
    { x1: '10%', y1: '30%', x2: '40%', y2: '60%', duration: 8 },
    { x1: '70%', y1: '20%', x2: '90%', y2: '80%', duration: 10 },
    { x1: '20%', y1: '70%', x2: '60%', y2: '30%', duration: 12 },
    { x1: '50%', y1: '40%', x2: '80%', y2: '90%', duration: 9 },
    { x1: '30%', y1: '50%', x2: '70%', y2: '70%', duration: 11 },
    { x1: '80%', y1: '10%', x2: '40%', y2: '80%', duration: 13 },
    { x1: '15%', y1: '85%', x2: '85%', y2: '15%', duration: 14 },
    { x1: '45%', y1: '25%', x2: '65%', y2: '95%', duration: 16 },
    { x1: '55%', y1: '75%', x2: '25%', y2: '45%', duration: 7 },
    { x1: '75%', y1: '55%', x2: '35%', y2: '35%', duration: 19 },
  ];

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fixedPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: pos.width,
            height: pos.height,
            left: pos.left,
            top: pos.top,
          }}
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 0, 50, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      <svg className="absolute w-full h-full opacity-20">
        {fixedLines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};
