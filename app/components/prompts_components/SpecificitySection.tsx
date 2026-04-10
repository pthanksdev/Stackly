"use client";

import { motion } from "framer-motion";
import { FiBox, FiCode, FiCopy, FiCheck } from "react-icons/fi";

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

interface SpecificitySectionProps {
  copiedId: string | null;
  copyToClipboard: (text: string, id: string) => void;
}

export default function SpecificitySection({ copiedId, copyToClipboard }: SpecificitySectionProps) {
  return (
    <section id="specificity">
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
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
          >
            Step 02
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mt-6 mb-6"
          >
            Specificity
            <br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Matrix
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            Vague requests get vague results. Precision in requirements
            yields precision in outputs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Component Level */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:border-gray-300 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <FiBox className="text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Component-Level</h3>
                <p className="text-gray-600">Building UI elements</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 mr-3"></div>
                <h4 className="font-bold">Vague Request</h4>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="text-gray-700 font-mono">"Make a button"</p>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-black mr-3"></div>
                <h4 className="font-bold">Specific Request</h4>
              </div>
              <div
                className="text-white p-6 rounded-lg"
                style={{ backgroundColor: "#475569" }}
              >
                <code className="font-mono text-sm block leading-relaxed">
                  "Create a React button component with:
                  <br />
                  • Primary/secondary/ghost variants
                  <br />
                  • Small/medium/large sizes
                  <br />
                  • Loading state with spinner
                  <br />
                  • Disabled state with opacity
                  <br />
                  • Icon support (left/right/both)
                  <br />
                  • Full TypeScript interface
                  <br />
                  • Tailwind classes for dark mode
                  <br />
                  • Accessibility attributes
                  <br />
                  • Storybook stories
                  <br />• Unit tests with Jest"
                </code>
                <motion.button
                  variants={copyButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() =>
                    copyToClipboard(
                      `Create a React button component with:
- Primary/secondary/ghost variants
- Small/medium/large sizes
- Loading state with spinner
- Disabled state with opacity
- Icon support (left/right/both)
- Full TypeScript interface
- Tailwind classes for dark mode
- Accessibility attributes
- Storybook stories
- Unit tests with Jest`,
                      "component-copy",
                    )
                  }
                  className="mt-6 text-sm bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center gap-2"
                >
                  {copiedId === "component-copy" ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Function Level */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:border-gray-300 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <FiCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Function-Level</h3>
                <p className="text-gray-600">Implementing features</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 mr-3"></div>
                <h4 className="font-bold">Vague Request</h4>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <p className="text-gray-700 font-mono">
                  "Write authentication"
                </p>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-black mr-3"></div>
                <h4 className="font-bold">Specific Request</h4>
              </div>
              <div
                className="text-white p-6 rounded-lg"
                style={{ backgroundColor: "#475569" }}
              >
                <code className="font-mono text-sm block leading-relaxed">
                  "Implement a NextAuth.js configuration with:
                  <br />
                  • Email/password login
                  <br />
                  • Google OAuth provider
                  <br />
                  • JWT session strategy
                  <br />
                  • Database adapter for Prisma
                  <br />
                  • Role-based access control
                  <br />
                  • Session callback to add user role
                  <br />
                  • Middleware for route protection
                  <br />• Error handling for each provider"
                </code>
                <motion.button
                  variants={copyButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() =>
                    copyToClipboard(
                      `Implement a NextAuth.js configuration with:
- Email/password login
- Google OAuth provider
- JWT session strategy
- Database adapter for Prisma
- Role-based access control
- Session callback to add user role
- Middleware for route protection
- Error handling for each provider`,
                      "function-copy",
                    )
                  }
                  className="mt-6 text-sm bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center gap-2"
                >
                  {copiedId === "function-copy" ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
