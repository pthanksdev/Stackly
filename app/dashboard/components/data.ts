// app/dashboard/components/data.ts
import { ComponentItem } from './types';

export const categories = [
  { id: 'all', name: 'All', color: '#94a3b8' },
  { id: 'buttons', name: 'Buttons', color: '#c5e6ff' },
  { id: 'hooks', name: 'Hooks', color: '#ffb7c5' },
  { id: 'next-api', name: 'Next.js API', color: '#b7ffca' },
  { id: 'cards', name: 'Cards', color: '#d2b7ff' },
  { id: 'forms', name: 'Forms', color: '#ffecb7' },
  { id: 'layouts', name: 'Layouts', color: '#c5e6ff' },
  { id: 'feedback', name: 'Feedback', color: '#ffb7c5' },
];

export const components: ComponentItem[] = [
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
        code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm">
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
    preview: `<button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-md">Action</button>`,
    color: '#c5e6ff'
  },
  {
    id: 10,
    name: "Glass Button",
    category: 'buttons',
    description: "Layered semi-transparent button style",
    versions: [
      {
        framework: 'html',
        label: 'HTML/Tailwind',
        code: `<button class="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl font-bold text-white hover:bg-white/20 transition-all shadow-xl">
  Glass Action
</button>`
      },
      {
        framework: 'react',
        label: 'React (Framer)',
        code: `import { motion } from 'framer-motion';

const GlassButton = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
    className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl font-bold text-white"
  >
    {children}
  </motion.button>
);`
      }
    ],
    preview: `<button class="bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 px-4 py-2 rounded-xl text-indigo-500 font-bold text-[10px] uppercase tracking-wider">Glass UI</button>`,
    color: '#d2b7ff'
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
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
    <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    <div className="mt-2 text-slate-600">{children}</div>
  </div>
);`
      }
    ],
    preview: `<div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <div class="h-2 w-16 bg-gray-300 rounded mb-2" />
      <div class="h-10 w-full bg-white rounded-lg shadow-sm" />
    </div>`,
    color: '#d2b7ff'
  },

  // ========== LAYOUTS ==========
  {
    id: 300,
    name: "Dashboard Stat Card",
    category: 'layouts',
    description: "Compact visualization for key metrics",
    versions: [
      {
        framework: 'html',
        label: 'HTML/Tailwind',
        code: `<div class="bg-card-bg p-6 rounded-3xl border border-border-main shadow-lg">
  <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Sales</p>
  <div class="flex items-center justify-between mt-2">
    <h2 class="text-3xl font-black text-white">$24,500</h2>
    <span class="text-emerald-500 font-bold text-sm">+12%</span>
  </div>
</div>`
      },
      {
        framework: 'react',
        label: 'React',
        code: `const StatCard = ({ label, value, trend }) => (
  <div className="bg-card-bg p-6 rounded-3xl border border-border-main shadow-lg">
    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</p>
    <div className="flex items-center justify-between mt-2">
      <h2 className="text-3xl font-black text-white">{value}</h2>
      <span className={trend > 0 ? "text-emerald-500" : "text-rose-500"}>
        {trend > 0 ? '↑' : '↓'} {trend}%
      </span>
    </div>
  </div>
);`
      }
    ],
    preview: `<div class="bg-slate-900 rounded-2xl p-4 border border-white/5 shadow-xl w-full">
      <div class="h-1.5 w-10 bg-slate-700 rounded mb-2" />
      <div class="flex justify-between items-end">
        <div class="h-6 w-20 bg-white rounded-md" />
        <div class="h-4 w-6 bg-emerald-500/20 rounded-md" />
      </div>
    </div>`,
    color: '#c5e6ff'
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
        code: `function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  // ... rest of hook
  return [value, setValue];
}`
      }
    ],
    preview: `<div class="px-3 py-2 bg-slate-100 rounded-lg text-blue-600 font-mono text-[10px] border border-blue-200">
      localStorage.get('key')
    </div>`,
    color: '#ffb7c5'
  },

  // ========== FEEDBACK ==========
  {
    id: 400,
    name: "Animated Modal",
    category: 'feedback',
    description: "Premium overlay with spring animations",
    versions: [
      {
        framework: 'react',
        label: 'React (Framer)',
        code: `import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
      >
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-8 rounded-3xl shadow-2xl">
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);`
      }
    ],
    preview: `<div class="w-full h-20 bg-slate-200/50 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
      <div class="bg-white px-4 py-2 rounded-lg shadow-lg text-[10px] font-bold">Modal Content</div>
    </div>`,
    color: '#ffb7c5'
  },

  // ========== NEXT.JS SPECIFIC ==========
  {
    id: 200,
    name: "Route Handler",
    category: 'next-api',
    description: "Standard Next.js App Router API pattern",
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
  return NextResponse.json({ status: "success" });
}`
      }
    ],
    preview: `<div class="p-3 bg-slate-900 rounded-xl text-emerald-400 font-mono text-[10px] border border-white/5">
      { "status": 200, "ok": true }
    </div>`,
    color: '#b7ffca'
  },
];
