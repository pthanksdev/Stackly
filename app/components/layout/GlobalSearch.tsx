// app/components/layout/GlobalSearch.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiBox, FiLayers, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { components } from '../../dashboard/components/data';
import { themes } from '../data/themes';
import { cssLessons } from '../data/css';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ id: string | number, name: string, type: 'component' | 'theme' | 'lesson', path: string }[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    const componentResults = components
      .filter(c => c.name.toLowerCase().includes(lowerQuery) || c.description.toLowerCase().includes(lowerQuery))
      .map(c => ({ id: c.id, name: c.name, type: 'component' as const, path: '/dashboard/components' }));

    const themeResults = themes
      .filter(t => t.name.toLowerCase().includes(lowerQuery) || t.description.toLowerCase().includes(lowerQuery))
      .map(t => ({ id: t.id, name: t.name, type: 'theme' as const, path: '/dashboard/themes' }));

    const lessonResults = cssLessons
      .filter(l => l.title.toLowerCase().includes(lowerQuery) || l.description.toLowerCase().includes(lowerQuery))
      .map(l => ({ id: l.id, name: l.title, type: 'lesson' as const, path: '/dashboard/css' }));

    setResults([...componentResults, ...themeResults, ...lessonResults].slice(0, 8));
  }, [query]);

  // Handle shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSelect = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-4 py-2.5 bg-black/5 dark:bg-white/5 border border-border-main rounded-2xl text-text-muted hover:text-text-main hover:border-text-muted transition-all w-full md:w-64 group"
      >
        <FiSearch size={18} className="group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">Search anything...</span>
        <kbd className="hidden sm:inline-flex items-center h-5 px-1.5 font-mono text-[10px] font-medium text-text-muted bg-white dark:bg-slate-900 border border-border-main rounded-md ml-auto">
          ⌘K
        </kbd>
      </button>

      {/* Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl bg-card-bg border border-border-main rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-border-main flex items-center gap-4">
                <FiSearch size={24} className="text-purple-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type to search components or themes..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-lg text-text-main placeholder-text-muted"
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all"
                >
                  <FiX size={20} className="text-text-muted" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                {query.trim() === '' ? (
                  <div className="py-12 text-center">
                    <p className="text-text-muted text-sm px-10">
                      Search for code snippets, UI components, or inspiration themes.
                    </p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((result, idx) => (
                      <button
                        key={`${result.type}-${result.id}-${idx}`}
                        onClick={() => handleSelect(result.path)}
                        className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-page-bg border border-transparent hover:border-border-main transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${
                            result.type === 'component' ? 'bg-blue-500/10 text-blue-400' : 
                            result.type === 'theme' ? 'bg-purple-500/10 text-purple-400' :
                            'bg-emerald-500/10 text-emerald-400'
                          }`}>
                            {result.type === 'component' ? <FiBox size={20} /> : 
                             result.type === 'theme' ? <FiLayers size={20} /> :
                             <FiBookOpen size={20} />}
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-text-main group-hover:text-purple-400 transition-colors uppercase tracking-tight">{result.name}</h4>
                            <p className="text-xs text-text-muted capitalize">{result.type} • {result.path.split('/').pop()}</p>
                          </div>
                        </div>
                        <FiArrowRight size={18} className="text-text-muted opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <h3 className="text-lg font-bold text-text-muted">No results found for "{query}"</h3>
                  </div>
                )}
              </div>

              <div className="p-4 bg-page-bg/50 border-t border-border-main flex items-center justify-between text-[10px] font-bold text-text-muted tracking-widest uppercase">
                <div className="flex gap-4">
                  <span>ESC to close</span>
                  <span>ENTER to select</span>
                </div>
                <span>{results.length} RESULTS</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
