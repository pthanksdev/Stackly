"use client";

import { motion } from "framer-motion";
import { FiZap, FiTarget, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import { advancedTechniques } from "./prompts_data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function AdvancedTechniques() {
  return (
    <section id="advanced" className="py-24 bg-page-bg rounded-3xl border border-border-main px-8 transition-colors">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-card-bg rounded-full text-text-muted shadow-sm border border-border-main transition-colors">
            Next Level
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4">
            Advanced
            <br />
            <span className="bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent transition-colors">
              Techniques
            </span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto transition-colors">
            Once you master the formula, use these psychological anchors to get elite-level outputs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advancedTechniques.map((tech) => (
            <motion.div
              key={tech.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-card-bg p-8 rounded-2xl border border-border-main shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-page-bg flex items-center justify-center text-2xl transition-colors border border-border-main">
                  {tech.icon}
                </div>
              <h3 className="text-2xl font-bold text-text-main transition-colors">{tech.title}</h3>
              </div>
              
              <p className="text-text-muted mb-6 font-medium transition-colors">
                {tech.desc}
              </p>
              
              <div className="space-y-4">
                <div className="bg-page-bg p-4 rounded-lg border border-border-main transition-colors">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest block mb-2 opacity-50">Usage</span>
                  <p className="text-sm font-mono text-text-main whitespace-pre-wrap transition-colors">{tech.usage}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-text-main flex items-center justify-center mt-1 flex-shrink-0 transition-colors">
                    <span className="text-page-bg text-[10px] font-bold">✓</span>
                  </div>
                  <p className="text-sm text-text-muted italic transition-colors">
                    <span className="font-bold text-text-main not-italic transition-colors">Result:</span> {tech.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
