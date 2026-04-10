"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiCheck, FiInfo } from "react-icons/fi";
import { practiceExercises } from "./prompts_data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


export default function PracticeSection() {
  const [showAnswerIdx, setShowAnswerIdx] = useState<number | null>(null);

  return (
    <section id="practice">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        style={{ backgroundColor: "var(--color-card-bg)" }}
        className="rounded-3xl overflow-hidden shadow-2xl border border-border-main transition-colors"
      >
        <div className="p-10 md:p-16 text-white">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-page-bg rounded-full text-text-muted border border-border-main transition-colors">
              Apply Your Knowledge
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6 text-text-main">
              Practice
              <br />
              <span className="text-text-muted">Exercises</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto transition-colors">
              Rewrite these vague prompts using everything you've learned.
            </p>
          </div>

          <div className="grid gap-12 max-w-4xl mx-auto">
            {practiceExercises.map((ex, idx) => (
              <div key={ex.id} className="bg-page-bg p-8 rounded-xl border border-border-main transition-colors">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-card-bg text-text-main flex items-center justify-center mr-4 border border-border-main transition-colors">
                    <span className="text-2xl font-black">{ex.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-main transition-colors">{ex.title}</h3>
                    <p className="text-text-muted transition-colors">
                      Challenge: Optimize this prompt
                    </p>
                  </div>
                </div>

                <div className="bg-card-bg p-8 rounded-lg mb-8 border border-border-main transition-colors">
                  <p className="text-2xl md:text-3xl font-medium text-center text-text-main">
                    {ex.vague}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowAnswerIdx(showAnswerIdx === idx ? null : idx)}
                  className="w-full bg-text-main text-page-bg hover:opacity-90 font-bold py-5 px-6 rounded-xl text-lg flex items-center justify-center gap-3 transition-all shadow-xl cursor-pointer"
                >
                  <FiEye size={20} />
                  {showAnswerIdx === idx
                    ? "Hide Optimized Version"
                    : "Reveal Optimized Version"}
                </motion.button>

                <AnimatePresence>
                  {showAnswerIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-card-bg text-text-main p-8 rounded-xl shadow-2xl mt-8 border border-border-main transition-colors">
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-text-main flex items-center justify-center mr-4 transition-colors">
                            <FiCheck className="text-page-bg" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">
                              Optimized Prompt
                            </h3>
                            <p className="text-gray-600">
                              See how specificity transforms the request
                            </p>
                          </div>
                        </div>

                        <div className="bg-page-bg p-6 rounded-lg border-2 border-border-main font-mono text-sm mb-6 whitespace-pre-wrap text-text-main transition-colors">
                          {ex.optimized}
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-start gap-3">
                            <FiInfo className="text-gray-500 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">
                              {ex.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
