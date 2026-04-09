'use client';

import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

interface IconsEmptyStateProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export default function IconsEmptyState({ searchQuery, onClearSearch }: IconsEmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16"
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: '#ffb7c520' }}
      >
        <FiAlertCircle className="w-10 h-10" style={{ color: '#ffb7c5' }} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No icons found</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {searchQuery
          ? `No icons match "${searchQuery}". Try a different search term or category.`
          : 'No icons available in this category.'}
      </p>
      {searchQuery && (
        <button
          onClick={onClearSearch}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Clear Search
        </button>
      )}
    </motion.div>
  );
}
