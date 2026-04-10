"use client";

import { motion } from "framer-motion";
import { FiZap, FiTarget, FiMessageSquare, FiTrendingUp } from "react-icons/fi";

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

const techniques = [
  {
    icon: <FiZap className="text-blue-500" />,
    title: "Chain-of-Thought (CoT)",
    desc: "Force the AI to think step-by-step before providing a final answer.",
    usage: 'Add "Let\'s think step by step" or "Explain your reasoning at each stage" to your prompt.',
    benefit: "Critical for complex logic, math, or architectural decisions.",
  },
  {
    icon: <FiTarget className="text-red-500" />,
    title: "Few-Shot Prompting",
    desc: "Provide 2-3 examples of the desired input/output mapping.",
    usage: "Input: 'Hello' -> Output: 'Greeting'\nInput: 'How are you?' -> Output: 'Inquiry'\nInput: [New Input] -> Output:",
    benefit: "Perfect for ensuring strict adherence to style and format.",
  },
  {
    icon: <FiMessageSquare className="text-green-500" />,
    title: "Persona Adoption",
    desc: "Tell the AI exactly who they should be.",
    usage: '"Act as a Senior Research Engineer at a FAANG company with 15 years experience in..."',
    benefit: "Changes the tone and technical depth of the response significantly.",
  },
  {
    icon: <FiTrendingUp className="text-purple-500" />,
    title: "Iterative Refinement",
    desc: "Use the previous output as context for the next prompt.",
    usage: '"That was good, but now refactor it to use hooks instead of classes and add..."',
    benefit: "Allows you to build complex systems one layer at a time.",
  },
];

export default function AdvancedTechniques() {
  return (
    <section id="advanced" className="py-24 bg-gray-50 rounded-3xl border border-gray-200 px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-white rounded-full text-gray-700 shadow-sm border border-gray-100">
            Next Level
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4">
            Advanced
            <br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Techniques
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Once you master the formula, use these psychological anchors to get elite-level outputs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techniques.map((tech) => (
            <motion.div
              key={tech.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold">{tech.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 font-medium">
                {tech.desc}
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Usage</span>
                  <p className="text-sm font-mono text-gray-700 whitespace-pre-wrap">{tech.usage}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    <span className="font-bold text-gray-700 not-italic">Result:</span> {tech.benefit}
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
