'use client';

import { motion } from 'framer-motion';
import { iconCategories } from './iconData';

interface IconsCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function IconsCategoryFilter({
  selectedCategory,
  onCategoryChange,
}: IconsCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {iconCategories.map((category, index) => {
        const isSelected = selectedCategory === category.id;
        return (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onCategoryChange(category.id)}
            className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: isSelected ? category.color : 'transparent',
              color: isSelected ? '#000' : '#64748b',
              border: isSelected ? 'none' : '1px solid #e2e8f0',
            }}
            whileHover={!isSelected ? { scale: 1.05, backgroundColor: '#f8fafc' } : {}}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
            {isSelected && (
              <motion.div
                layoutId="activeIconCategory"
                className="absolute inset-0 rounded-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
