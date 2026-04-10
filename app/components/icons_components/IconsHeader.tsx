'use client';

import { motion } from 'framer-motion';
import { iconData, iconCategories } from './iconData';

export default function IconsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: '#d2b7ff' }}
        />
        <div>
          <h1 className="text-3xl font-bold text-text-main">React Icons Gallery</h1>
          <p className="text-text-muted">Feather Icons - Complete collection with names and live previews</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-text-main">{iconData.length}</span>
          <span className="text-text-muted">Total Icons</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-text-main">{iconCategories.length - 1}</span>
          <span className="text-text-muted">Categories</span>
        </div>
      </div>
    </motion.div>
  );
}
