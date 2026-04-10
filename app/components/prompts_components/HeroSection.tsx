"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiCode, FiArrowDown } from "react-icons/fi";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="py-20 px-4 border-b border-gray-200 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                Master the Art of
              </span>
              <h1 className="text-5xl md:text-6xl font-black mt-6 mb-6 leading-tight">
                AI Prompt
                <br />
                <span className="typewriter inline-block min-w-[280px]">
                  Engineering
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Learn the exact formulas to get perfect results from AI
              assistants.
              <span className="font-semibold text-black">
                {" "}
                Black and white methodology
              </span>{" "}
              for colorful results.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("formula")}
                className="bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 border border-black shadow-md flex items-center gap-3"
              >
                <span>Start Learning</span>
                <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("templates")}
                className="bg-white text-black font-semibold py-4 px-8 rounded-lg border-2 border-black hover:bg-gray-50 flex items-center gap-3"
              >
                <span>View Templates</span>
                <FiFileText />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-gray-300 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gray-300 rounded-lg -z-10"></div>
              <div className="relative bg-white p-10 rounded-xl border-2 border-gray-200 shadow-xl max-w-md">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCode className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Before & After
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-sm font-medium text-gray-500">
                        Weak Prompt
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 font-mono text-sm">
                        "Write some code"
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -z-10"></div>
                    <div className="text-center my-4">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-black text-white rounded-full shadow-md">
                        <FiArrowDown />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                      <p className="text-sm font-medium text-gray-900">
                        Strong Prompt
                      </p>
                    </div>
                    <div
                      className="text-white p-4 rounded-lg"
                      style={{ backgroundColor: "#475569" }}
                    >
                      <p className="font-medium text-sm">
                        "Create a React component with TypeScript, Tailwind,
                        accessibility, error handling, proper prop types,
                        and comprehensive documentation..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
