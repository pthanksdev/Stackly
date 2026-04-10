"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

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

const formulaItems = [
  {
    number: "1",
    title: "CONTEXT",
    desc: "Set the stage. Define the environment, tools, and goals.",
    detail: "Project type, audience, tech stack",
  },
  {
    number: "2",
    title: "SPECIFICITY",
    desc: "Be surgical. Detailed requirements prevent vague outputs.",
    detail: "Exact features, components, behavior",
  },
  {
    number: "3",
    title: "CONSTRAINTS",
    desc: "Define limits. Tell the AI what NOT to do.",
    detail: "Avoid patterns, restrictions, boundaries",
  },
  {
    number: "4",
    title: "FORMAT",
    desc: "Structure output. Define how the response should be organized.",
    detail: "Code style, file structure, documentation",
  },
];

export default function FormulaSection() {
  return (
    <section id="formula">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            variants={fadeInUp}
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-card-bg rounded-full text-text-muted border border-border-main transition-colors"
          >
            The Core Principle
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mt-6 mb-6"
          >
            <span className="bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent transition-colors">
              The Ultimate
              <br />
              Prompt Formula
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-text-muted transition-colors">
            A systematic approach that works for ChatGPT, Claude, Gemini,
            and all major AI models.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6"
        >
          {formulaItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)",
              }}
              className="bg-card-bg p-8 rounded-xl border border-border-main hover:border-text-main transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-page-bg flex items-center justify-center mb-6 border border-border-main transition-colors">
                <span className="text-2xl font-black">{item.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
              <div className="text-xs text-gray-500 flex items-start gap-2">
                <FiCheckCircle
                  className="mt-0.5 flex-shrink-0"
                  size={12}
                />
                <span>{item.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-gray-50 p-10 rounded-2xl border border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">=</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">
                The Complete Equation
              </h3>
              <div className="bg-white p-6 rounded-xl mb-4 border border-gray-200 shadow-sm">
                <code className="text-2xl md:text-3xl font-black font-mono tracking-tight block mb-4">
                  CONTEXT + SPECIFICITY + CONSTRAINTS + FORMAT
                </code>
                <div className="pt-4 border-t border-gray-200">
                  <code className="text-3xl md:text-4xl font-black font-mono bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    = PERFECT RESULT
                  </code>
                </div>
              </div>
              <p className="text-gray-700 text-lg">
                This formula transforms ambiguous requests into precise,
                actionable instructions that AI can execute perfectly.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
