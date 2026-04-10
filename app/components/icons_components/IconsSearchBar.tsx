'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';

interface IconsSearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function IconsSearchBar({ searchQuery, onSearch }: IconsSearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative"
    >
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FiSearch className="text-text-muted" size={20} />
      </div>
      <input
        type="text"
        placeholder="Search icons by name or tag (e.g., home, user, arrow)..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-4 bg-card-bg text-text-main border-2 border-border-main rounded-xl focus:border-text-main focus:ring-0 transition-colors outline-none placeholder:text-text-muted/50"
      />
      {searchQuery && (
        <button
          onClick={() => onSearch('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-main transition-colors"
        >
          <FiX size={20} />
        </button>
      )}
    </motion.div>
  );
}
