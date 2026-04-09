'use client';

import { motion } from 'framer-motion';
import { FiCode, FiInfo, FiCopy, FiCheck, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { HTMLLesson } from '../data/html';

interface HtmlLessonCardProps {
  lesson: HTMLLesson;
  copiedId: number | null;
  totalLessons: number;
  onCopy: (text: string, id: number) => void;
  onNavigate: (id: number) => void;
}

export default function HtmlLessonCard({
  lesson,
  copiedId,
  totalLessons,
  onCopy,
  onNavigate,
}: HtmlLessonCardProps) {
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
        <p className="text-sm md:text-base text-gray-600 max-w-2xl">{lesson.description}</p>
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
          <h2 className="text-sm font-semibold text-gray-700">Practice &amp; Examples</h2>
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
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <FiArrowRight size={16} />
            </motion.button>
          )}
        </div>
      </div>

      {/* Code and Preview card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 mx-5">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-slate-100 rounded-lg">
                <FiCode className="text-slate-600" size={14} />
              </div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Code Example
              </h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-3 font-mono text-[10px] md:text-xs overflow-x-auto max-h-[200px] overflow-y-auto">
              <pre className="text-gray-100 whitespace-pre-wrap">
                <code>{lesson.example}</code>
              </pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <p className="text-[10px] text-blue-700 flex items-center gap-1">
                <FiInfo size={12} />
                Copy and paste inside &lt;body&gt;
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onCopy(lesson.example, lesson.id)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
              style={{ backgroundColor: lesson.color, color: '#0a0a0a' }}
            >
              {copiedId === lesson.id ? (
                <><FiCheck size={14} /> Copied!</>
              ) : (
                <><FiCopy size={14} /> Copy Code</>
              )}
            </motion.button>
          </div>

          {/* Preview column */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-slate-100 rounded-lg">
                <FiCode className="text-slate-600" size={14} />
              </div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Live Preview
              </h3>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden h-[200px]">
              <iframe
                title={`Preview ${lesson.id}`}
                className="w-full h-full"
                srcDoc={`<!DOCTYPE html><html><head><style>body { font-family: system-ui, sans-serif; padding: 1rem; }</style></head><body>${lesson.example}</body></html>`}
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
