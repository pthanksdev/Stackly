'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';

const reactSkeleton = `// App.jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>React App</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}

export default App;`;

interface ReactStructureCardProps {
  copiedId: number | null;
  onCopy: (text: string, id: number) => void;
  onStartLessons: () => void;
}

export default function ReactStructureCard({
  copiedId,
  onCopy,
  onStartLessons,
}: ReactStructureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="react-structure"
      className="bg-gradient-to-r from-page-bg to-card-bg rounded-2xl border border-border-main overflow-hidden transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
              <FiTerminal className="text-sky-700 dark:text-sky-400" size={20} />
            </div>
            <h3 className="text-lg font-bold text-text-main">📄 Component Skeleton</h3>
            <span className="px-2 py-0.5 bg-sky-200 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-xs font-medium rounded-full">
              jsx &amp; hooks
            </span>
          </div>
          <div className="font-mono text-sm bg-card-bg/80 backdrop-blur rounded-lg p-4 border border-border-main">
            <div><span className="text-purple-600 dark:text-purple-400">import</span> {'{'} <span className="text-text-main">useState</span> {'}'}</div>
            <div> </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-amber-600 dark:text-amber-400">App</span>() {'{'}
            </div>
            <div className="ml-4">
              <span className="text-blue-600 dark:text-blue-400">const</span> [<span className="text-text-main">count</span>, <span className="text-text-main">setCount</span>] = <span className="text-purple-600 dark:text-purple-400">useState</span>(<span className="text-amber-600 dark:text-amber-400">0</span>);
            </div>
            <div> </div>
            <div className="ml-4">
              <span className="text-blue-600 dark:text-blue-400">return</span> (
            </div>
            <div className="ml-8 text-sky-700 dark:text-sky-400">&lt;div&gt;</div>
            <div className="ml-12 text-text-main">
              Count: {'{'}count{'}'}
            </div>
            <div className="ml-8 text-sky-700 dark:text-sky-400">&lt;/div&gt;</div>
            <div className="ml-4">);</div>
            <div>{'}'}</div>
          </div>
        </div>
        <div className="bg-card-bg/80 backdrop-blur rounded-lg p-4 border border-border-main">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-semibold text-text-main">Key Concepts</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCopy(reactSkeleton, 999)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200"
            >
              {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
              {copiedId === 999 ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
          <div className="space-y-2 text-xs">
            <p><span className="font-bold text-blue-600 dark:text-blue-400">Components</span> — Functions that return UI</p>
            <p><span className="font-bold text-amber-600 dark:text-amber-400">JSX</span> — HTML-like syntax inside JavaScript</p>
            <p><span className="font-bold text-purple-600 dark:text-purple-400">Hooks</span> — Functions starting with &ldquo;use&rdquo;</p>
            <p><span className="font-bold text-emerald-600 dark:text-emerald-400">State</span> — Component-specific memory</p>
            <p><span className="font-bold text-indigo-600 dark:text-indigo-400">Props</span> — Data passed to children</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4 bg-card-bg/50 border-t border-border-main">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartLessons}
          className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium shadow-lg"
        >
          Start Lessons <FiArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
