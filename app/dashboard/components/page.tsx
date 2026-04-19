'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiCheck, FiEye, FiCode, 
  FiGrid, FiLayout, FiBox, FiSmartphone,
  FiMenu, FiX, FiHeart, FiStar,
  FiArrowRight, FiArrowLeft, FiMail,
  FiLock, FiUser, FiSearch, FiBell,
  FiShoppingCart, FiHome, FiInfo
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';

// ============================================
// COMPONENTS DATA
// ============================================
// ============================================
// COMPONENTS DATA
// ============================================
type Framework = 'html' | 'react' | 'nextjs' | 'typescript';

interface ComponentVersion {
  framework: Framework;
  label: string;
  code: string;
}

interface ComponentItem {
  id: number;
  name: string;
  category: 'buttons' | 'cards' | 'forms' | 'navbars' | 'footers' | 'sidebars' | 'headers' | 'modals' | 'alerts' | 'badges' | 'hooks' | 'next-api';
  description: string;
  versions: ComponentVersion[];
  preview: string;
  color: string;
}

const components: ComponentItem[] = [
  // ========== BUTTONS ==========
  {
    id: 1,
    name: "Primary Button",
    category: 'buttons',
    description: "Standard action button with various implementations",
    versions: [
      {
        framework: 'html',
        label: 'HTML/Tailwind',
        code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Click me
</button>`
      },
      {
        framework: 'react',
        label: 'React',
        code: `const Button = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
  >
    {children}
  </button>
);`
      },
      {
        framework: 'typescript',
        label: 'TypeScript',
        code: `interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
  >
    {children}
  </button>
);`
      }
    ],
    preview: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Click me
</button>`,
    color: '#c5e6ff'
  },
  
  // ========== CARDS ==========
  {
    id: 5,
    name: "Modern Card",
    category: 'cards',
    description: "Versatile card component with clean aesthetics",
    versions: [
      {
        framework: 'html',
        label: 'HTML/Tailwind',
        code: `<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
  <h3 class="text-lg font-bold">Standard Card</h3>
  <p class="text-gray-500 mt-2">Perfect for dashboard widgets.</p>
</div>`
      },
      {
        framework: 'typescript',
        label: 'TypeScript',
        code: `interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => (
  <div className={\`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 \${className}\`}>
    <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    <div className="mt-2 text-slate-600">{children}</div>
  </div>
);`
      }
    ],
    preview: `<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 class="font-bold text-gray-800">Preview Card</h3>
      <p class="text-xs text-gray-400 mt-1">Design token visualization</p>
    </div>`,
    color: '#d2b7ff'
  },

  // ========== HOOKS ==========
  {
    id: 101,
    name: "useLocalStorage",
    category: 'hooks',
    description: "Sync state with localStorage automatically",
    versions: [
      {
        framework: 'react',
        label: 'React JS',
        code: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`
      },
      {
        framework: 'typescript',
        label: 'TypeScript',
        code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`
      }
    ],
    preview: `<div class="text-xs font-mono bg-slate-100 p-2 rounded">
      Persistent State: 0ms
    </div>`,
    color: '#ffb7c5'
  },
  
  // ========== REACT SPECIFIC ==========
  {
    id: 100,
    name: "Counter Hook",
    category: 'hooks',
    description: "Type-safe custom hook for managing numeric state",
    versions: [
      {
        framework: 'react',
        label: 'React JS',
        code: `import { useState } from 'react';

export const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  return { count, increment, decrement };
};`
      },
      {
        framework: 'typescript',
        label: 'TypeScript',
        code: `import { useState } from 'react';

export const useCounter = (initial: number = 0) => {
  const [count, setCount] = useState<number>(initial);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return { count, increment, decrement };
};`
      }
    ],
    preview: `<div class="flex items-center gap-4">
      <button class="px-3 py-1 bg-gray-200 rounded text-black">-</button>
      <span class="font-bold">0</span>
      <button class="px-3 py-1 bg-gray-200 rounded text-black">+</button>
    </div>`,
    color: '#ffb7c5'
  },

  // ========== NEXT.JS SPECIFIC ==========
  {
    id: 200,
    name: "Next.js API Handle",
    category: 'next-api',
    description: "Standard Next.js Route Handler for JSON responses",
    versions: [
      {
        framework: 'nextjs',
        label: 'Next.js App Router',
        code: `import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from Stackly API',
    status: 200 
  });
}`
      },
      {
        framework: 'typescript',
        label: 'TypeScript',
        code: `import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const data = { 
    message: 'Hello from Stackly API',
    status: 200 
  };
  
  return NextResponse.json(data);
}`
      }
    ],
    preview: `<div class="p-3 bg-gray-900 rounded text-green-400 font-mono text-xs">
      { "message": "Hello from Stackly API" }
    </div>`,
    color: '#b7ffca'
  },
  
  // ... more components can be added here
];

