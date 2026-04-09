'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  FiSearch, 
  FiCode, 
  FiSmartphone, 
  FiImage, 
  FiGrid, 
  FiFeather, 
  FiBox,
  FiWind,
  FiZap,
  FiPlay
} from 'react-icons/fi';

const searchItems = [
  { name: 'React.js Course', path: '/dashboard/react', icon: FiCode, type: 'Course', color: '#c5e6ff' },
  { name: 'HTML Course', path: '/dashboard/html', icon: FiCode, type: 'Course', color: '#475569' },
  { name: 'CSS Course', path: '/dashboard/css', icon: FiImage, type: 'Course', color: '#d2b7ff' },
  { name: 'JavaScript Course', path: '/dashboard/javascript', icon: FiZap, type: 'Course', color: '#ffb7c5' },
  { name: 'Tailwind CSS Course', path: '/dashboard/tailwindcss', icon: FiWind, type: 'Course', color: '#b7ffca' },
  { name: 'Code Playground', path: '/dashboard/playground', icon: FiPlay, type: 'Tool', color: '#475569' },
  { name: 'UI Components', path: '/dashboard/components', icon: FiBox, type: 'Library', color: '#c5e6ff' },
  { name: 'CSS Themes', path: '/dashboard/themes', icon: FiImage, type: 'Gallery', color: '#d2b7ff' },
  { name: 'Button Gallery', path: '/dashboard/buttons', icon: FiSmartphone, type: 'Gallery', color: '#ffb7c5' },
  { name: 'Icons Gallery', path: '/dashboard/icons', icon: FiFeather, type: 'Gallery', color: '#b7ffca' },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [isOpen]);

  const filteredItems = searchItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-gray-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center px-4 py-4 border-b border-gray-100">
                <FiSearch className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search courses, components, and tools..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-lg"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex items-center gap-1 text-xs text-gray-400 font-medium bg-gray-100 px-2 py-1 rounded">
                  <span>ESC</span>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200">
                {filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.path}
                          onClick={() => handleSelect(item.path)}
                          className="w-full flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group text-left"
                        >
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
                            style={{ backgroundColor: `${item.color}20`, color: item.color }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">{item.type}</p>
                          </div>
                          <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            Jump to
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No results found for "{query}"</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 border-t border-gray-100 px-4 py-3 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 rounded shadow-sm text-gray-400 text-[10px]">↑</kbd>
                    <kbd className="bg-white border border-gray-200 px-1.5 rounded shadow-sm text-gray-400 text-[10px]">↓</kbd>
                    <span className="ml-1">to navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm text-gray-400 text-[10px] font-sans">↵</kbd>
                    <span className="ml-1">to select</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
