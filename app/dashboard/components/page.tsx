'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiSearch } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { ComponentCard } from './ComponentCard';
import { components, categories } from './data';
import { Framework, ComponentItem, ComponentVersion } from './types';

const frameworks: {id: Framework, name: string}[] = [
  { id: 'html', name: 'HTML/Tailwind' },
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'typescript', name: 'TypeScript' },
];

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

  const filteredComponents = components.filter((comp: ComponentItem) => {
    const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const hasFramework = comp.versions.some((v: ComponentVersion) => v.framework === selectedFramework);
    return matchesCategory && matchesSearch && hasFramework;
  });

  return (
    <DashboardLayout pageTitle="UI Components Library" showBackButton={true}>
      <div className="space-y-8">
        
        {/* HEADER */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-black rounded-3xl p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <FiBox size={32} className="text-purple-300" />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight">Component Lab</h1>
                <p className="text-slate-400 font-medium">Professional UI tokens for modern developers</p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative max-w-xl">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search by name, category, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 backdrop-blur-sm transition-all"
              />
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col gap-6 sticky top-20 z-30 bg-page-bg/80 backdrop-blur-md py-4 -mx-2 px-2 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat.id 
                    ? 'border-transparent shadow-lg' 
                    : 'border-border-main hover:border-slate-500 bg-card-bg'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat.id ? cat.color : undefined,
                  color: selectedCategory === cat.id ? '#0a0a0a' : 'var(--color-text-main)'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-2xl border border-white/5 w-fit shadow-inner">
            {frameworks.map(fw => (
              <button
                key={fw.id}
                onClick={() => setSelectedFramework(fw.id)}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-[0.1em] transition-all duration-500 ${
                  selectedFramework === fw.id 
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {fw.name}
              </button>
            ))}
          </div>
        </div>

        {/* COMPONENTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredComponents.map((component) => (
            <ComponentCard 
              key={component.id}
              component={component}
              selectedFramework={selectedFramework}
              copiedId={copiedId}
              onCopy={copyToClipboard}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-32 bg-card-bg/50 border border-dashed border-border-main rounded-[2rem] transition-all">
            <div className="bg-slate-800/50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <FiBox className="text-slate-500" size={40} />
            </div>
            <h3 className="text-2xl font-black text-text-main mb-2">Zero matches found</h3>
            <p className="text-slate-500 max-w-xs mx-auto font-medium">Try broadening your search or switching frameworks.</p>
          </div>
        )}

        {/* FOOTER */}
        <div className="text-center pt-20 pb-10 opacity-30">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent mb-8" />
          <p className="text-[10px] font-black tracking-[0.3em] uppercase">
            ⚡ Engineered for Performance • {frameworks.length} Frameworks Supported
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}