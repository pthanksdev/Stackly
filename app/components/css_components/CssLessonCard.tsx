'use client';

import { motion } from 'framer-motion';
import { FiCode, FiCopy, FiCheck, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { CSSLesson } from '../data/css';
import { getCategoryIcon } from './utils';

interface CssLessonCardProps {
  lesson: CSSLesson;
  copiedId: number | null;
  totalLessons: number;
  onCopy: (text: string, id: number) => void;
  onNavigate: (id: number) => void;
}

export default function CssLessonCard({
  lesson,
  copiedId,
  totalLessons,
  onCopy,
  onNavigate,
}: CssLessonCardProps) {
  return (
    <section className="scroll-mt-24">
      {/* Lesson header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-mono px-2 py-1 rounded-lg"
            style={{ backgroundColor: `${lesson.color}15`, color: lesson.color }}
          >
            Lesson {lesson.id}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500 capitalize flex items-center gap-1">
            {getCategoryIcon(lesson.category)}
            {lesson.category}
          </span>
          <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">
            {lesson.level}
          </span>
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ color: lesson.color }}
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
            style={{ backgroundColor: `${lesson.color}20`, color: lesson.color }}
          >
            {lesson.id}
          </span>
          <h2 className="text-sm font-semibold text-text-secondary">CSS Code Example</h2>
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

      {/* Code and Preview card */}
      <div className="bg-card-bg rounded-xl border border-border-main overflow-hidden shadow-md transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 mx-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <FiCode className="text-slate-600 dark:text-slate-400" size={14} />
                </div>
                <h3 className="text-xs font-semibold text-text-main uppercase tracking-wider">
                  CSS Code
                </h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-text-muted rounded-full font-mono">
                {lesson.category}
              </span>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs md:text-sm overflow-x-auto max-h-[300px] overflow-y-auto scrollbar-hide">
              <pre className="text-gray-100 whitespace-pre-wrap">
                <code>{lesson.example}</code>
              </pre>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1 items-center">
                <span className="text-[10px] font-mono text-text-muted">Properties:</span>
                {lesson.preview.properties.map((prop, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 bg-card-bg border border-border-main rounded-full text-text-secondary font-mono"
                  >
                    {prop}
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
                  <><FiCopy size={14} /> Copy CSS</>
                )}
              </motion.button>
            </div>
          </div>

          {/* Preview column */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <FiCode className="text-slate-600 dark:text-slate-400" size={14} />
              </div>
              <h3 className="text-xs font-semibold text-text-main uppercase tracking-wider">
                Live Preview
              </h3>
            </div>

            <div className="bg-white border text-black border-border-main rounded-lg overflow-hidden h-full min-h-[250px]">
              <iframe
                title={`Preview ${lesson.id}`}
                className="w-full h-full"
                srcDoc={`<!DOCTYPE html><html><head></head><body style="margin: 0; padding: 1rem; font-family: system-ui, sans-serif; display: flex; align-items: flex-start; justify-content: flex-start; gap: 1rem; flex-wrap: wrap; background-color: white; color: black;">${lesson.example.includes('<style>') ? lesson.example : `<style>${lesson.example}</style>`}</body></html>`}
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
