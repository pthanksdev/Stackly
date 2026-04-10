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
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-card-bg rounded-full text-text-muted border border-border-main transition-colors"
          >
            Step 01
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-black mt-6 mb-6 text-text-main"
          >
            Context
            <br />
            <span className="highlight">Layer</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-text-muted mb-8 transition-colors"
          >
            AI operates in a vacuum unless you provide the environment.
            Good context turns generic responses into tailored solutions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-card-bg p-6 rounded-xl border-l-4 border-text-main shadow-md mb-6 transition-colors"
          >
            <h4 className="font-bold text-lg mb-3 flex items-center gap-3 text-text-main">
              Key Insight
            </h4>
            <p className="text-text-muted transition-colors">
              Context is the foundation. Without it, AI makes assumptions
              that rarely match your actual needs.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-3/5">
          <motion.div
            variants={fadeInUp}
            className="bg-card-bg rounded-2xl border-2 border-border-main overflow-hidden shadow-xl transition-colors"
          >
            <div className="border-b border-border-main p-6 bg-page-bg transition-colors">
              <h3 className="text-2xl font-bold text-text-main transition-colors">Context Comparison</h3>
              <p className="text-text-muted transition-colors">
                See the dramatic difference proper context makes
              </p>
            </div>

            <div className="p-8">
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-page-bg flex items-center justify-center mr-4 border border-border-main transition-colors">
                    <FiXCircle className="text-text-muted" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main transition-colors">Weak Context</h4>
                    <p className="text-sm text-text-muted transition-colors">
                      Vague, assumption-prone
                    </p>
                  </div>
                </div>
                <div className="bg-page-bg p-6 rounded-lg border border-border-main transition-colors">
                  <div className="font-mono text-text-muted">
                    <span className="opacity-50">
                      // What you might type
                    </span>
                    <br />
                    <span className="text-text-main">"Write a login form"</span>
                  </div>
                </div>
              </div>

              <div className="relative my-8">
                <div className="absolute left-0 right-0 top-1/2 border-t border-border-main transition-colors"></div>
                <div className="relative flex justify-center">
                  <div className="w-10 h-10 bg-text-main rounded-full flex items-center justify-center shadow-lg transition-colors">
                    <FiArrowDown className="text-page-bg" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-text-main flex items-center justify-center mr-4 transition-colors">
                    <FiCheck className="text-page-bg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main transition-colors">Strong Context</h4>
                    <p className="text-sm text-text-muted transition-colors">
                      Specific, environment-aware
                    </p>
                  </div>
                </div>
                <div
                  className="bg-text-main text-page-bg p-6 rounded-lg shadow-inner"
                >
                  <div className="font-mono text-sm">
                    <span className="opacity-60">
                      // Context sets the environment
                    </span>
                    <br />
                    <br />
                    <span className="opacity-80">
                      "I'm building a
                    </span>{" "}
                    <span className="font-bold">Next.js 14 SaaS app</span>{" "}
                    <span className="opacity-80">with</span>{" "}
                    <span className="font-bold">TypeScript</span>{" "}
                    <span className="opacity-80">and</span>{" "}
                    <span className="font-bold">Tailwind</span>.<br />
                    <br />
                    <span className="opacity-80">Users are</span>{" "}
                    <span className="font-bold">enterprise clients</span>{" "}
                    <span className="opacity-80">who need</span>{" "}
                    <span className="font-bold">
                      multi-factor authentication
                    </span>
                    .<br />
                    <br />
                    <span className="opacity-80">
                      We're using
                    </span>{" "}
                    <span className="font-bold">
                      Prisma with PostgreSQL
                    </span>{" "}
                    <span className="opacity-80">
                      for the database."
                    </span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-page-bg/20">
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
                      className="text-sm bg-page-bg/10 hover:bg-page-bg/20 text-page-bg py-2 px-4 rounded-lg flex items-center gap-2 border border-page-bg/20 transition-all"
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
