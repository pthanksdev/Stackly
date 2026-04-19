'use client';

import { motion } from 'framer-motion';
import { FiList, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { CSSLesson } from '../data/css';

interface CssSidebarProps {
  lessons: CSSLesson[];
  activeSection: number;
  onNavigate: (id: number) => void;
  onScrollToIntro: () => void;
  onScrollToStructure: () => void;
}

export default function CssSidebar({
  lessons,
  activeSection,
  onNavigate,
  onScrollToIntro,
  onScrollToStructure,
}: CssSidebarProps) {
  const isFirst = activeSection === 1;
  const isLast = activeSection === lessons.length;

  return (
    <div className="w-64 hidden lg:block">
      <div className="sticky top-24 space-y-4">
        {/* Progress bar */}
        <div className="bg-card-bg rounded-xl border border-border-main p-3 transition-colors duration-300">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-text-secondary">Progress</span>
            <span className="text-xs font-semibold text-text-main">
              {activeSection}/{lessons.length}
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1">
            <div
              className="h-1 rounded-full bg-gradient-to-r from-slate-500 to-slate-600"
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
              <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <FiList className="text-text-muted" size={16} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-main">CSS Course</h3>
                <p className="text-xs text-text-muted">{lessons.length} lessons</p>
              </div>
            </div>
          </div>

          <div className="p-2">
            {/* Getting Started */}
            <div className="mb-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                Getting Started
              </div>
              <div className="space-y-0.5">
                <button
                  onClick={onScrollToIntro}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-1 h-1 bg-slate-400 rounded-full" />
                  <span className="text-text-muted">What is CSS?</span>
                </button>
                <button
                  onClick={onScrollToStructure}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-1 h-1 bg-pink-400 rounded-full" />
                  <span className="text-text-muted">CSS Rule Structure</span>
                </button>
              </div>
            </div>

            {/* Lessons List */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                All Lessons ({lessons.length})
              </div>
              <div className="space-y-0.5 max-h-[400px] overflow-y-auto pr-1 scrollbar-hide">
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
                      <div className="text-[10px] text-text-muted font-mono truncate">
                        {lesson.preview.properties[0] || 'property: value;'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
