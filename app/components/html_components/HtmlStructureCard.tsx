'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';

const htmlSkeleton = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first HTML page.</p>
</body>
</html>`;

interface HtmlStructureCardProps {
  copiedId: number | null;
  onCopy: (text: string, id: number) => void;
  onStartLessons: () => void;
}

export default function HtmlStructureCard({
  copiedId,
  onCopy,
  onStartLessons,
}: HtmlStructureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="html-structure"
      className="bg-gradient-to-r from-page-bg to-card-bg rounded-2xl border border-border-main overflow-hidden transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Visual skeleton */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <FiFileText className="text-indigo-700 dark:text-indigo-400" size={20} />
            </div>
            <h3 className="text-lg font-bold text-text-main">📄 HTML Page Structure</h3>
            <span className="px-2 py-0.5 bg-indigo-200 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full">
              skeleton
            </span>
          </div>
          <div className="font-mono text-sm bg-card-bg/80 backdrop-blur rounded-lg p-4 border border-border-main">
            <div>&lt;!DOCTYPE html&gt;</div>
            <div className="ml-4 text-indigo-700 dark:text-indigo-400">&lt;html&gt;</div>
            <div className="ml-8 text-blue-600 dark:text-blue-400">&lt;head&gt;</div>
            <div className="ml-12 text-text-muted">&lt;meta&gt;</div>
            <div className="ml-12 text-text-muted">&lt;title&gt;Page Title&lt;/title&gt;</div>
            <div className="ml-8 text-blue-600 dark:text-blue-400">&lt;/head&gt;</div>
            <div className="ml-8 text-emerald-600 dark:text-emerald-400">&lt;body&gt;</div>
            <div className="ml-12 text-text-main">&lt;h1&gt;Main Heading&lt;/h1&gt;</div>
            <div className="ml-12 text-text-main">&lt;p&gt;Paragraph text&lt;/p&gt;</div>
            <div className="ml-8 text-emerald-600 dark:text-emerald-400">&lt;/body&gt;</div>
            <div className="ml-4 text-indigo-700 dark:text-indigo-400">&lt;/html&gt;</div>
          </div>
        </div>

        {/* Tag legend + copy */}
        <div className="bg-card-bg/80 backdrop-blur rounded-lg p-4 border border-border-main">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-semibold text-text-main">What is this?</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCopy(htmlSkeleton, 999)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200"
            >
              {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
              {copiedId === 999 ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
          <div className="space-y-2 text-xs">
            <p><span className="font-bold text-indigo-700 dark:text-indigo-400">&lt;!DOCTYPE&gt;</span> — HTML5 document</p>
            <p><span className="font-bold text-indigo-700 dark:text-indigo-400">&lt;html&gt;</span> — Root element</p>
            <p><span className="font-bold text-blue-600 dark:text-blue-400">&lt;head&gt;</span> — Metadata</p>
            <p><span className="font-bold text-emerald-600 dark:text-emerald-400">&lt;body&gt;</span> — Visible content</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-4 bg-card-bg/50 border-t border-border-main">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartLessons}
          className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-lg"
        >
          Start Lessons <FiArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
