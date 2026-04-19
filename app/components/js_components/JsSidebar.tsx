'use client';

import { motion } from 'framer-motion';
import { FiList, FiBookmark, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { JavaScriptConcept } from '../data/js';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface JsSidebarProps {
  lessons: JavaScriptConcept[];
  categories: Category[];
  activeSection: number;
  onNavigate: (id: number) => void;
  onScrollToIntro: () => void;
  onScrollToStructure: () => void;
}

export default function JsSidebar({
  lessons,
  categories,
  activeSection,
  onNavigate,
  onScrollToIntro,
  onScrollToStructure,
}: JsSidebarProps) {
  const isFirst = activeSection === 1;
  const isLast = activeSection === lessons.length;

  return (
    <div className="w-64 hidden lg:block">
      <div className="sticky top-24 space-y-4">
        {/* Progress bar */}
        <div className="bg-card-bg rounded-xl border border-border-main p-3 transition-colors duration-300">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-text-secondary">Progress</span>
            <span className="text-xs font-semibold text-amber-600">
              {activeSection}/{lessons.length}
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1">
            <div
              className="h-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600"
              style={{ width: `${(activeSection / lessons.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Prev/Next buttons */}
        <div className="flex gap-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate(activeSection - 1)}
            disabled={isFirst}
            className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300 ${
              isFirst
                ? 'bg-page-bg text-text-muted cursor-not-allowed border border-border-main'
                : 'bg-card-bg border border-border-main hover:border-text-muted text-text-main'
            }`}
          >
            <FiArrowLeft size={14} /> Prev
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate(activeSection + 1)}
            disabled={isLast}
            className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300 ${
              isLast
                ? 'bg-page-bg text-text-muted cursor-not-allowed border border-border-main'
                : 'bg-card-bg border border-border-main hover:border-text-muted text-text-main'
            }`}
          >
            Next <FiArrowRight size={14} />
          </motion.button>
        </div>

        {/* Course Outline */}
        <div className="bg-card-bg rounded-xl border border-border-main overflow-hidden shadow-sm transition-colors duration-300">
          <div className="p-3 border-b border-border-main bg-gradient-to-r from-page-bg to-card-bg">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <FiList className="text-amber-700 dark:text-amber-400" size={16} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-main">Course Outline</h3>
                <p className="text-xs text-text-muted">{lessons.length} concepts</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="mb-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                Getting Started
              </div>
              <div className="space-y-0.5">
                <button
                  onClick={onScrollToIntro}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-1 h-1 bg-amber-400 rounded-full" />
                  <span className="text-text-muted">What is JavaScript?</span>
                </button>
                <button
                  onClick={onScrollToStructure}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-1 h-1 bg-amber-500 rounded-full" />
                  <span className="text-text-muted">JS Syntax</span>
                </button>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                JavaScript Concepts ({lessons.length})
              </div>
              <div className="space-y-0.5 max-h-[400px] overflow-y-auto scrollbar-hide">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onNavigate(lesson.id)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-colors ${
                      activeSection === lesson.id ? 'bg-slate-100 dark:bg-slate-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                    style={{
                      borderLeft:
                        activeSection === lesson.id
                          ? `2px solid ${lesson.color}`
                          : '2px solid transparent',
                    }}
                  >
                    <span
                      className="w-4 h-4 rounded flex items-center justify-center text-[10px] font-mono transition-colors"
                      style={{
                        backgroundColor:
                          activeSection === lesson.id ? `${lesson.color}20` : 'var(--color-border-main)',
                        color: lesson.color,
                      }}
                    >
                      {lesson.id}
                    </span>
                    <div className="flex-1 text-left">
                      <div
                        className={`font-medium truncate transition-colors ${
                          activeSection === lesson.id ? 'text-text-main' : 'text-text-secondary'
                        }`}
                      >
                        {lesson.title}
                      </div>
                      <div className="text-[10px] text-text-muted font-mono">
                        {lesson.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER QUICK REF */}
        <div className="bg-card-bg rounded-xl border border-border-main p-3 transition-colors duration-300">
          <h3 className="text-xs font-semibold text-text-main mb-2 flex items-center gap-1.5">
            <FiBookmark size={12} />
            Categories
          </h3>
          <div className="flex flex-wrap gap-1">
            {categories.slice(0, 5).map((cat) => (
              <span
                key={cat.id}
                className="px-2 py-1 rounded-full text-[10px] font-medium"
                style={{
                  backgroundColor: `${cat.color}15`,
                  color: cat.color,
                }}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
