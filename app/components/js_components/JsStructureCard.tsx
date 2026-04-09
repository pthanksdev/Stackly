'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';

const jsSkeleton = `// JavaScript Basics
let message = "Hello World!";
console.log(message);

function greet(name) {
  return "Bonjour " + name + "!";
}

alert(greet("Marie"));`;

interface JsStructureCardProps {
  copiedId: number | null;
  onCopy: (text: string, id: number) => void;
  onStartLessons: () => void;
}

export default function JsStructureCard({
  copiedId,
  onCopy,
  onStartLessons,
}: JsStructureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="js-structure"
      className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-100 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-amber-100 rounded-lg">
              <FiTerminal className="text-amber-700" size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">📄 JavaScript Syntax</h3>
            <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-medium rounded-full">
              basics
            </span>
          </div>
          <div className="font-mono text-sm bg-white/80 backdrop-blur rounded-lg p-4 border border-amber-200">
            <div><span className="text-purple-600">// Variables</span></div>
            <div>
              <span className="text-blue-600">let</span> <span className="text-gray-900">name</span> ={' '}
              <span className="text-green-600">'Marie'</span>;
            </div>
            <div>
              <span className="text-blue-600">const</span> <span className="text-gray-900">PI</span> ={' '}
              <span className="text-amber-600">3.14</span>;
            </div>
            <div> </div>
            <div><span className="text-purple-600">// Function</span></div>
            <div>
              <span className="text-blue-600">function</span> <span className="text-amber-600">greet</span>
              (<span className="text-gray-900">name</span>) {'{'}
            </div>
            <div className="ml-4">
              <span className="text-blue-600">return</span> <span className="text-green-600">'Hello '</span> + name;
            </div>
            <div>{'}'}</div>
            <div> </div>
            <div><span className="text-purple-600">// DOM</span></div>
            <div>
              <span className="text-gray-900">document</span>.<span className="text-amber-600">getElementById</span>
              (<span className="text-green-600">'title'</span>).<span className="text-gray-900">innerHTML</span> ={' '}
              <span className="text-green-600">'New!'</span>;
            </div>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur rounded-lg p-4">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-900">Quick Reference</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCopy(jsSkeleton, 999)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-lg text-xs font-medium shadow-sm border border-gray-200"
            >
              {copiedId === 999 ? <FiCheck size={12} /> : <FiCopy size={12} />}
              {copiedId === 999 ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
          <div className="space-y-2 text-xs">
            <p><span className="font-bold text-blue-600">let / const</span> — Variables (reassignable / constant)</p>
            <p><span className="font-bold text-amber-600">function</span> — Reusable code blocks</p>
            <p><span className="font-bold text-purple-600">console.log()</span> — Debug output</p>
            <p><span className="font-bold text-emerald-600">alert() / prompt()</span> — User interaction</p>
            <p><span className="font-bold text-indigo-600">document</span> — DOM manipulation</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4 bg-white/50 border-t border-amber-100">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartLessons}
          className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium shadow-lg"
        >
          Start Lessons <FiArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
