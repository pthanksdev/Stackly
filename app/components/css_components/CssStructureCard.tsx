'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';

const cssSkeleton = `/* CSS RULE STRUCTURE */
selector {
  property: value;
  property: value;
}

/* EXAMPLE */
p {
  color: #ffb7c5;
  font-size: 16px;
  margin-bottom: 12px;
}`;

interface CssStructureCardProps {
  copiedId: number | null;
  onCopy: (text: string, id: number) => void;
  onStartLessons: () => void;
}

export default function CssStructureCard({
  copiedId,
  onCopy,
  onStartLessons,
}: CssStructureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="css-structure"
      className="bg-gradient-to-r from-page-bg to-card-bg rounded-2xl border border-border-main overflow-hidden transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
              <FiFileText className="text-pink-700 dark:text-pink-400" size={20} />
            </div>
            <h3 className="text-lg font-bold text-text-main">📐 CSS Rule Anatomy</h3>
            <span className="px-2 py-0.5 bg-pink-200 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300 text-xs font-medium rounded-full">
              selector + declaration
            </span>
          </div>
          <div className="font-mono text-sm bg-card-bg/80 backdrop-blur rounded-lg p-4 border border-border-main">
            <div><span className="text-indigo-600 dark:text-indigo-400 font-bold">p</span> {'{'}</div>
            <div className="ml-4 text-emerald-600 dark:text-emerald-400">
              color<span className="text-text-muted">: </span>#ffb7c5<span className="text-text-muted">;</span>
            </div>
            <div className="ml-4 text-emerald-600 dark:text-emerald-400">
              font-size<span className="text-text-muted">: </span>16px<span className="text-text-muted">;</span>
            </div>
            <div className="ml-4 text-emerald-600 dark:text-emerald-400">
              margin-bottom<span className="text-text-muted">: </span>12px<span className="text-text-muted">;</span>
            </div>
            <div className="text-indigo-600 dark:text-indigo-400">{'}'}</div>
          </div>
        </div>
        <div className="bg-card-bg/80 backdrop-blur rounded-lg p-4 border border-border-main">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-semibold text-text-main">Parts of a Rule</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCopy(cssSkeleton, 999)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200"
            >
              {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
              {copiedId === 999 ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
          <div className="space-y-2 text-xs">
            <p><span className="font-bold text-indigo-600 dark:text-indigo-400">Selector</span> — Targets HTML element(s)</p>
            <p><span className="font-bold text-emerald-600 dark:text-emerald-400">Property</span> — What to style (color, margin...)</p>
            <p><span className="font-bold text-amber-600 dark:text-amber-400">Value</span> — How to style it (#ffb7c5, 16px...)</p>
            <p><span className="font-bold text-text-muted">Declaration</span> — property: value; pair</p>
            <p><span className="font-bold text-pink-600 dark:text-pink-400">Rule</span> — selector + { '{ }' } with declarations</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4 bg-card-bg/50 border-t border-border-main">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartLessons}
          className="flex items-center gap-1.5 px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium shadow-lg"
        >
          Start Lessons <FiArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
