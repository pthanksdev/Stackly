// app/dashboard/components/ComponentCard.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiCode, FiCheck, FiCopy } from 'react-icons/fi';
import { ComponentItem, Framework } from './types';

interface ComponentCardProps {
  component: ComponentItem;
  selectedFramework: Framework;
  copiedId: number | null;
  onCopy: (text: string, id: number) => void;
}

export const ComponentCard = ({ component, selectedFramework, copiedId, onCopy }: ComponentCardProps) => {
  const currentVersion = component.versions.find(v => v.framework === selectedFramework) || component.versions[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card-bg rounded-xl border border-border-main overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div 
        className="px-4 py-4 border-b border-border-main"
        style={{ backgroundColor: `${component.color}10` }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-text-main leading-none">{component.name}</h3>
            <p className="text-[11px] text-text-muted mt-2 leading-tight">{component.description}</p>
          </div>
          <span 
            className="text-[10px] font-bold uppercase tracking-tighter px-2.5 py-1 rounded-full border border-black/5"
            style={{ backgroundColor: component.color, color: '#0a0a0a' }}
          >
            {component.category}
          </span>
        </div>
      </div>

      {/* Preview */}
      <div className="p-4 bg-page-bg/30 border-b border-border-main min-h-[160px] flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <FiEye className="text-text-muted" size={14} />
          <span className="text-[10px] font-bold text-text-muted tracking-widest">VISUAL PREVIEW</span>
        </div>
        <div className="flex-1 bg-white dark:bg-white rounded-xl p-6 border border-border-main flex items-center justify-center shadow-inner transition-colors overflow-hidden">
          <div className="scale-90" dangerouslySetInnerHTML={{ __html: component.preview }} />
        </div>
      </div>

      {/* Code Section */}
      <div className="p-4 bg-sidebar-bg flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FiCode className="text-text-muted" size={14} />
            <span className="text-[10px] font-bold text-text-muted tracking-widest">
              {currentVersion.label.toUpperCase()} SOURCE
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCopy(currentVersion.code, component.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
            style={{
              backgroundColor: copiedId === component.id ? '#b7ffca' : 'rgba(255,255,255,0.05)',
              color: copiedId === component.id ? '#0a0a0a' : '#94a3b8',
              border: copiedId === component.id ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {copiedId === component.id ? (
              <><FiCheck size={14} /> COPIED</>
            ) : (
              <><FiCopy size={14} /> COPY</>
            )}
          </motion.button>
        </div>
        <div className="bg-black/40 rounded-xl p-4 font-mono text-[11px] overflow-hidden border border-white/5 relative group">
          <pre className="text-blue-200/90 whitespace-pre-wrap overflow-y-auto max-h-[200px] scrollbar-hide">
            <code>{currentVersion.code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};