// ============================================
// CATEGORIES
// ============================================
const categories = [
  { id: 'all', name: 'All', color: '#94a3b8' },
  { id: 'buttons', name: 'Buttons', color: '#c5e6ff' },
  { id: 'hooks', name: 'Hooks', color: '#ffb7c5' },
  { id: 'next-api', name: 'Next.js API', color: '#b7ffca' },
  { id: 'cards', name: 'Cards', color: '#d2b7ff' },
  { id: 'forms', name: 'Forms', color: '#ffb7c5' },
];

const frameworks: {id: Framework, name: string}[] = [
  { id: 'html', name: 'HTML/Tailwind' },
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'typescript', name: 'TypeScript' },
];

// ============================================
// MAIN PAGE
// ============================================
export default function ComponentsPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFramework, setSelectedFramework] = useState<Framework>('react');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredComponents = components.filter(comp => {
    const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const hasFramework = comp.versions.some(v => v.framework === selectedFramework);
    return matchesCategory && matchesSearch && hasFramework;
  });

  return (
    <DashboardLayout pageTitle="UI Components Library" showBackButton={true}>
      <div className="space-y-6">
        
        {/* HEADER */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 dark:from-black dark:to-slate-950 rounded-2xl p-6 text-white transition-all duration-500 shadow-xl border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <FiBox size={28} />
            </div>
            <h1 className="text-3xl font-bold">UI Components Library</h1>
          </div>
          <p className="text-white/80 max-w-2xl mb-4">
            Ready-to-use components. Click copy and paste directly into your project!
          </p>
          
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-border-main hover:border-text-muted`}
                style={{
                  backgroundColor: selectedCategory === cat.id ? cat.color : 'var(--color-card-bg)',
                  color: selectedCategory === cat.id ? '#0a0a0a' : 'var(--color-text-main)'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-page-bg/50 p-1 rounded-xl border border-border-main w-fit">
            {frameworks.map(fw => (
              <button
                key={fw.id}
                onClick={() => setSelectedFramework(fw.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedFramework === fw.id 
                    ? 'bg-text-main text-page-bg shadow-lg' 
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {fw.name}
              </button>
            ))}
          </div>
        </div>

        {/* COMPONENTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredComponents.map((component) => {
            const currentVersion = component.versions.find(v => v.framework === selectedFramework) || component.versions[0];
            
            return (
              <motion.div
                key={component.id}
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
                  <div className="flex-1 bg-white dark:bg-white rounded-xl p-6 border border-border-main flex items-center justify-center shadow-inner transition-colors">
                    <div className="scale-90" dangerouslySetInnerHTML={{ __html: component.preview }} />
                  </div>
                </div>

                {/* Code Section */}
                <div className="p-4 bg-sidebar-bg flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FiCode className="text-text-muted" size={14} />
                      <span className="text-[10px] font-bold text-text-muted tracking-widest">{currentVersion.label.toUpperCase()} SOURCE</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(currentVersion.code, component.id)}
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
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-20 bg-card-bg border border-border-main rounded-2xl transition-all shadow-inner">
            <div className="bg-border-main/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiBox className="text-text-muted" size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">No results matching filters</h3>
            <p className="text-sm text-text-muted max-w-xs mx-auto">Try selecting a different framework or category to see more components.</p>
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="text-center py-10 opacity-50">
          <div className="h-px bg-gradient-to-r from-transparent via-border-main to-transparent mb-6" />
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase">
            🚀 Built for {frameworks.map(f => f.name).join(' • ')}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}