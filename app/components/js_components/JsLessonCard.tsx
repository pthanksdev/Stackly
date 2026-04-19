'use client';

import { motion } from 'framer-motion';
import { FiCode, FiInfo, FiCopy, FiCheck, FiArrowLeft, FiArrowRight, FiTerminal } from 'react-icons/fi';
import { JavaScriptConcept } from '../data/js';

interface JsLessonCardProps {
  lesson: JavaScriptConcept;
  copiedId: number | null;
  totalLessons: number;
  onCopy: (text: string, id: number) => void;
  onNavigate: (id: number) => void;
}

export default function JsLessonCard({
  lesson,
  copiedId,
  totalLessons,
  onCopy,
  onNavigate,
}: JsLessonCardProps) {
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
          <span className="text-xs text-slate-500 capitalize">{lesson.category}</span>
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
          <h2 className="text-sm font-semibold text-text-secondary">Practice &amp; Examples</h2>
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
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <FiCode className="text-slate-600 dark:text-slate-400" size={14} />
              </div>
              <h3 className="text-xs font-semibold text-text-main uppercase tracking-wider">
                {lesson.preview.type === 'html' ? 'HTML + JS' : 'JavaScript'}
              </h3>
              {lesson.preview.props?.interactive && (
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-medium">
                  interactive
                </span>
              )}
            </div>

            <div className="bg-gray-900 rounded-lg p-4 font-mono text-[10px] md:text-xs overflow-x-auto max-h-[250px] overflow-y-auto scrollbar-hide">
              <pre className="text-gray-100 whitespace-pre-wrap">
                <code>{lesson.example}</code>
              </pre>
            </div>

            {/* Output Preview Section */}
            <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 scrollbar-hide">
              <div className="flex items-center gap-1.5 mb-2">
                <FiTerminal size={14} className="text-slate-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Result Preview</span>
              </div>
              <ul className="space-y-1.5">
                {lesson.preview.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px] text-text-muted">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="text-[10px] text-blue-700 flex items-center gap-1">
                <FiInfo size={12} />
                Copy and paste inside &lt;script&gt; tag
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onCopy(lesson.example, lesson.id)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-all"
              style={{ backgroundColor: lesson.color, color: '#0a0a0a' }}
            >
              {copiedId === lesson.id ? (
                <><FiCheck size={14} /> Copied!</>
              ) : (
                <><FiCopy size={14} /> Copy Code</>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
