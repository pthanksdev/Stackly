'use client';

import { motion } from 'framer-motion';
import { FiCode, FiInfo, FiCopy, FiCheck, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ReactLesson } from '../data/react';

interface ReactLessonCardProps {
  lesson: ReactLesson;
  copiedId: number | null;
  totalLessons: number;
  onCopy: (text: string, id: number) => void;
  onNavigate: (id: number) => void;
}

export default function ReactLessonCard({
  lesson,
  copiedId,
  totalLessons,
  onCopy,
  onNavigate,
}: ReactLessonCardProps) {
  return (
    <section className="scroll-mt-24">
      {/* Lesson header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-mono px-2 py-1 rounded-lg"
            style={{ backgroundColor: `${lesson.color}20`, color: '#0969da' }}
          >
            Lesson {lesson.id}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500 capitalize">{lesson.category}</span>
          <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">
            {lesson.level}
          </span>
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-text-main"
        >
          {lesson.title}
        </h1>
        <p className="text-sm md:text-base text-text-muted max-w-2xl">{lesson.description}</p>
      </div>

      {/* Practice header row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: `${lesson.color}30`, color: '#0969da' }}
          >
            {lesson.id}
          </span>
          <h2 className="text-sm font-semibold text-text-secondary">Example Code</h2>
        </div>
        <div className="flex items-center gap-1">
          {lesson.id > 1 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate(lesson.id - 1)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <FiArrowLeft size={16} />
            </motion.button>
          )}
          {lesson.id < totalLessons && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate(lesson.id + 1)}
              className="p-1.5 rounded-lg bg-card-bg border border-border-main hover:bg-slate-200 dark:hover:bg-slate-800 text-text-main"
            >
              <FiArrowRight size={16} />
            </motion.button>
          )}
        </div>
      </div>

      {/* Code card */}
      <div className="bg-card-bg rounded-xl border border-border-main overflow-hidden shadow-md transition-colors duration-300">
        <div className="grid grid-cols-1 gap-4 p-5 mx-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <FiCode className="text-slate-600 dark:text-slate-400" size={14} />
                </div>
                <h3 className="text-xs font-semibold text-text-main uppercase tracking-wider">
                  JSX / React Component
                </h3>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-slate-100 text-slate-600">
                {lesson.tag}
              </span>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 font-mono text-[10px] md:text-xs overflow-x-auto max-h-[300px] overflow-y-auto scrollbar-hide">
              <pre className="text-gray-100 whitespace-pre-wrap">
                <code>{lesson.example}</code>
              </pre>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1 items-center">
                <span className="text-[10px] font-mono text-text-muted">Concepts:</span>
                {lesson.preview.content?.map((contentStr, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 bg-card-bg border border-border-main rounded-full text-text-secondary font-mono transition-colors"
                  >
                    {contentStr}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onCopy(lesson.example, lesson.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{ backgroundColor: lesson.color, color: '#0a0a0a' }}
              >
                {copiedId === lesson.id ? (
                  <><FiCheck size={14} /> Copied!</>
                ) : (
                  <><FiCopy size={14} /> Copy React Code</>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
