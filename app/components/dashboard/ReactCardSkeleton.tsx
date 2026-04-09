'use client';

import { motion } from 'framer-motion';

export default function ReactCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-full">
            <div className="w-24 h-5 bg-gray-200 rounded mb-2 animate-pulse" />
            <div className="w-48 h-6 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-16 h-5 bg-gray-200 rounded-full animate-pulse ml-2" />
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-gray-100 rounded animate-pulse" />
          <div className="w-3/4 h-4 bg-gray-100 rounded animate-pulse" />
        </div>
        
        <div className="w-full h-32 bg-gray-800 rounded-lg animate-pulse mt-auto" />
      </div>
    </motion.div>
  );
}
