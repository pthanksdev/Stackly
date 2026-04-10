"use client";

import { motion } from "framer-motion";
import { FiCheck, FiCopy } from "react-icons/fi";

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

interface ConstraintsSectionProps {
  copiedId: string | null;
  copyToClipboard: (text: string, id: string) => void;
}

export default function ConstraintsSection({ copiedId, copyToClipboard }: ConstraintsSectionProps) {
  return (
    <section id="constraints">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row gap-12"
      >
        <div className="lg:w-2/5">
          <motion.span
            variants={fadeInUp}
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-card-bg rounded-full text-text-muted border border-border-main transition-colors"
          >
            Step 03
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-black mt-6 mb-6 text-text-main"
          >
            Constraints
            <br />
            <span className="highlight">Definition</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-text-muted mb-8 transition-colors"
          >
            The most overlooked yet critical component. Constraints tell
            the AI what <span className="font-bold text-text-main">NOT</span> to do,
            preventing unwanted patterns and assumptions.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-4">
            {[
              "Prevents AI from making incorrect assumptions",
              "Ensures compliance with your tech standards",
              "Eliminates unwanted features or approaches",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-text-main flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors">
                  <FiCheck className="text-page-bg text-xs" />
                </div>
                <p className="text-text-muted transition-colors">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:w-3/5">
          <motion.div
            variants={fadeInUp}
            className="bg-text-main text-page-bg p-8 rounded-2xl shadow-xl transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-page-bg">
              Constraints Example
            </h3>
            <div className="bg-page-bg/10 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6 border border-page-bg/20">
              <span className="text-page-bg font-bold opacity-80 uppercase tracking-widest">
                CONSTRAINTS:
              </span>
              <br />
              <br />
              <div className="space-y-1 opacity-90">
                <span>- DO NOT use any external UI libraries (build from scratch)</span>
                <br />
                <span>- DO NOT use useState for form handling (use react-hook-form)</span>
                <br />
                <span>- DO NOT add any console.log statements in production code</span>
                <br />
                <span>- DO NOT hardcode API URLs (use environment variables)</span>
                <br />
                <span>- DO NOT use any deprecated Next.js 13 patterns</span>
                <br />
                <br />
                <span>- MUST be TypeScript strict mode compliant</span>
                <br />
                <span>- MUST follow ESLint rules (no-explicit-any, etc.)</span>
                <br />
                <span>- MUST be mobile-responsive first</span>
                <br />
                <span>- MUST include unit tests for core functionality</span>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-page-bg opacity-80">
                Copy this constraints template for your projects
              </p>
              <motion.button
                variants={copyButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                  copyToClipboard(
                    `CONSTRAINTS:
- DO NOT use any external UI libraries (build from scratch)
- DO NOT use useState for form handling (use react-hook-form)
- DO NOT add any console.log statements in production code
- DO NOT hardcode API URLs (use environment variables)
- DO NOT use any deprecated Next.js 13 patterns
- MUST be TypeScript strict mode compliant
- MUST follow ESLint rules (no-explicit-any, etc.)
- MUST be mobile-responsive first
- MUST include unit tests for core functionality`,
                    "constraints-copy",
                  )
                }
                className="bg-page-bg text-text-main hover:opacity-90 font-medium py-3 px-6 rounded-lg flex items-center gap-2 shadow-md transition-all"
              >
                {copiedId === "constraints-copy" ? (
                  <>
                    <FiCheck /> Copied!
                  </>
                ) : (
                  <>
                    <FiCopy /> Copy Constraints
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
