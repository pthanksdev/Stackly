'use client';

import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiCode } from 'react-icons/fi';
import { useState } from 'react';
import { ReactLesson } from '../data/react'; 
import { useProgress } from '../../hooks/useProgress';

interface ReactCardProps {
  item: ReactLesson;
  index: number;
}

export default function ReactCard({ item, index }: ReactCardProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { isCompleted, toggleComplete, isReady } = useProgress('react');
  
  const copyToClipboard = (text: string, id: number) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'basics': return '#c5e6ff';
      case 'hooks': return '#ffb7c5';
      case 'state': return '#d2b7ff';
      case 'routing': return '#b7ffca';
      case 'advanced': return '#475569';
      default: return '#94a3b8';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <FiCode className="text-gray-400" />
              <span className="text-sm font-mono text-blue-500 bg-blue-50 px-2 py-0.5 rounded">{item.tag}</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">{item.title}</h3>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            {item.category && (
              <span 
                className="px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ml-2"
                style={{ 
                  backgroundColor: `${getCategoryColor(item.category)}20`,
                  color: getCategoryColor(item.category)
                }}
              >
                {item.category}
              </span>
            )}

            {isReady && (
              <button 
                onClick={() => toggleComplete(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors border ${
                  isCompleted(item.id) 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-200'
                }`}
              >
                {isCompleted(item.id) ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </>
                ) : (
                  <>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300" />
                    <span>Mark Complete</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2" title={item.description}>
          {item.description}
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mt-auto relative group overflow-hidden">
          <pre className="text-xs text-gray-300 font-mono overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700">
            <code>{item.example}</code>
          </pre>
          
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => copyToClipboard(item.example, item.id)}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              title="Copy Code"
            >
              {copiedId === item.id ? <FiCheck className="text-green-400" /> : <FiCopy />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
