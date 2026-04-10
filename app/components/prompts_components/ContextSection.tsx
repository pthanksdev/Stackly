"use client";

import { motion } from "framer-motion";
import { FiCheck, FiXCircle, FiArrowDown, FiCopy } from "react-icons/fi";

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

const copyButtonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

interface ContextSectionProps {
  copiedId: string | null;
  copyToClipboard: (text: string, id: string) => void;
}

export default function ContextSection({ copiedId, copyToClipboard }: ContextSectionProps) {
  return (
    <section id="context">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row gap-12 items-start"
      >
        <div className="lg:w-2/5">
          <motion.span
            variants={fadeInUp}
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
          >
            Step 01
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-black mt-6 mb-6"
          >
            Context
            <br />
            <span className="highlight">Layer</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8"
          >
            AI operates in a vacuum unless you provide the environment.
            Good context turns generic responses into tailored solutions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl border-l-4 border-black shadow-md mb-6"
          >
            <h4 className="font-bold text-lg mb-3 flex items-center gap-3">
              Key Insight
            </h4>
            <p className="text-gray-700">
              Context is the foundation. Without it, AI makes assumptions
              that rarely match your actual needs.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-3/5">
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="border-b border-gray-200 p-6 bg-gray-50">
              <h3 className="text-2xl font-bold">Context Comparison</h3>
              <p className="text-gray-600">
                See the dramatic difference proper context makes
              </p>
            </div>

            <div className="p-8">
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <FiXCircle className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Weak Context</h4>
                    <p className="text-sm text-gray-500">
                      Vague, assumption-prone
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="font-mono text-gray-700">
                    <span className="text-gray-400">
                      // What you might type
                    </span>
                    <br />
                    "Write a login form"
                  </div>
                </div>
              </div>

              <div className="relative my-8">
                <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300"></div>
                <div className="relative flex justify-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
                    <FiArrowDown className="text-white" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-4">
                    <FiCheck className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Strong Context</h4>
                    <p className="text-sm text-gray-500">
                      Specific, environment-aware
                    </p>
                  </div>
                </div>
                <div
                  className="text-white p-6 rounded-lg"
                  style={{ backgroundColor: "#475569" }}
                >
                  <div className="font-mono text-sm">
                    <span className="text-gray-300">
                      // Context sets the environment
                    </span>
                    <br />
                    <br />
                    <span className="text-gray-200">
                      "I'm building a
                    </span>{" "}
                    <span className="font-bold">Next.js 14 SaaS app</span>{" "}
                    <span className="text-gray-200">with</span>{" "}
                    <span className="font-bold">TypeScript</span>{" "}
                    <span className="text-gray-200">and</span>{" "}
                    <span className="font-bold">Tailwind</span>.<br />
                    <br />
                    <span className="text-gray-200">Users are</span>{" "}
                    <span className="font-bold">enterprise clients</span>{" "}
                    <span className="text-gray-200">who need</span>{" "}
                    <span className="font-bold">
                      multi-factor authentication
                    </span>
                    .<br />
                    <br />
                    <span className="text-gray-200">
                      We're using
                    </span>{" "}
                    <span className="font-bold">
                      Prisma with PostgreSQL
                    </span>{" "}
                    <span className="text-gray-200">
                      for the database."
                    </span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <motion.button
                      variants={copyButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() =>
                        copyToClipboard(
                          "I'm building a Next.js 14 SaaS app with TypeScript and Tailwind. Users are enterprise clients who need multi-factor authentication. We're using Prisma with PostgreSQL for the database.",
                          "context-copy",
                        )
                      }
                      className="text-sm bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center gap-2"
                    >
                      {copiedId === "context-copy" ? (
                        <>
                          <FiCheck /> Copied!
                        </>
                      ) : (
                        <>
                          <FiCopy /> Copy Template
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
