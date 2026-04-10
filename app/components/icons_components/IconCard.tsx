'use client';

import { motion, Variants } from 'framer-motion';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { IconItem, getCategoryColor } from './iconData';

interface IconCardProps {
  icon: IconItem;
  copiedName: string | null;
  onCopy: (name: string, id: string) => void;
  variants: Variants;
}

export default function IconCard({ icon, copiedName, onCopy, variants }: IconCardProps) {
  const color = getCategoryColor(icon.category);

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-card-bg rounded-xl border border-border-main overflow-hidden hover:shadow-lg transition-all p-6 group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon Preview */}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon.icon}
        </div>

        {/* Icon Name */}
        <div className="space-y-1">
          <h3 className="font-mono text-sm font-medium text-text-main break-all">
            {icon.name}
          </h3>
          <span
            className="inline-block px-2 py-0.5 rounded-full text-xs"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {icon.category}
          </span>
        </div>

        {/* Copy Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCopy(icon.name, icon.id)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all"
          style={{
            backgroundColor: copiedName === icon.id ? '#10b981' : 'var(--color-page-bg)',
            color: copiedName === icon.id ? '#000' : 'var(--color-text-muted)',
            border: '1px solid var(--color-border-main)'
          }}
        >
          {copiedName === icon.id ? (
            <>
              <FiCheck size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <FiCopy size={14} />
              <span>Copy name</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
